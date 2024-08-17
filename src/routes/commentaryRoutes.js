import { Router } from "express";
import {
  addCommentary,
  getCommentaries,
} from "../controllers/commentaryController.js";
import isAuth from "../middlewares/is-Auth.js";

const router = Router();

router.post("/send-commentary", isAuth, addCommentary);
router.get("/from/:userId", isAuth, getCommentaries);

export default router;
