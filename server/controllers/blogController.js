import { Blog } from "../models/blogSchema.js"

export const getAllBlogs = async (req, res) => {
    try {
        const allblogs = await Blog.find({})
        if (allblogs) {
            return res.status(200).json({ allblogs:allblogs, success: true })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}

export const addBlog = async (req, res) => {
    const { title, category, description } = req.body
    const thumbnail = req.file.filename
    const user = req.user._id

    try {
        if (!title || !category || !description || !thumbnail) {
            return res.status(400).json({ error: "All fields are required", success: false })
        }
        const newBlog = new Blog({
            title, category, description, thumbnail, user
        }) 
        const saveBlog = await newBlog.save()
        if (saveBlog) {
            return res.status(200).json({ message: "Blog added successfully", success: true })
        }

    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}

export const getSingleBlog = async (req, res) => {
    const id = req.params.id
    try {
        const blog = await Blog.findById(id)
        if (blog) {
            return res.status(200).json({ blog:blog, success: true })
        }
    } catch (error) {
        return res.status(500).json({ error: error.message, success: false })
    }
}