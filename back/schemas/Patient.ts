import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema({
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
    firstName: { type: String, maxlength: 50, minlength: 2, required: true },
    lastName: { type: String, maxlength: 50, minlength: 2, required: true },
    stateRegNumber: { type: String, maxlength: 50, minlength: 2, required: true },
    mobileNumber: { type: String, maxlength: 8, minlength: 2, required: true },
    email: { type: String, maxlength: 50, minlength: 2 },
    gender: { type: String, maxlength: 8, minlength: 2 },
    age: { type: String, maxlength: 3, minlength: 2 },
    birthdate: { type: String, maxlength: 3, minlength: 2 },
    cardNumber: { type: String, maxlength: 50, minlength: 2 },
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: "pending",
    },
});

const Patient = mongoose.model("Patient", PatientSchema);

export { Patient };
