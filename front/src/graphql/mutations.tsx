import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation AddPatient(
    $clinicId: String
    $firstName: String
    $registrationNumber: String
    $lastName: String
    $mobileNumber: String
    $email: String
    $gender: String
    $age: String
    $birthdate: String
    $cardNumber: String
  ) {
    addPatient(
      clinicId: $clinicId
      firstName: $firstName
      registrationNumber: $registrationNumber
      lastName: $lastName
      mobileNumber: $mobileNumber
      email: $email
      gender: $gender
      age: $age
      birthdate: $birthdate
      cardNumber: $cardNumber
    ) {
      _id
      clinicId {
        title
      }
      firstName
      lastName
      registrationNumber
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
  mutation UpdatePatient(
    $clinicId: String
    $firstName: String
    $lastName: String
    $stateRegNumber: String
    $email: String
    $mobileNumber: String
    $age: String
    $gender: String
    $birthdate: String
    $cardNumber: String
    $id: String
  ) {
    updatePatient(
      clinicId: $clinicId
      firstName: $firstName
      lastName: $lastName
      stateRegNumber: $stateRegNumber
      email: $email
      mobileNumber: $mobileNumber
      age: $age
      gender: $gender
      birthdate: $birthdate
      cardNumber: $cardNumber
      _id: $id
    ) {
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
  mutation AddClinic(
    $address: String
    $district: String
    $khoroo: String
    $status: String
    $title: String
    $email: String
    $contact_number: String
  ) {
    addClinic(
      address: $address
      district: $district
      khoroo: $khoroo
      status: $status
      title: $title
      email: $email
      contact_number: $contact_number
    ) {
      title
      _id
      address
      district
      khoroo
      status
      email
      contact_number
    }
  }
`;

export const UPDATE_CLINIC = gql`
  mutation UpdateClinic(
    $_id: String
    $address: String
    $district: String
    $khoroo: String
    $status: String
    $title: String
    $email: String
    $contactNumber: String
  ) {
    updateClinic(
      _id: $_id
      address: $address
      district: $district
      khoroo: $khoroo
      status: $status
      title: $title
      email: $email
      contact_number: $contactNumber
    ) {
      title
      _id
      address
      district
      khoroo
      status
      email
      contact_number
    }
  }
`;

export const UPDATE_CLINIC_STATUS = gql`
  mutation UpdateClinicStatus($_id: String, $status: String) {
    updateClinicStatus(_id: $_id, status: $status) {
      title
      _id
      address
      district
      khoroo
      status
      email
      contact_number
      clinic_name
      password
    }
  }
`;

export const DELETE_CLINIC = gql`
  mutation DeleteClinic($_id: String) {
    deleteClinic(_id: $_id) {
      title
      _id
      address
      district
      khoroo
      status
      email
      contact_number
    }
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
  mutation Mutation(
    $clinicId: String
    $username: String
    $lastName: String
    $firstName: String
    $phone: String
    $email: String
    $password: String
  ) {
    addStaff(
      clinicId: $clinicId
      username: $username
      last_name: $lastName
      first_name: $firstName
      phone: $phone
      email: $email
      password: $password
    ) {
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
  mutation UpdateAppointment(
    $id: String
    $title: String
    $startDate: String
    $clinicId: String
    $staffId: String
    $patientId: String
    $serviceId: String
    $endDate: String
    $notes: String
    $status: String
  ) {
    updateAppointment(
      _id: $id
      title: $title
      startDate: $startDate
      clinicId: $clinicId
      staffId: $staffId
      patientId: $patientId
      serviceId: $serviceId
      endDate: $endDate
      notes: $notes
      status: $status
    ) {
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
`;
export const ADD_PATIENT_HISTORY = gql`
  mutation AddPatientHistory(
    $clinicId: String
    $patientId: String
    $appointmentId: String
    $serviceId: String
    $note: String
    $toReport: String
    $toothId: String
    $toothSides: [String]
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
`;

export const DELETE_APPOINTMENT = gql`
  mutation DeleteAppointment($id: String) {
    deleteAppointment(_id: $id) {
      _id
    }
  }
`;
export const UPDATE_STAFF = gql`
  mutation Mutation(
    $username: String!
    $type: StaffType
    $clinicId: String!
    $lastName: String
    $firstName: String
    $phone: String
    $email: String
    $password: String
    $availability: availability
  ) {
    updateStaff(
      username: $username
      type: $type
      clinicId: $clinicId
      last_name: $lastName
      first_name: $firstName
      phone: $phone
      email: $email
      password: $password
      availability: $availability
    )
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation AddAppointment(
    $clinicId: String
    $patientId: String
    $staffId: String
    $serviceId: String
    $startDate: String
    $title: String
    $endDate: String
    $notes: String
    $status: String
  ) {
    addAppointment(
      clinicId: $clinicId
      patientId: $patientId
      staffId: $staffId
      serviceId: $serviceId
      startDate: $startDate
      title: $title
      endDate: $endDate
      notes: $notes
      status: $status
    ) {
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
`;
