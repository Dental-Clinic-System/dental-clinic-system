import mongoose, { Schema } from "mongoose";

const StaffSchema = new Schema(
  {
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic" },
    username: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      unique: true,
    },
    first_name: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 2
    },
    last_name: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 2
    },
    email: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      //unique: true,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 8,
      minlength: 6
    },
    last_login: String,
    availability: String,
    type: String,
    timestamp: Boolean,
    password: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      index: true,
    },
  },
  { timestamps: true }
);
StaffSchema.index({ clinicId: 1, email: 1 }, { unique: true });

const Staff = mongoose.model("Staff", StaffSchema);

export { Staff };
