import mongoose from 'mongoose'

const { Schema } = mongoose;

const PatientSchema = new Schema({
    email: String,
    firstname: String,
    lastname: String,
    password: String,
    clinicId: String,
    phone: String,
});

export const PatientModel = mongoose.model("Patient", PatientSchema);