import mongoose, { Schema } from "mongoose";

const PatientHistorySchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
    appointmentId: { type: Schema.Types.ObjectId, ref: "Appointment", required: false },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    note: { type: String },
    toReport: { type: Boolean },
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: "pending",
    },
},
    { timestamps: true }
);

const PatientHistory = mongoose.model("PatientHistory", PatientHistorySchema);

export { PatientHistory };
