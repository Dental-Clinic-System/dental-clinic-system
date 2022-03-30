import mongoose from 'mongoose'

const { Schema } = mongoose;

const CommitteeSchema = new Schema({
    code: String,
    name: String,
    grand_parent: String,
    parent: String,
    name_en: String
});

export const CommitteeModel = mongoose.model("Committtee", CommitteeSchema);