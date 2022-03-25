import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
const { Schema } = mongoose;

const UserSchema = new Schema({
    address: String,
    firstname: String,
    lastname: String,
    birth: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    timestamp: String,
    role: String,
    clinicId: String,
    serviceId: String
});

export const UserModel = mongoose.model("User", UserSchema);