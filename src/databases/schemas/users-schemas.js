import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
 {
  userName: Schema.Types.String,
  emailAddress: {
   type: Schema.Types.String,
   index: true,
   unique: true,
  },
  accountNumber: {
   type: Schema.Types.String,
   unique: true,
   index: true,
  },
  identityNumber: {
   type: Schema.Types.String,
   unique: true,
   index: true,
  },
 },
 {
  versionKey: false,
  timestamps: true,
  toJSON: {
   transform(doc, ret) {
    ret.Id = ret._id;
    delete ret._id;
   },
  },
 },
);

const User = mongoose.model('User', userSchema);

export default { User };
