import { createUserValidation, getUserByAccountNumberValidation, getUserByIdentityNumberValidation } from '../validations/user-validations.js';
import { isValidObjectId, validate } from '../validations/validation.js';

import { ResponseError } from '../errors/response-errors.js';
import cacheUtils from '../utils/cache-utils.js';
import { userRepositories } from '../repositories/index.js';

const checkUserExist = async (key, value) => {
 key = key === 'id' ? '_id' : key;
 return await userRepositories.findByProperty(key, value);
};

const find = async (key) => {
 const result = await userRepositories.find();

 await cacheUtils.setCache(key, result);

 return result;
};

const findById = async (key, id) => {
 if (!isValidObjectId(id)) throw new ResponseError(400, 'ID tidak valid');

 const isUserExist = await checkUserExist('id', id);

 if (!isUserExist) throw new ResponseError(404, 'User tidak terdaftar');

 const result = await userRepositories.findById(id);

 await cacheUtils.setCache(key, result);

 return result;
};

const findByAccountNumber = async (key, accountNumber) => {
 accountNumber = validate(getUserByAccountNumberValidation, accountNumber);

 if (!(await checkUserExist('accountNumber', accountNumber))) throw new ResponseError(404, 'User tidak terdaftar');

 const result = await userRepositories.findByProperty('accountNumber', accountNumber);

 await cacheUtils.setCache(key, result);

 return result;
};

const findByIdentityNumber = async (key, identityNumber) => {
 identityNumber = validate(getUserByIdentityNumberValidation, identityNumber);

 if (!(await checkUserExist('identityNumber', identityNumber))) throw new ResponseError(404, 'User tidak terdaftar');

 const result = await userRepositories.findByProperty('identityNumber', identityNumber);

 await cacheUtils.setCache(key, result);

 return result;
};

const save = async (key, userPayload) => {
 userPayload = validate(createUserValidation, userPayload);
 const { emailAddress, accountNumber, identityNumber } = userPayload;

 if (await checkUserExist('emailAddress', emailAddress)) throw new ResponseError(404, 'Email sudah terdaftar');

 if (await checkUserExist('accountNumber', accountNumber)) throw new ResponseError(404, 'Nomor telepon sudah terdaftar');

 if (await checkUserExist('identityNumber', identityNumber)) throw new ResponseError(404, 'Nomor identitas sudah terdaftar');

 const result = await userRepositories.save(userPayload);

 await cacheUtils.deleteCache(key);

 return { Id: result.id };
};

const update = async (key, id, userPayload) => {
 if (!isValidObjectId(id)) throw new ResponseError(400, 'ID tidak valid');

 const isUserExist = await checkUserExist('id', id);

 if (!isUserExist) throw new ResponseError(404, 'User tidak terdaftar');

 const result = await userRepositories.update(id, userPayload);

 await cacheUtils.deleteCache(key);
 await cacheUtils.deleteCache(`/api/users/account-number/${isUserExist.accountNumber}`);
 await cacheUtils.deleteCache(`/api/users/identity-number/${isUserExist.identityNumber}`);

 return { Id: result.id };
};

const remove = async (key, id) => {
 if (!isValidObjectId(id)) throw new ResponseError(400, 'ID tidak valid');

 const isUserExist = await checkUserExist('id', id);

 if (!isUserExist) throw new ResponseError(404, 'User tidak terdaftar');

 const result = await userRepositories.remove(id);

 await cacheUtils.deleteCache(key);
 await cacheUtils.deleteCache('/api/users');
 await cacheUtils.deleteCache(`/api/users/account-number/${isUserExist.accountNumber}`);
 await cacheUtils.deleteCache(`/api/users/identity-number/${isUserExist.identityNumber}`);

 return { Id: result.id };
};

export default { find, findById, findByAccountNumber, findByIdentityNumber, save, update, remove };
