import jwt from "jsonwebtoken";
import User from "../models/user.js";
import config from "../../config/index.js";

const isAuth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, config.jwt_secret_key);
    const user = await User.findById(decoded._id);
    if (!user) return res.status(401).json({ message: "Please authenticate" });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token expires please refresh token" });
    next(err);
  }
};

export default isAuth;
