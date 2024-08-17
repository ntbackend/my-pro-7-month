import { connect } from "mongoose";
import config from "../../config/index.js";

export const runner = async (app) => {
  const port = config.port || 5000;
  connect(config.mongoUrl);

  console.log("Connected MongoDB");
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

export default runner;
