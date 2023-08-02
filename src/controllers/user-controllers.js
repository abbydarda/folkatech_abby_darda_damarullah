import { userServices } from '../services/index.js';

const find = async (req, res, next) => {
 try {
  const { key } = req.cache;
  const result = await userServices.find(key);

  const response = {
   isCache: false,
   message: 'Berhasil mengambil data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

const findById = async (req, res, next) => {
 try {
  const { id } = req.params;
  const { key } = req.cache;
  const result = await userServices.findById(key, id);

  const response = {
   isCache: false,
   message: 'Berhasil mengambil data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

const findByAccountNumber = async (req, res, next) => {
 try {
  const { accountNumber } = req.params;
  const { key } = req.cache;
  const result = await userServices.findByAccountNumber(key, accountNumber);

  const response = {
   isCache: false,
   message: 'Berhasil mengambil data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

const findByIdentityNumber = async (req, res, next) => {
 try {
  const { identityNumber } = req.params;
  const { key } = req.cache;
  const result = await userServices.findByIdentityNumber(key, identityNumber);

  const response = {
   isCache: false,
   message: 'Berhasil mengambil data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

const save = async (req, res, next) => {
 try {
  const userPayload = req.body;

  const { key } = req.cache;
  const result = await userServices.save(key, userPayload);

  const response = {
   message: 'Berhasil menambah data',
   data: result,
  };

  res.status(201).json(response);
 } catch (error) {
  next(error);
 }
};

const update = async (req, res, next) => {
 try {
  const { id } = req.params;
  const userPayload = req.body;

  const { key } = req.cache;
  const result = await userServices.update(key, id, userPayload);

  const response = {
   message: 'Berhasil mengubah data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

const remove = async (req, res, next) => {
 try {
  const { id } = req.params;

  const { key } = req.cache;
  const result = await userServices.remove(key, id);

  const response = {
   message: 'Berhasil menghapus data',
   data: result,
  };

  res.status(200).json(response);
 } catch (error) {
  next(error);
 }
};

export default { find, findById, findByAccountNumber, findByIdentityNumber, save, remove, update };
