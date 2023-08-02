import { ResponseError } from '../errors/response-errors.js';
import { isValidObjectId } from '../validations/validation.js';
import { jwtUtils } from '../utils/index.js';

const isAuthorized = (req, res, next) => {
 const authorizationHeader = req.header('authorization');
 if (!authorizationHeader) throw new ResponseError(401, 'Tidak punya akses');

 const [schema, token] = authorizationHeader.split(' ');

 if (schema !== 'Bearer' || !jwtUtils.verify(token)) throw new ResponseError(401, 'Token tidak valid');

 const decodeToken = jwtUtils.decode(token);

 if (isValidObjectId(`${decodeToken.sub}`) === false) throw new ResponseError(401, 'Token tidak valid');

 req.cache = {
  key: req.originalUrl,
 };

 next();
};

export { isAuthorized };
