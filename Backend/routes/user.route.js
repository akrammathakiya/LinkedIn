import express from "express"
import { login, logOut, signup } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/logout",logOut)




export default userRouter