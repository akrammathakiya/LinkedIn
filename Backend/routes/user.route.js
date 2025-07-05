import express from "express"
import { getCurrentUser, login, logOut, signup } from "../controllers/user.controller.js"
import isAuth from "../middlewares/auth.middleware.js"

const userRouter = express.Router()

userRouter.post("/signup",signup)
userRouter.post("/login",login)
userRouter.get("/logout",logOut)
userRouter.get("/currentuser",isAuth,getCurrentUser)




export default userRouter