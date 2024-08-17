import { Router } from "express";
import authRoutes from "./authRoutes.js";
import cardRoutes from "./cardRoutes.js";
import userRoutes from "./userRoutes.js";
import commentaryRoutes from "./commentaryRoutes.js";

const router = Router();

router.use("/auth", authRoutes);
router.use("/cards", cardRoutes);
router.use("/users", userRoutes);
router.use("/commentaries", commentaryRoutes);

export default router;
