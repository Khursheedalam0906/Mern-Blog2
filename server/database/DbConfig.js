import mongoose from "mongoose";

const Dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to database")
    } catch (error) {
        console.log("Error while connectiong to database", error)
    }
}

export default Dbconnection