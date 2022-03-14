import mongoose from 'mongoose'

const { Schema } = mongoose;

const PermissionSchema = new Schema({
    title: String,
    description: String
});

export const PermissionModel = mongoose.model("Permission", PermissionSchema);