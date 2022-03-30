import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADDCLINIC } from '../../graphql';
import { useMutation } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  clinicName: Yup.string().max(50).required('Clinic name is required'),
  email: Yup.string().max(50).email('Not a valid email').required('Email is required'),
  phone: Yup.string().min(8).max(11).required('contact number is required ').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/),
  city: Yup.string().required('Please enter a city name'),
  district: Yup.string().required('Please enter a district name'),
  sub_district: Yup.string().required('Please enter a sub district'),
  full_address: Yup.string().max(200).required('Please enter a full address'),
});

export const HomePageContent = () => {
  const [AddClinic] = useMutation(ADDCLINIC);
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });

  const formik = useFormik({
    initialValues: {
      clinicName: '',
      email: '',
      phone: '',
      city: '',
      district: '',
      sub_district: '',
      full_address: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSnackBar({ message: 'Хүсэлт илгээж байна.', open: true, severity: 'info' });
      try {
        await AddClinic({ variables: values });

        setSnackBar({ message: 'Таны хүсэлтийг хүлээж авлаа.', open: true, severity: 'success' });
      } catch (error) {
        console.log(error);
        setSnackBar({ message: 'Хүсэлт илгээхэд алдаа гарлаа.', open: true, severity: 'error' });
      }
    },
  });

  return (
    <Box width="100vw" display="flex" flexDirection="column" alignItems="center" marginY={5}>
      <form onSubmit={formik.handleSubmit}>
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
                  helperText:'',
                  value: formik.values.clinicName,
                  onChange: formik.handleChange,
                },
                {
                  id: 'phone',
                  question: 'Холбоо барих утас',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.phone),
                  helperText:'',
                  value: formik.values.phone,
                  onChange: formik.handleChange,
                },
                {
                  id: 'email',
                  question: 'Имэйл хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.email),
                  helperText:'',
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
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.city),
                  helperText:'',
                  value: formik.values.city,
                  selections: ['ulanbaatar', 'erdenet'],
                  onChange: formik.handleChange,
                },
                {
                  id: 'district',
                  question: 'Сум / Дүүрэг',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.district),
                  helperText:'',
                  value: formik.values.district,
                  onChange: formik.handleChange,
                },
                {
                  id: 'sub_district',
                  question: 'Баг / Хороо',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.sub_district),
                  helperText:'',
                  value: formik.values.sub_district,
                  onChange: formik.handleChange,
                },
                {
                  id: 'full_address',
                  question: 'Дэлгэрэнгүй хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.full_address),
                  helperText:'',
                  value: formik.values.full_address,
                  onChange: formik.handleChange,
                },
              ]}
            />
          </Grid>

          <Grid item container xs={6} justifyContent="flex-end">
            <Grid item xs={4}>
              <Button fullWidth variant="contained" type="submit">
                Илгээх
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>

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
