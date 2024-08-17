import router from "../routes/index.js";
import errorHandler from "../middlewares/error-handler.js";
import rateLimit from "../middlewares/rate-limit.js";
import logger from "../middlewares/logger.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path"

export const modules = async (app, express) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static(path.join(process.cwd(), "uploads")));
  app.use(errorHandler);

  app.use(cors());


  app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
  });

  app.use(rateLimit);

  app.use("/api", router);
};

export default modules;
