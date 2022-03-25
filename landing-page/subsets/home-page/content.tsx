import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADDCLINIC } from '../../graphql';
import { useMutation } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  clinicName: yup.string().required('Clinic name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  contactNumber: yup.string().required('contact number is required '),
  city: yup.string().required('Please enter a city name') ,
  district: yup.string().required('Please enter a district name'),
  sub_district: yup.string().required('Please enter a sub district'),
  full_address: yup.string().required('Please enter a full address'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export const HomePageContent = () => {
  const [formData, setFormData] = useState<any>({});
  const [AddClinic] = useMutation(ADDCLINIC);
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });
  const formik = useFormik({
    initialValues: {
      clinicName:'',
      email: '',
      password: 'foobar',
      contactNumber: '',
      city: '',
      district: '',
      sub_district: '',
      full_address:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // setSnackBar({ message: 'Хүсэлт илгээж байна.', open: true, severity: 'info' });
      // try {
      //   await AddClinic({ variables: formData });

      //   setSnackBar({ message: 'Таны хүсэлтийг хүлээж авлаа.', open: true, severity: 'success' });
      // } catch (error) {
      //   setSnackBar({ message: 'Та мэдээллээ бүтэн оруулна уу!!', open: true, severity: 'error' });
      // }
    },
  });

  const onChange = (id: string, _: string, change: string) => {
    setFormData({ ...formData, [id]: change });
  };

  const onSubmit = async () => {
    setSnackBar({ message: 'Хүсэлт илгээж байна.', open: true, severity: 'info' });
    try {
      await AddClinic({ variables: formData });

      setSnackBar({ message: 'Таны хүсэлтийг хүлээж авлаа.', open: true, severity: 'success' });
    } catch (error) {
      setSnackBar({ message: 'Та мэдээллээ бүтэн оруулна уу!!', open: true, severity: 'error' });
    }
  };

  return (
    <Box width="100vw" display="flex" flexDirection="column" alignItems="center" marginY={5}>
      <Grid container justifyContent="center" columns={{ xs: 11 }} rowSpacing={5}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <QuestionSection
            label="Эмнэлгийн мэдээлэл"
            questions={[
              {
                id: 'clinicName',
                question: 'Эмнэлгийн нэр',
                type: 'input',
                grid: { xs: 12 },
                error: Boolean(formik.errors.clinicName),
                value: formik.values.clinicName,
                onChange: formik.handleChange,
              },
              {
                id: 'contactNumber',
                question: 'Холбоо барих утас',
                type: 'input',
                grid: { xs: 12 },
                error: Boolean(formik.errors.contactNumber),
                value: formik.values.contactNumber,
                onChange: formik.handleChange,
              },
              {
                id: 'email',
                question: 'Имэйл хаяг',
                type: 'input',
                grid: { xs: 12 },
                error: Boolean(formik.errors.email),
                value: formik.values.email,
                onChange: formik.handleChange,
              },
            ]}
          />
        </Grid>

        <Grid item xs={6}>
          <QuestionSection
            label="Албан ёсны хаяг"
            questions={[
              {
                id: 'city',
                question: 'Аймаг / хот',
                type: 'input',
                grid: { xs: 5.4 },
                error: Boolean(formik.errors.city),
                value: formik.values.city,
                onChange: formik.handleChange,
              },
              {
                id: 'district',
                question: 'Дүүрэг',
                type: 'input',
                grid: { xs: 5.4 },
                error: Boolean(formik.errors.district),
                value: formik.values.district,
                onChange: formik.handleChange,
              },
              {
                id: 'sub_district',
                question: 'Хороо',
                type: 'input',
                grid: { xs: 5.4 },
                error: Boolean(formik.errors.sub_district),
                value: formik.values.sub_district,
                onChange: formik.handleChange,
              },
              {
                id: 'full_address',
                question: 'Дэлгэрэнгүй хаяг',
                type: 'input',
                grid: { xs: 12 },
                error: Boolean(formik.errors.full_address),
                value: formik.values.full_address,
                onChange: formik.handleChange,
              },
            ]}
          />
        </Grid>

        <Grid item container xs={6} justifyContent="flex-end">
          <Grid item xs={4}>
            <Button onClick={() => formik.handleSubmit} fullWidth variant="contained">
              Илгээх
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <SnackBar
        open={snackBar.open}
        handleClose={() => setSnackBar({ ...snackBar, open: false })}
        message={snackBar.message}
        severity={snackBar.severity}
      />
    </Box>
  );
};
// };
