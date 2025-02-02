import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exist"]
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const User = mongoose.model("users", userSchema)