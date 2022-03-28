import mongoose from 'mongoose'

const { Schema } = mongoose;

const DistrictSchema = new Schema({
    _id: String,
    province: String,
    name: String
});

export const DistrictModel = mongoose.model("Distric", DistrictSchema);