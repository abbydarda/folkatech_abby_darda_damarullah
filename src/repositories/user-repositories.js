import { usersSchemas } from '../databases/schemas/index.js';
const { User } = usersSchemas;

const count = (key, value) => {
 return User.countDocuments({ [key]: value });
};

const find = () => {
 return User.find();
};

const findById = (id) => {
 return User.findById(id);
};

const findByProperty = (key, value) => {
 return User.findOne({ [key]: value });
};

const save = (userpayload) => {
 return User.create(userpayload);
};

const update = (id, userPayload) => {
 return User.findByIdAndUpdate(id, userPayload);
};

const remove = (id) => {
 return User.findByIdAndDelete(id);
};

export default { count, find, findById, findByProperty, save, update, remove };
