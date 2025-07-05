import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "User does not have token" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(400).json({ message: "Invalid token" });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("JWT verify error:", error.message);
    return res
      .status(500)
      .json({ message: "Internal server error while matching token" });
  }
};

export default isAuth;
