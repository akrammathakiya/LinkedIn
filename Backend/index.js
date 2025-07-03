import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const port = process.env.PORT || 8000
const app = express();

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    connectDB()
    console.log("server is started");
    
})