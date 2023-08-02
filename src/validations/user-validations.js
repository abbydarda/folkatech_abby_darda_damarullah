import joi from 'joi';

const createUserValidation = joi.object({
 userName: joi.string().max(100).required().empty('').messages({
  'string.base': 'nama harus berupa string',
  'string.max': 'nama maksimal 100 karakter',
  'any.required': 'nama harus diisi',
  'string.empty': 'nama tidak boleh kosong',
 }),
 emailAddress: joi.string().max(100).required().empty('').email().messages({
  'string.base': 'email address harus berupa string',
  'string.max': 'email address maksimal 100 karakter',
  'any.required': 'email address harus diisi',
  'string.empty': 'email address tidak boleh kosong',
  'string.email': 'email address tidak valid',
 }),
 accountNumber: joi.string().max(20).required().empty('').messages({
  'string.base': 'nomor telepon harus berupa string',
  'string.max': 'nomor telepon maksimal 20 karakter',
  'any.required': 'nomor telepon harus diisi',
  'string.empty': 'nomor telepon tidak boleh kosong',
 }),
 identityNumber: joi.string().max(50).required().empty('').messages({
  'string.base': 'nomor identitas harus berupa string',
  'string.max': 'nomor identitas maksimal 50 karakter',
  'any.required': 'nomor identitas harus diisi',
  'string.empty': 'nomor identitas tidak boleh kosong',
 }),
});

const updateUserValidation = joi.object({
 userName: joi.string().max(100).empty('').messages({
  'string.base': 'nama harus berupa string',
  'string.max': 'nama maksimal 100 karakter',
  'string.empty': 'nama tidak boleh kosong',
 }),
 emailAddress: joi.string().max(100).empty('').messages({
  'string.base': 'email address harus berupa string',
  'string.max': 'email address maksimal 100 karakter',
  'string.empty': 'email address tidak boleh kosong',
 }),
 accountNumber: joi.string().max(20).empty('').messages({
  'string.base': 'nomor telepon harus berupa string',
  'string.max': 'nomor telepon maksimal 20 karakter',
  'string.empty': 'nomor telepon tidak boleh kosong',
 }),
 identityNumber: joi.string().max(50).empty('').messages({
  'string.base': 'nomor identitas harus berupa string',
  'string.max': 'nomor identitas maksimal 50 karakter',
  'string.empty': 'nomor identitas tidak boleh kosong',
 }),
});

const getUserByAccountNumberValidation = joi.string().empty().required().messages({
 'string.base': 'nomor telepon harus berupa string',
 'string.empty': 'nomor telepon tidak boleh kosong',
 'any.required': 'nomor telepon harus diisi',
});

const getUserByIdentityNumberValidation = joi.string().empty().required().messages({
 'string.base': 'nomor identitas harus berupa string',
 'string.empty': 'nomor identitas tidak boleh kosong',
 'any.required': 'nomor identitas harus diisi',
});

export { createUserValidation, updateUserValidation, getUserByAccountNumberValidation, getUserByIdentityNumberValidation };
