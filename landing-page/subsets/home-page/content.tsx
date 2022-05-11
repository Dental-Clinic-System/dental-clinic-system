import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADD_CLINIC } from '../../graphql';
import { useMutation } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LeftSide } from './';

export const ClinicSchema = Yup.object({
  title: Yup.string()
    .min(2, 'Хэт богино')
    .max(45, 'Хэт урт')
    .required('Эмнэлгийн нэр шаардлагатай'),
  email: Yup.string().email('Алдаатай имэйл').required('Имэйл шаардлагатай'),
  contact_number: Yup.string()
    .min(8, 'Хэт богино')
    .max(8, 'Хэт урт')
    .required('Утасны дугаар шаардлагатай'),
  district: Yup.string().required('Дүүрэг сонгоно уу'),
  khoroo: Yup.string().required('Хороо сонгоно уу'),
  address: Yup.string()
    .min(10, 'Хэт богино')
    .max(200, 'Хэт урт')
    .required('Дэлгэрэнгүй хаяг оруулна уу'),
});

const RightSide = () => {
  const [addClinic] = useMutation(ADD_CLINIC);
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
    validationSchema: ClinicSchema,
    onSubmit: async (values) => {
      setSnackBar({ message: 'Хүсэлт илгээж байна.', open: true, severity: 'info' });
      try {
        await addClinic({ variables: values });
        setSnackBar({ message: 'Таны хүсэлтийг хүлээж авлаа.', open: true, severity: 'success' });
      } catch (error) {
        console.log(error);
        setSnackBar({ message: 'Хүсэлт илгээхэд алдаа гарлаа.', open: true, severity: 'error' });
      }
    },
  });

  console.log(formik.errors.title)

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
                  helperText: formik.errors.title,
                  value: formik.values.title,
                  onChange: formik.handleChange,
                },
                {
                  id: 'email',
                  question: 'Имэйл хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.email),
                  helperText: formik.errors.email,
                  value: formik.values.email,
                  onChange: formik.handleChange,
                },
                {
                  id: 'contact_number',
                  question: 'Холбоо барих утас',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.contact_number),
                  helperText: formik.errors.contact_number,
                  value: formik.values.contact_number,
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
                  helperText: formik.errors.district,
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
                  helperText: formik.errors.khoroo,
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
                  helperText: formik.errors.address,
                  value: formik.values.address,
                  onChange: formik.handleChange,
                },
              ]}
            />
          </Grid>

          <Grid item container xs={8} justifyContent="flex-end">
            <Grid item xs={4}>
              <Button fullWidth type="submit" variant="contained">
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
