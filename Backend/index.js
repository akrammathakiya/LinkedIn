import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 8000
const app = express();
app.use(express.json())
app.use(cookieParser())

app.use("/api/user",userRouter)




app.use(express.json())
app.listen(port,()=>{
    connectDB()
    console.log("server is started");
    
})