import mongoose from 'mongoose'

const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    doctorId: String,
    patientId: String,
    clinic: {type: Schema.Types.ObjectId, ref: 'Clinic'},
    serviceId: String,
    status: String,
    startDate: String,
    title: String,
    endDate: String,
    notes: String,
});

export const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);