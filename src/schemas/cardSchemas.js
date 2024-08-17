import Joi from "joi";

export const createCardSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Title bo'sh bo'lishi mumkin emas",
    "string.min": "Title kamida 3 ta belgi bo'lishi kerak",
    "string.max": "Title ko'pi bilan 100 ta belgi bo'lishi kerak",
    "any.required": "Title talab qilinadi",
  }),
  content: Joi.string().min(10).max(400).required().messages({
    "string.empty": "Content bo'sh bo'lishi mumkin emas",
    "string.min": "Content kamida 10 ta belgi bo'lishi kerak",
    "string.max": "Content ko'pi bilan 400 ta belgi bo'lishi kerak",
    "any.required": "Content talab qilinadi",
  }),
  name: Joi.string().min(5).max(32).required().messages({
    "string.empty": "Name bo'sh bo'lishi mumkin emas",
    "string.min": "Name kamida 5 ta belgi bo'lishi kerak",
    "string.max": "Name ko'pi bilan 32 ta belgi bo'lishi kerak",
    "any.required": "Name talab qilinadi",
  }),
  email: Joi.string().min(10).max(50).required().messages({
    "string.empty": "Email maydonini to'ldirish kerak",
    "string.min": "Kamida 10 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 50 ta belgi bo'lishi kerak",
    "any.required": "Email talab qilinadi",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": "phoneNumber bo'sh bo'lishi mumkin emas",
    "any.required": "phoneNumber talab qilinadi",
  }),
  businessName: Joi.string().min(5).max(244).required().messages({
    "string.empty": "businessName bo'sh bo'lishi mumkin emas",
    "string.min": "businessName kamida 5 ta belgi bo'lishi kerak",
    "string.max": "businessName ko'pi bilan 244 ta belgi bo'lishi kerak",
    "any.required": "businessName talab qilinadi",
  }),
  links: Joi.object({
    telegram: Joi.string().uri().allow("").messages({
      "string.base": "Telegram linki string bo'lishi kerak",
      "string.uri": "Telegram linki to'g'ri URL formatida bo'lishi kerak",
    }),
    instagram: Joi.string().uri().allow("").messages({
      "string.base": "Instagram linki string bo'lishi kerak",
      "string.uri": "Instagram linki to'g'ri URL formatida bo'lishi kerak",
    }),
    facebook: Joi.string().uri().allow("").messages({
      "string.base": "Facebook linki string bo'lishi kerak",
      "string.uri": "Facebook linki to'g'ri URL formatida bo'lishi kerak",
    }),
  })
    .required()
    .min(1)
    .messages({
      "object.base": "Links obyekti bo'lishi kerak",
      "object.min": "Links obyekti ichida kamida bitta link bo'lishi kerak",
      "any.required": "Links obyekti talab qilinadi",
    }),
});

export const updateCardSchema = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Title bo'sh bo'lishi mumkin emas",
    "string.min": "Title kamida 3 ta belgi bo'lishi kerak",
    "string.max": "Title ko'pi bilan 100 ta belgi bo'lishi kerak",
    "any.required": "Title talab qilinadi",
  }),
  content: Joi.string().min(10).required().messages({
    "string.empty": "Content bo'sh bo'lishi mumkin emas",
    "string.min": "Content kamida 10 ta belgi bo'lishi kerak",
    "any.required": "Content talab qilinadi",
  }),
  name: Joi.string().min(5).max(32).required().messages({
    "string.empty": "Name bo'sh bo'lishi mumkin emas",
    "string.min": "Name kamida 5 ta belgi bo'lishi kerak",
    "string.max": "Name ko'pi bilan 32 ta belgi bo'lishi kerak",
    "any.required": "Name talab qilinadi",
  }),
  email: Joi.string().min(10).max(50).required().messages({
    "string.empty": "Email maydonini to'ldirish kerak",
    "string.min": "Kamida 10 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 50 ta belgi bo'lishi kerak",
    "any.required": "Email talab qilinadi",
  }),
  phoneNumber: Joi.string().required().messages({
    "string.empty": "phoneNumber bo'sh bo'lishi mumkin emas",
    "any.required": "phoneNumber talab qilinadi",
  }),
  businessName: Joi.string().min(5).max(244).required().messages({
    "string.empty": "businessName bo'sh bo'lishi mumkin emas",
    "string.min": "businessName kamida 5 ta belgi bo'lishi kerak",
    "string.max": "businessName ko'pi bilan 244 ta belgi bo'lishi kerak",
    "any.required": "businessName talab qilinadi",
  }),
  links: Joi.object({
    telegram: Joi.string().uri().allow("").messages({
      "string.base": "Telegram linki string bo'lishi kerak",
      "string.uri": "Telegram linki to'g'ri URL formatida bo'lishi kerak",
    }),
    instagram: Joi.string().uri().allow("").messages({
      "string.base": "Instagram linki string bo'lishi kerak",
      "string.uri": "Instagram linki to'g'ri URL formatida bo'lishi kerak",
    }),
    facebook: Joi.string().uri().allow("").messages({
      "string.base": "Facebook linki string bo'lishi kerak",
      "string.uri": "Facebook linki to'g'ri URL formatida bo'lishi kerak",
    }),
  })
    .required()
    .min(1)
    .messages({
      "object.base": "Links obyekti bo'lishi kerak",
      "object.min": "Links obyekti ichida kamida bitta link bo'lishi kerak",
      "any.required": "Links obyekti talab qilinadi",
    }),
});
