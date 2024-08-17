import express from "express";

/**
 * @param {object} schema
 * @param {string} redirectPath
 * @returns {function}
 */
export function validate(schema, redirectPath) {
  try {

    /**
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    return function (req, res, next) {

      if (req.body.links) {
        try {
          req.body.links = JSON.parse(req.body.links);
        } catch (parseError) {
          console.error("JSON Parse Error:", parseError);
          return res.status(400).json({ message: "Links must be a valid JSON object" });
        }
      }
      
      console.log("Request Body:", req.body);

      const { error, value } = schema.validate(req.body);

      if (error) {
        console.error("Validation Error:", error.details);
        res.status(404).json({ message: error.message });
        return;
      }

      req.body = value;

      next();
    };

  } catch (err) {
    next(err)
  }
}

export default validate;
