import { Formik, Form, Field } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { ADD_PATIENT } from '../../graphql';
import { PatientSchema } from '../../helper/validations';
import { WarningBox } from './warning-box';
import { PATIENT_FORM } from '../../helper/constants';

type MyInputType = {
    field: {
        name: 'firstName' | 'lastName' | 'email' | 'age' | 'registrationNumber' | 'mobileNumber' | 'gender' | 'birthdate' | 'cardNumber'
    }
    form: any
}

export const AddPatientForm = ({ setOpen }: any) => {
    const [addPatient] = useMutation(ADD_PATIENT)
    const clinicId = window.sessionStorage.getItem("clinicId")

    const MyInput = ({ field, form: { errors } }: MyInputType) => {
        let name = field.name

        return (
            <Box sx={{
                width: '95%',
                margin: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: 150
                }}>{PATIENT_FORM[name].name}:</Box>
                <TextField {...field} size='small' placeholder={PATIENT_FORM[name].placeholder} />
                {errors[name] && <WarningBox>{errors[name]}</WarningBox>}
            </Box>
        )
    }

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                age: '',
                registrationNumber: '',
                mobileNumber: '',
                gender: '',
                birthdate: '',
                cardNumber: '',
                clinicId: clinicId
            }}
            validationSchema={PatientSchema}
            onSubmit={values => {
                addPatient({ variables: values }).then((res) => console.log(res))
                setOpen(false)
            }}
        >
            <Form style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <Field name='firstName' component={MyInput} />
                <Field name='lastName' component={MyInput} />
                <Field name='email' component={MyInput} />
                <Field name='age' component={MyInput} />
                <Field name='registrationNumber' component={MyInput} />
                <Field name='mobileNumber' component={MyInput} />
                <Field name='gender' component={MyInput} />
                <Field name='birthdate' component={MyInput} />
                <Field name='cardNumber' component={MyInput} />
                <Button type='submit' variant='outlined'>
                    Өвчтөн нэмэх
                </Button>
            </Form>
        </Formik >
    )
}