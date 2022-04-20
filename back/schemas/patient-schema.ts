import mongoose from 'mongoose'

const { Schema } = mongoose;

const PatientSchema = new Schema({
    lastname: String,
    firstname: String,
    birth: String,
    age: String,
    registration_number: String,
    sex: String,
    city: String,
    district: String,
    committee: String,
    address_description: String,
    role: String,
    phone: String,
    home_phone: String,
    email: String,
    doctor: String,
    card_number: String,
    sysdate: String,
    history: [{
        serviceId: String,
        clinicId: String,
        date: String,
        payment: String,
        detail: String,
    }]
});

export const PatientModel = mongoose.model("Patient", PatientSchema); //mongoDB deer Patient -> patients bolj huviraad collection bolno.