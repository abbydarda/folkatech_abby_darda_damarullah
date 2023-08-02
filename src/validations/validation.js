import { ResponseError } from '../errors/response-errors.js';
import mongoose from 'mongoose';

const validate = (schema, request) => {
 const result = schema.validate(request);

 if (result.error) throw new ResponseError(400, result.error.message);

 return result.value;
};

const isValidObjectId = (objectId) => mongoose.Types.ObjectId.isValid(objectId);

export { validate, isValidObjectId };
