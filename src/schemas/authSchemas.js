import Joi from "joi";

export const registerSchema = Joi.object({
  firstName: Joi.string().min(4).max(30).required().messages({
    "string.empty": "firstName maydonini to'ldirish kerak",
    "string.min": "Kamida 4 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 30 ta belgi bo'lishi kerak",
    "any.required": "firstName talab qilinadi",
  }),
  lastName: Joi.string().min(4).max(30).required().messages({
    "string.empty": "lastName maydonini to'ldirish kerak",
    "string.min": "Kamida 4 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 30 ta belgi bo'lishi kerak",
    "any.required": "lastName talab qilinadi",
  }),
  username: Joi.string().min(4).max(30).required().messages({
    "string.empty": "Username maydonini to'ldirish kerak",
    "string.min": "Kamida 4 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 30 ta belgi bo'lishi kerak",
    "any.required": "Username talab qilinadi",
  }),
  email: Joi.string().min(10).max(50).required().messages({
    "string.empty": "Email maydonini to'ldirish kerak",
    "string.min": "Kamida 10 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 50 ta belgi bo'lishi kerak",
    "any.required": "Email talab qilinadi",
  }),
  password: Joi.string().min(4).max(30).required().messages({
    "string.empty": "Password maydonini to'ldirish kerak",
    "string.min": "Kamida 4 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 30 ta belgi bo'lishi kerak",
    "any.required": "Password talab qilinadi",
  }),
});

export const loginSchema = Joi.object({
  email: Joi.string().min(10).max(50).required().messages({
    "string.empty": "Email maydonini to'ldirish kerak",
    "string.min": "Kamida 10 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 50 ta belgi bo'lishi kerak",
    "any.required": "Email talab qilinadi",
  }),
  password: Joi.string().min(4).max(30).required().messages({
    "string.empty": "Password maydonini to'ldirish kerak",
    "string.min": "Kamida 4 ta belgi bo'lishi kerak",
    "string.max": "Ko'pi bilan 30 ta belgi bo'lishi kerak",
    "any.required": "Password talab qilinadi",
  }),
});
