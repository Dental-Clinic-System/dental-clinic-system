import mongoose from 'mongoose'

const { Schema } = mongoose;

const PatientHistorySchema = new Schema({
    patientId: String,
    serviceId: String,
    clinicId: String,
    date: String,
});

export const PatientHistoryModel = mongoose.model("PatientHistory", PatientHistorySchema);