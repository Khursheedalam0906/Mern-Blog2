import { Category } from "../models/categorySchema.js"

export const addCategory = async (req, res) => {
    const { title } = req.body

    console.log(title)

    try {
        if (!title) {
            return res.status(400).json({ error: "Please fill the fields", success: false })
        }
        const newCategory = new Category({
            title
        })
        const saveCategory = await newCategory.save()
        if (saveCategory) {
            return res.status(200).json({ message: "Category save successfully", success: true })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}

export const getCategory = async (req, res) => {
    try {
        const getallcategory = await Category.find({})
        if (getallcategory) {
            return res.status(200).json({ allcategory: getallcategory, success: true })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}