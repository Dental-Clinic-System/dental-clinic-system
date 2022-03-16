import mongoose from 'mongoose'

const { Schema } = mongoose;

const ClinicSchema = new Schema({
    clinic_name: String,
    operation_name: String,
    operation_date: String,
    contact_number:String,
    clinic_web: String,
    email: String,
    official_address: {
        city: String,
        district: String,   
        sub_district: String,
        full_address:String
    },
    status: String,
    clinic_admin:{
        admin_number:String,
        admin_email:String,
        admin_name:String,
        position:String
    },
    workhours: Object,
    phone: String,
});

export const ClinicModel = mongoose.model("Clinic", ClinicSchema);