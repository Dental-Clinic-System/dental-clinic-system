import mongoose from 'mongoose'

const { Schema } = mongoose;

const ProvinceSchema = new Schema({
    code: String,
    name: String,
    name_en: String,
});

export const ProviceModel = mongoose.model("Province", ProvinceSchema);