import mongoose from 'mongoose'

const { Schema } = mongoose;

const RoleSchema = new Schema({
    title: String,
    permission: Array,
    clinicId: String,
});

export const RoleModel = mongoose.model("Role", RoleSchema);