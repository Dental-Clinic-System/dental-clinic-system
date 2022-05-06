import mongoose, { Schema } from "mongoose";

const ClinicSchema = new Schema({
  title: { type: String, maxlength: 255, minlength: 2 },
  email: { type: String, maxlength: 50, minlength: 2 },
  contact_number: { type: String, maxlength: 8, minlength: 8, required: true },
  address: { type: String, maxlength: 1000, minlength: 10 },
  district: { type: String, maxlength: 64, minlength: 2 },
  khoroo: { type: String, maxlength: 64, minlength: 2 },
  status: {
    type: String,
    enum: ["pending", "active", "inactive"],
    default: "pending",
  },
  timetable: { type: Schema.Types.Mixed, required: false },
});

const Clinic = mongoose.model("Clinic", ClinicSchema);

export { Clinic };
