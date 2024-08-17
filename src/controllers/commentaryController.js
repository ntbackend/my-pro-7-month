import Commentary from "../models/commentary.js";
import User from "../models/user.js";

export const addCommentary = async (req, res, next) => {
  const { toUserId, message } = req.body;
  try {
    const fromUserId = req.user._id;

    const toUser = await User.findById(toUserId);
    if (!toUser)
      return res.status(404).json({ message: "Receiver user not found" });

    const commentary = new Commentary({
      fromUser: fromUserId,
      toUser: toUserId,
      message,
    });

    await commentary.save();
    res.status(201).json(commentary);
  } catch (err) {
    next(err);
  }
};

export const getCommentaries = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const commentaries = await Commentary.find({ toUser: userId }).populate(
      "fromUser",
      "username"
    );

    res.json(commentaries);
  } catch (err) {
    next(err);
  }
};
