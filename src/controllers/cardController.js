import QRCode from "qrcode";
import Card from "../models/card.js";
import path from "path";

export const getCards = async (req, res, next) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    next(err);
  }
};

export const getUserCards = async (req, res, next) => {
  const { id } = req.params
  try {
    const card = await Card.findById(id);
    res.json(card);
  } catch (err) {
    next(err);
  }
};

export const searchCards = async (req, res, next) => {
  try {
    const { query } = req.query;

    let cards;
    if (query) {
      cards = await Card.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { content: { $regex: query, $options: 'i' } }
        ]
      });
    } else {
      cards = await Card.find();
    }

    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', err });
    next(err)
  }
};

export const createCard = async (req, res, next) => {
  const { title, content, name, email, phoneNumber, businessName, links } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: "Fayl tanlanmagan" });
    }

    const filePath = path.join(req.file.filename);
    const image = filePath;

    const card = new Card({
      title,
      content,
      image,
      name,
      user: req.user._id,
      email,
      phoneNumber,
      businessName,
      links
    });
    await card.save();

    const cardId = card._id;
    const link = `${req.protocol}://${req.get('host')}/api/cards/${cardId}`;

    const qrCode = await QRCode.toDataURL(link);

    res.status(201).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>QR Code</title>
      </head>
      <body>
          <h1>QR Code for your card</h1>
          <img src="${qrCode}" alt="QR Code">
          <p>QR kodni skanerlash orqali sizning kartangizga o'tishingiz mumkin.</p>
      </body>
      </html>
    `);
  } catch (err) {
    next(err);
  }
};

export const updateCard = async (req, res, next) => {
  const { id } = req.params;
  const { title, content, name, email, phoneNumber, businessName, links } = req.body;

  try {
    const findCard = await Card.findById(id);
    if (!findCard) return res.status(404).json({ message: "Card not found" });

    if (findCard.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this card" });
    }

    const filePath = req.file
      ? path.join("uploads", req.file.filename)
      : path.join("uploads", "default-card.png");
    const image = filePath;

    const card = await Card.findByIdAndUpdate(
      id,
      { title, content, name, email, phoneNumber, businessName, links },
      { new: true }
    );

    res.status(200).json(card);
  } catch (err) {
    next(err);
  }
};

export const deleteCard = async (req, res, next) => {
  const { id } = req.params;
  try {
    const findCard = await Card.findById(id);
    if (!findCard) return res.status(404).json({ message: "Card not found" });

    if (findCard.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this card" });
    }

    await Card.findByIdAndDelete(id);

    res.status(204).json({ message: "Delete sucessful" });
  } catch (err) {
    next(err);
  }
};
