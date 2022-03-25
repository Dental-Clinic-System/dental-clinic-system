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
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

export const HomePageContent = () => {
  const [formData, setFormData] = useState<any>({});
  const [AddClinic] = useMutation(ADDCLINIC);
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
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
                error: !formData['clinicName'],
                value: 'wtf',
                onChange: (str: string) => console.log(str),
              },
              {
                id: 'contactNumber',
                question: 'Холбоо барих утас',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['contactNumber'],
                value: '',
                onChange: (str: string) => console.log(str),
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
                error: !formData['city'],
                value: '',
                onChange: (str: string) => console.log(str),
              },
              {
                id: 'district',
                question: 'Дүүрэг',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['district'],
                value: '',
                onChange: (str: string) => console.log(str),
              },
              {
                id: 'sub_district',
                question: 'Хороо',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['sub_district'],
                value: '',
                onChange: (str: string) => console.log(str),
              },
              {
                id: 'full_address',
                question: 'Дэлгэрэнгүй хаяг',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['full_address'],
                value: '',
                onChange: (str: string) => console.log(str),
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
