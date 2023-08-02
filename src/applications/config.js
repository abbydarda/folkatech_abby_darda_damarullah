import 'dotenv/config';

const config = {
 APP_PORT: process.env.APP_PORT,
 JWT_SECRET: process.env.JWT_SECRET,
 JWT_EXP: process.env.JWT_EXP,
 DB_URI: process.env.DB_URI,
 REDIS_URI: process.env.REDIS_URI,
};

export default config;
