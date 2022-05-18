import mongoose, { Schema } from "mongoose";

const SuppliesSchema = new Schema(
  {
    clinicId: { type: Schema.Types.ObjectId, ref: "Clinic" },
    itemName: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      unique: true,
    },
    barCode: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 2
    },
    itemCode: {
      type: String,
      required: true,
      maxlength: 32,
      minlength: 2
    },
    quantity: {
      type: String,
      required: true,
      maxlength: 64,
      minlength: 2,
      //unique: true,
    },
  },
);
SuppliesSchema.index({ clinicId: 1, itemCode: 1 }, { unique: true });

const Supplies = mongoose.model("Supplies", SuppliesSchema);

export { Supplies };
