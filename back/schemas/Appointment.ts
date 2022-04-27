import mongoose, { Schema } from 'mongoose'

const AppointmentSchema = new Schema({
    staff: { type: Schema.Types.ObjectId, ref: "Staff" },
    staffId: { type: Schema.Types.ObjectId },
    patientId: String,
    clinic: { type: Schema.Types.ObjectId, ref: "Clinic" },
    clinicId: { type: Schema.Types.ObjectId },
    serviceId: String,
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: "pending",
    },
    startDate: { type: String, maxlength: 25, minlength: 8 },
    title: { type: String, maxlength: 255, minlength: 2 },
    endDate: { type: String, maxlength: 25, minlength: 8 },
    notes: { type: String, maxlength: 1000, minlength: 2 },
});

export const AppointmentModel = mongoose.model("Appointment", AppointmentSchema);