import mongoose from 'mongoose'

const { Schema } = mongoose;

const ProvinceSchema = new Schema({
    _id: String,
    name: String
});

export const ProviceModel = mongoose.model("Province", ProvinceSchema);