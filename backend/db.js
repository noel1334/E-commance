import mongoose from "mongoose"


export const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/laraholics")
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }
}