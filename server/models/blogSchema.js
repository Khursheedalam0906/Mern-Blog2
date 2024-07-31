import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories"
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    }
}, { timestamps: true })

export const Blog = mongoose.model("blogs", blogSchema)