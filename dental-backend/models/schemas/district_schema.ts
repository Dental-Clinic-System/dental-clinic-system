import mongoose from 'mongoose'

const { Schema } = mongoose;

const DistrictSchema = new Schema({
    code: String,
    name: String,
    parent: String,
    name_en: String
});

export const DistrictModel = mongoose.model("District", DistrictSchema);