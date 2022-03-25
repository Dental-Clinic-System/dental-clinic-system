import { gql } from '@apollo/client'

export const UsersQuery = gql`
query GetUsers($address: String, $id: String, $firstname: String, $lastname: String, $birth: String, $email: String, $phone: String, $username: String, $password: String, $timestamp: String, $clinicId: String, $role: String, $serviceId: String) {
  getUsers(address: $address, _id: $id, firstname: $firstname, lastname: $lastname, birth: $birth, email: $email, phone: $phone, username: $username, password: $password, timestamp: $timestamp, clinicId: $clinicId, role: $role, serviceId: $serviceId) {
    _id
    username
    address
    firstname
    lastname
    email
    phone
    birth
    timestamp
    password
    role
    clinicId
    serviceId
  }
}
`;

export const ServicesQuery = gql`
query GetServices($id: String, $classification: String, $serviceName: String, $code: String, $short: String, $description: String, $price: String) {
  getServices(_id: $id, classification: $classification, service_name: $serviceName, code: $code, short: $short, description: $description, price: $price) {
    _id
    classification  
    code
    service_name
    short
    description
    price
  }
}
`
export const ClinicsQuery = gql`
query GetClinics {
  getClinics {
    _id
    clinic_name
    operation_date
    operation_name
    contact_number
    clinic_web
    email
    status
    clinic_admin {
      admin_number
      admin_email
      admin_name
      position
    }
    workhours
    phone
    official_address {
      city
      district
      sub_district
      full_address
    }
  }
}
`
export const PatientsQuery = gql`
query GetPatient($id: String, $lastname: String, $firstname: String, $birth: String, $age: String, $registrationNumber: String, $sex: String, $city: String, $district: String, $committee: String, $addressDescription: String, $role: String, $phone: String, $homePhone: String, $email: String, $doctor: String, $cardNumber: String, $sysdate: String) {
  getPatients(_id: $id, lastname: $lastname, firstname: $firstname, birth: $birth, age: $age, registration_number: $registrationNumber, sex: $sex, city: $city, district: $district, committee: $committee, address_description: $addressDescription, role: $role, phone: $phone, home_phone: $homePhone, email: $email, doctor: $doctor, card_number: $cardNumber, sysdate: $sysdate) {
    _id
    lastname
    firstname
    birth
    age
    registration_number
    sex
    city
    district
    committee
    address_description
    role
    phone
    home_phone
    doctor
    email
    card_number
    sysdate
  }
}
`
export const AppointmentsQuery = gql`
query AppointmentsQuery($id: String, $userId: String, $patientId: String, $status: String, $clinicId: String, $serviceId: String, $date: String, $hour: String) {
  getAppointments(_id: $id, userId: $userId, patientId: $patientId, status: $status, clinicId: $clinicId, serviceId: $serviceId, date: $date, hour: $hour) {
    _id
    userId
    patientId
    clinicId
    status
    date
    serviceId
    hour
  }
}
`