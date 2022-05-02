import * as Yup from 'yup';

export const PatientSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Invalid email address'),
  age: Yup.number()
    .min(2, 'Too Short!')
    .max(150, 'Too Long!')
    .required('Required'),
  registrationNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  mobileNumber: Yup.string()
    .min(8, 'Too Short!')
    .max(8, 'Too Long!')
    .required('Required'),
  gender: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  birthdate: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  cardNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});