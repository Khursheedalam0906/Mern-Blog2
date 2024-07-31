import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title: {
        type: String
    }
}, { timeStamps: true })

export const Category = mongoose.model("categories", categorySchema)