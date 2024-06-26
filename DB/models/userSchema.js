import { Schema, model } from 'mongoose';

const userSchema = Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    role: { type: String, default: 'GENERAL' },
    status: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export default User;
