import User from "../models/user.js";
import path from "path";
import bcryptjs from "bcryptjs";

export const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id)

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user._id.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to show this user" });
    }

    res.json({ message: user });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { firstName, lastName, username, email, password } = req.body;

  try {
    const findUser = await User.findById(id);

    if (!findUser) return res.status(404).json({ message: "User not found" });

    if (findUser._id.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this user" });
    }

    let hashedPassword;
    if (password) {
      hashedPassword = await bcryptjs.hash(password, 10);
    }

    const filePath = req.file
      ? path.join("uploads", req.file.filename)
      : path.join("uploads", "default-user.png");
    const userAvatar = filePath;

    const user = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, username, email, password: hashedPassword, avatar: userAvatar },
      {
        new: true,
      }
    );

    res.json({ message: user });
  } catch (err) {
    next(err);
  }
};
