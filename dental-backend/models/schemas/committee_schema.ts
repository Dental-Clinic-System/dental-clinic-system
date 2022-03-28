import mongoose from 'mongoose'

const { Schema } = mongoose;

const CommitteeSchema = new Schema({
    _id: String,
    district: String,
    name: String
});

export const CommitteeModel = mongoose.model("Committtee", CommitteeSchema);