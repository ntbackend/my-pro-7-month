import { Schema, model } from "mongoose";

const cardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "uploads/default-card.png",
  },
  phoneNumber: {
    type: String,
    required: true
  },
  links: {
    telegram: {
      type: String,
    },
    instagram: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
});

export default model("Card", cardSchema);
