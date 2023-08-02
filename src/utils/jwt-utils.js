import config from '../applications/config.js';
import jwt from 'jsonwebtoken';

const generate = (payload) => jwt.sign(payload, config.JWT_SECRET, { expiresIn: config.JWT_EXP });
const verify = (token) => {
 try {
  return jwt.verify(token, config.JWT_SECRET);
 } catch (error) {
  return false;
 }
};

const decode = (token) => jwt.decode(token);

export default { generate, verify, decode };
