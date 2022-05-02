import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation AddPatient($clinicId: String, $firstName: String, $stateRegNumber: String, $lastName: String, $mobileNumber: String, $email: String, $gender: String, $age: String, $birthdate: String, $cardNumber: String) {
  addPatient(clinicId: $clinicId, firstName: $firstName, stateRegNumber: $stateRegNumber, lastName: $lastName, mobileNumber: $mobileNumber, email: $email, gender: $gender, age: $age, birthdate: $birthdate, cardNumber: $cardNumber) {
    _id
    clinicId {
      title
    }
    firstName
    lastName
    stateRegNumber
    mobileNumber
    email
    gender
    age
    birthdate
    cardNumber
  }
}
`;

export const DELETE_PATIENT = gql`
  mutation Mutation($id: String) {
  deletePatient(_id: $id) {
    _id
  }
}
`;

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($clinicId: String, $firstName: String, $lastName: String, $stateRegNumber: String, $email: String, $mobileNumber: String, $age: String, $gender: String, $birthdate: String, $cardNumber: String, $id: String) {
  updatePatient(clinicId: $clinicId, firstName: $firstName, lastName: $lastName, stateRegNumber: $stateRegNumber, email: $email, mobileNumber: $mobileNumber, age: $age, gender: $gender, birthdate: $birthdate, cardNumber: $cardNumber, _id: $id) {
    _id
    firstName
    lastName
    stateRegNumber
    mobileNumber
    email
    gender
    age
    birthdate
    cardNumber
  }
}
`;
export const ADD_CLINIC = gql`
  mutation Mutation(
    $clinic_name: String
    $contact_number: String
    $email: String
    $official_address: Official_address_type
    $status: String
  ) {
    addClinic(
      clinic_name: $clinic_name
      contact_number: $contact_number
      email: $email
      official_address: $official_address
      status: $status
    ) {
      _id
      clinic_name
      contact_number
      email
      official_address {
        city
        district
        sub_district
        full_address
      }
      status
    }
  }
`;
export const DELETE_CLINIC = gql`
  mutation DeleteClinic($id: String) {
    deleteClinic(_id: $id)
  }
`;

export const ADD_SERVICE = gql`
  mutation AddService(
    $clinicId: String
    $serviceName: String
    $serviceCode: String
    $price: String
    $description: String
  ) {
    addService(
      clinicId: $clinicId
      serviceName: $serviceName
      serviceCode: $serviceCode
      price: $price
      description: $description
    ) {
      clinicId
      serviceName
      _id
      serviceCode
      price
      description
    }
  }
`;
export const UPDATE_SERVICE = gql`
  mutation UpdateService(
    $_id: String
    $serviceName: String
    $serviceCode: String
    $price: String
    $description: String
  ) {
    updateService(
      _id: $_id
      serviceName: $serviceName
      serviceCode: $serviceCode
      price: $price
      description: $description
    ) {
      clinicId
      serviceName
      _id
      price
      serviceCode
      description
    }
  }
`;
export const DELETE_SERVICE = gql`
  mutation DeleteService($_id: String) {
    deleteService(_id: $_id) {
      clinicId
      _id
    }
  }
`;
export const ADD_STAFF = gql`
  mutation Mutation($clinicId: String, $username: String, $lastName: String, $firstName: String, $phone: String, $email: String, $password: String) {
    addStaff(clinicId: $clinicId, username: $username, last_name: $lastName, first_name: $firstName, phone: $phone, email: $email, password: $password) {
      clinicId
      type
      last_name
      first_name
      phone
      username
      email
      timestamp
      availability
    }
  }
`;

export const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment($id: String, $title: String, $startDate: String, $clinicId: String, $staffId: String, $patientId: String, $serviceId: String, $endDate: String, $notes: String, $status: String) {
  updateAppointment(_id: $id, title: $title, startDate: $startDate, clinicId: $clinicId, staffId: $staffId, patientId: $patientId, serviceId: $serviceId, endDate: $endDate, notes: $notes, status: $status) {
    _id
    clinicId 
    staffId
    patientId
    serviceId
    title
    startDate
    endDate
    notes
    status
  }
}
`
export const ADD_PATIENT_HISTORY = gql`
mutation AddPatientHistory($clinicId: String,$patientId: String,$appointmentId: String,$serviceId: String,$note: String,$toReport: String,$toothId: String,$toothSides: [String],
) {
  addPatientHistory(
    clinicId: $clinicId
    patientId: $patientId
    appointmentId: $appointmentId
    serviceId: $serviceId
    note: $note
    toReport: $toReport
    toothId: $toothId
    toothSides: $toothSides
  ) {
    _id
  }
}
`

export const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointment($id: String) {
    deleteAppointment(_id: $id) {
      _id
    }
  }
`
export const UPDATE_STAFF = gql`
  mutation Mutation($username: String!, $type: StaffType, $clinicId: String!, $lastName: String, $firstName: String, $phone: String, $email: String, $password: String, $availability: availability) {
    updateStaff(username: $username, type: $type, clinicId: $clinicId, last_name: $lastName, first_name: $firstName, phone: $phone, email: $email, password: $password, availability: $availability) 
  }
`

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment($clinicId: String, $patientId: String, $staffId: String, $serviceId: String, $startDate: String, $title: String, $endDate: String, $notes: String, $status: String) {
    addAppointment(clinicId: $clinicId, patientId: $patientId, staffId: $staffId, serviceId: $serviceId, startDate: $startDate, title: $title, endDate: $endDate, notes: $notes, status: $status) {
      _id
      clinicId
      staffId
      patientId
      serviceId
      startDate
      title
      notes
      status
      endDate
    }
  }
`
