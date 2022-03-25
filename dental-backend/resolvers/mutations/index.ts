import { permission_mutation } from './permission_mutation'
import { clinic_mutation } from './clinic_mutation'
import { appointment_mutation } from './appointment_mutation'
import { patient_history_mutation } from './patient_history_mutation'
import { patient_mutation } from './patient_mutation'
import { service_mutation } from './service_mutation'
import { user_mutation } from './user_mutation'
import { role_mutation } from './role_mutation'

export const Mutation = {
    ...appointment_mutation,
    ...clinic_mutation,
    ...patient_history_mutation,
    ...patient_mutation,
    ...permission_mutation,
    ...role_mutation,
    ...service_mutation,
    ...user_mutation
  }
