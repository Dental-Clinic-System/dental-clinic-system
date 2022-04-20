export interface IUser {
    id: String,
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
    role: String,
    clinicId: String,
    serviceId: String,
    profileImage: String,
    information: String
}