import "dotenv/config";

export const config = {
  port: +process.env.PORT,
  mongoUrl: process.env.MONGOBD_URL,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
  jwt_expires: process.env.JWT_EXPIRES,
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

export default config;
