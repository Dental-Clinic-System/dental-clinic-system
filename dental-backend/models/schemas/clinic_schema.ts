import mongoose from 'mongoose'

const { Schema } = mongoose;

const ClinicSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    status: String,
    workhours: String,
    phone: String,
});

export const ClinicModel = mongoose.model("Clinic", ClinicSchema);