import mongoose from 'mongoose'

const { Schema } = mongoose;

const ServiceSchema = new Schema({
    clinicId: String,
    title: String,
    description: String,
});

export const ServiceModel = mongoose.model("Service", ServiceSchema);