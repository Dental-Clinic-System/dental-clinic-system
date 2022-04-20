import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic" },
    title: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
    },
    shortName: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
    },
    code: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      index: true,
    },
    price: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
    },
    description: {
      type: String,
      required: true,
      maxlength: 81,
      minlength: 2,
    },
  },
  { timestamps: true }
);
ServiceSchema.index({ clinicId: 1, title: 1, email: 1 }, { unique: true });

const Service = mongoose.model("Service", ServiceSchema);

export { Service };
