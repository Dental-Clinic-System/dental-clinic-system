import mongoose from 'mongoose'

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {type: String, unique: true},
});

export const UserModel = mongoose.model("User", UserSchema);

