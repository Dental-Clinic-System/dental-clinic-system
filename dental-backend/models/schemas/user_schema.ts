import mongoose from 'mongoose'

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  timestamp: String,
  role: String,
  clinicId: String,
  serviceId: String,
});

export const UserModel = mongoose.model("User", UserSchema);