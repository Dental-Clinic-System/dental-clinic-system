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
  phone: yup.string().required('contact number is required '),
  city: yup.string().required('Please enter a city name'),
  district: yup.string().required('Please enter a district name'),
  sub_district: yup.string().required('Please enter a sub district'),
  full_address: yup.string().required('Please enter a full address'),
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
                  value: formik.values.clinicName,
                  onChange: formik.handleChange,
                },
                {
                  id: 'phone',
                  question: 'Холбоо барих утас',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.phone),
                  value: formik.values.phone,
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
