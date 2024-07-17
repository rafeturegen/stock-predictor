import mongoose from "mongoose";

export default async function connectMongoDB(){
    const uri = process.env.MONGODB_URI;

    if(!uri){
        throw new Error("MONGODB_URI is not defined!")
    }

    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect MongoDB:", error)
    }
    
}