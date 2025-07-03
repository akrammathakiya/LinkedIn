import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    let { firstName, lastName, userName, email, password } = req.body;

    let existedUserWithEmail = await User.findOne({ email });
    if (existedUserWithEmail) {
      return res
        .status(400)
        .json({ message: "User already exists with this email !" });
    }
    let existedUserWithUsername = await User.findOne({ userName });
    if (existedUserWithUsername) {
      return res
        .status(400)
        .json({ message: "User already exists with this Username !" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters !" });
    }

    let hassedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      userName,
      email,
      password: hassedPassword,
    });

    let token = await genToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: process.env.NODE_ENVIRONMENT === "production",
    });

    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error while creating the user" });
  }
};

export const login = async (req,res) => {
  try {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "user does't exist !" });
    }

    let verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({ message: "incorrect password !" });
    }

    let token = genToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
      secure: process.env.NODE_ENVIRONMENT === "production",
    });

    return res.status(200).json({user});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "internal server error while login the user" });
  }
};

export const logOut = async (req,res) =>{
    try {
        res.clearCookie("token")
        return res
        .status(200)
        .json({message:"LogOut successfully"})
    } catch (error) {
        return res
        .status(500)
        .json({ message: "internal server error while logout the user" });
    }  
}

