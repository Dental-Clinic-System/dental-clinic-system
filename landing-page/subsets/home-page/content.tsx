import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADDCLINIC } from '../../graphql';
import { useMutation } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LeftSide } from './';

const validationSchema = Yup.object().shape({
  title: Yup.string().max(50).required('Clinic name is required'),
  email: Yup.string().max(50).email('Not a valid email').required('Email is required'),
  contact_number: Yup.string()
    .min(8)
    .max(11)
    .required('contact number is required ')
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/),
  city: Yup.string().required('Please enter a city name'),
  district: Yup.string().required('Please enter a district name'),
  khoroo: Yup.string().required('Please enter a sub district'),
  address: Yup.string().max(200).required('Please enter a full address'),
});

const RightSide = () => {
  const [AddClinic] = useMutation(ADDCLINIC);
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });

  const formik = useFormik({
    initialValues: {
      title: '',
      email: '',
      contact_number: '',
      district: '',
      khoroo: '',
      address: '',
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
    <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" marginY={5} paddingTop={6}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center" columns={{ xs: 11 }} rowSpacing={4}>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <QuestionSection
              label="Эмнэлгийн мэдээлэл"
              questions={[
                {
                  id: 'title',
                  question: 'Эмнэлгийн нэр',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.title),
                  helperText: '',
                  value: formik.values.title,
                  onChange: formik.handleChange,
                },
                {
                  id: 'contact_number',
                  question: 'Холбоо барих утас',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.contact_number),
                  helperText: '',
                  value: formik.values.contact_number,
                  onChange: formik.handleChange,
                },
                {
                  id: 'email',
                  question: 'Имэйл хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.email),
                  helperText: '',
                  value: formik.values.email,
                  onChange: formik.handleChange,
                },
              ]}
            />
          </Grid>

          <Grid item xs={8}>
            <QuestionSection
              label="Албан ёсны хаяг"
              questions={[
                {
                  id: 'district',
                  question: 'Сум / Дүүрэг',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.district),
                  helperText: '',
                  value: formik.values.district,
                  selections: ['БЗД', 'СБД'],
                  onChange: formik.handleChange('district'),
                },
                {
                  id: 'khoroo',
                  question: 'Баг / Хороо',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.khoroo),
                  helperText: '',
                  value: formik.values.khoroo,
                  selections: ['1-р хороо', '2-р хороо'],
                  onChange: formik.handleChange('khoroo'),
                },
                {
                  id: 'address',
                  question: 'Дэлгэрэнгүй хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.address),
                  helperText: '',
                  value: formik.values.address,
                  onChange: formik.handleChange,
                },
              ]}
            />
          </Grid>

          <Grid item container xs={8} justifyContent="flex-end">
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

export const HomePageContent = () => {
  return (
    <Grid container alignItems="center" height="100vh">
      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <LeftSide />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <RightSide />
      </Grid>
    </Grid>
  );
};
