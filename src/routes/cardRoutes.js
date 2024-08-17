import express from "express";
import {
  getCards,
  getUserCards,
  searchCards,
  createCard,
  updateCard,
  deleteCard,
} from "../controllers/cardController.js";
import validate from "../middlewares/validate.js";
import upload from "../middlewares/upload.js";
import { createCardSchema, updateCardSchema } from "../schemas/cardSchemas.js";
import isAuth from "../middlewares/is-Auth.js";

const router = express.Router();

router.get("/all", getCards);
router.get("/card/:id", getUserCards);
router.get('/search', searchCards);
router.post("/create-card", isAuth, upload.single("image"), validate(createCardSchema), createCard);
router.put("/update/:id/my-card", isAuth, upload.single("image"), validate(updateCardSchema), updateCard);
router.delete("/delete/:id/card", isAuth, deleteCard);

export default router;
