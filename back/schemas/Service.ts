import mongoose, { Schema } from "mongoose";

const ServiceSchema = new Schema(
  {
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic" },
    serviceName: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
    },
    serviceCode: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 2,
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
);
ServiceSchema.index({ clinicId: 1, serviceName: 1, serviceCode: 1 }, { unique: true });

const Service = mongoose.model("Service", ServiceSchema);

export { Service };
