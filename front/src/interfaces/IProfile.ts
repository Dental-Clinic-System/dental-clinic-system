export interface IProfile {
    _id: String,
    username: String,
    firstname: String,
    lastname: String,
    address: String,
    email: String,
    phone: String,
    birth: String,
    timestamp: {
        mon: String,
        tue: String,
        wed: String,
        thu: String,
        fri: String
    },
    role: String, // ["admin", "superadmin", "worker"],
    clinicId: String,
    serviceId: String,
    info: String
}