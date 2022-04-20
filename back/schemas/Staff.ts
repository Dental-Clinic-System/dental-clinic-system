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
    email: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      //unique: true,
    },
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
