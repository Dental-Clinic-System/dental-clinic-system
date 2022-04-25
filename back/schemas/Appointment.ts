import mongoose, { Schema } from 'mongoose'

const AppointmentSchema = new Schema({
    staffId: { type: Schema.Types.ObjectId, ref: "Staff" },
    patientId: String,
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic" },
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