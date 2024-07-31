import jwt from 'jsonwebtoken'
import { User } from '../models/userSchema.js'

const checkIsUserAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;

    try {
        let token = authorization.split(" ")[1]
        const { userID } = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        req.user = await User.findById(userID).select("--password")
        next()
    } catch (error) {
        return res.status(400).json({ error: "unAuthorized User", success: false })
    } 

}

export default checkIsUserAuthenticated