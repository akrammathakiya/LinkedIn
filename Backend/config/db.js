import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected!!");
    } catch (error) {
        console.log("mongoDB connection error",error)
    }
}
export default connectDB