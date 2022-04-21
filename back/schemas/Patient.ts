import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema({
    clinic_id: { type: Schema.Types.ObjectId, ref: "Clinic", required: true },
    first_name: { type: String, maxlength: 50, minlength: 2, required: true },
    last_name: { type: String, maxlength: 50, minlength: 2, required: true },
    state_reg_number: { type: String, maxlength: 50, minlength: 2, required: true },
    mobile_number: { type: String, maxlength: 8, minlength: 2, required: true },
    email: { type: String, maxlength: 50, minlength: 2 },
    gender: { type: String, maxlength: 8, minlength: 2 },
    age: { type: String, maxlength: 3, minlength: 2 },
    birthdate: { type: String, maxlength: 3, minlength: 2 },
    card_number: { type: String, maxlength: 50, minlength: 2 },
    status: {
        type: String,
        enum: ["pending", "active", "inactive"],
        default: "pending",
    },
});

const Patient = mongoose.model("Patient", PatientSchema);

export { Patient };
