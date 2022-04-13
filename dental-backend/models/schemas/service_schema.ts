import mongoose from 'mongoose'

const { Schema } = mongoose;

const ServiceSchema = new Schema({
    clinicId: String,
    serviceName: String,
    description: String,
    code: String,
    shortName: String,
    price: String,
});

export const ServiceModel = mongoose.model("Service", ServiceSchema);