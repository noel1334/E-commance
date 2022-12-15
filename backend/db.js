import mongoose from "mongoose"


export const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27010/laraholicis", () => {
        console.log("Database connected")
    })
}