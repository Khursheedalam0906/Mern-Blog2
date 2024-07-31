import bcrypt from 'bcrypt'
import { User } from '../models/userSchema.js'
import jwt from 'jsonwebtoken'

export const userRegister = async (req, res) => {
    const { name, email, password } = req.body
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Please enter all fields.", success: false })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ error: "Email already exist", success: false })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        await User.create({ name, email, password: hashPassword })
        return res.status(201).json({ message: "User register successfully", success: true })

    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}

export const userLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        if (!email || !password) {
            return res.status(400).json({ error: "Please enter all fields.", success: false })
        }
        const userExist = await User.findOne({ email })
        if (!userExist) {
            return res.status(400).json({ error: "User does not exist", success: false })
        }
        const comparePassword = await bcrypt.compare(password, userExist.password)
        if (comparePassword) {
            const token = jwt.sign({ userID: userExist._id }, process.env.TOKEN_SECRET_KEY, { expiresIn: "3d" })
            return res.status(200).json({ message: "Login Successfully", username: userExist.name, token, success: true })
        }
        return res.status(400).json({ error: "Wrong Credentials" })

    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}