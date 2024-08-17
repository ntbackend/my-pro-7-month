import User from "../models/user.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import path from "path"

export const register = async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const findUsername = await User.findOne({ username });
    const findEmail = await User.findOne({ email })

    if (findUsername)
      return res
        .status(409)
        .json({ message: "Username oldin foydalanilgan" });

    if (findEmail)
      return res
        .status(409)
        .json({ message: "Emaildan oldin foydalanilgan" });

    const user = new User({
      firstName,
      lastName,
      username,
      email,
      password,
    });

    await user.save();

    const token = jwt.sign({ _id: user._id }, config.jwt_secret_key, {
      expiresIn: config.jwt_expires,
    });

    res.status(200).json({ Token: token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Username yoki Parol xato" });
    }

    const token = jwt.sign({ _id: user._id }, config.jwt_secret_key, {
      expiresIn: config.jwt_expires,
    });

    res.json({ Token: token });
  } catch (err) {
    next(err);
  }
};
