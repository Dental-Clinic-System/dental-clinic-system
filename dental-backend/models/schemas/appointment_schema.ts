import mongoose from 'mongoose'

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    userId: String,
    patientId: String,
    clinicId: String,
    serviceId: String,
    status: String,
    date: String,
    hour: String,
});

export const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);