import mongoose from 'mongoose'

const { Schema } = mongoose;

const ClinicSchema = new Schema({
    clinic_name: String,
    contact_number:String,
    email: String,
    official_address: {
        city: String,
        district: String,   
        sub_district: String,
        full_address:String
    },
    status: String,
});

export const ClinicModel = mongoose.model("Clinic", ClinicSchema);