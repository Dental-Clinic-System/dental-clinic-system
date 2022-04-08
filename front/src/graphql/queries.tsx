import { gql } from '@apollo/client';

export const GET_PATIENTS = gql`
 query GetPatients {
  getPatients {
    _id
    lastname
    firstname
    age
    birth
    registration_number
    city
    sex
    district
    address_description
    committee
    role
    phone
    home_phone
    email
    doctor
    card_number
    sysdate
  }
}   
`