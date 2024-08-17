import express from "express";
import { getUser, updateUser } from "../controllers/userController.js";
import upload from "../middlewares/upload.js";
import isAuth from "../middlewares/is-Auth.js";

const router = express.Router();

router.get("/show/:id/user", isAuth, getUser);
router.put("/update/:id/user", isAuth, upload.single("avatar"), updateUser);

export default router;
