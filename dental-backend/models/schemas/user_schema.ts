import mongoose from 'mongoose'
import nodemailer from 'nodemailer'
const { Schema } = mongoose;

const UserSchema = new Schema({
    address: String,
    firstname: String,
    lastname: String,
    birth: String,
    email: String,
    phone: String,
    username: String,
    password: String,
    timestamp: String,
    role: String,
    clinicId: String,
    serviceId: String
});
UserSchema.post('update', function (doc) {
    console.log(doc);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email,
            pass: process.env.password
        }
    });

    const mailOptions = {
        from: "dental-clinic from",
        to: doc.email,
        subject: 'your request is accepted from superadmin ✔',
        html: "<b>here</b>",
    };
    let data = doc
    .model("User")
    .finOneAndUpdate({ _id: doc._id }, { role: "user" });
    console.log(data)

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});


export const UserModel = mongoose.model("User", UserSchema);