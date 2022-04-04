import React, { useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADDCLINIC } from '../../graphql';
import { useMutation, useQuery } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LeftSide } from './';
import { getCommittees, getDistricts, getProvinces } from '../../graphql/query';
import { find } from 'lodash';

const initialValues = {
  clinicName: '',
  email: '',
  phone: '',
  city: '',
  district: '',
  sub_district: '',
  full_address: '',
};

const validationSchema = Yup.object().shape({
  clinicName: Yup.string().max(50, 'Хэт урт байна.').required('Эмнэлгийн нэрийг оруулна уу.'),
  email: Yup.string().max(50).email('Буруу email хаяг.').required('Email хаягаа оруулна уу.'),
  phone: Yup.string()
    .min(8, 'Зөв дугаар оруулна уу.')
    .max(12, 'Зөв дугаар оруулна уу.')
    .required('Утасны дугаараа оруулна уу.')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Зөв дугаар оруулна уу.',
    ),
  city: Yup.string().required('Хотын нэрээ оруулна уу.'),
  district: Yup.string().required('Сум / Дүүрэг оруулна уу.'),
  sub_district: Yup.string().required('Баг / Хороо оруулна уу.'),
  full_address: Yup.string().max(200, '200 тэмдэгтээс хэтэрч болохгүй.').required('Дэлгэрэнгүй хаяг оруулна уу.'),
});

const RightSide = () => {
  const [AddClinic] = useMutation(ADDCLINIC);
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedDistricts, setSelectedDistricts] = useState<string>('');
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setSnackBar({ message: 'Хүсэлт илгээж байна.', open: true, severity: 'info' });
      try {
        await AddClinic({ variables: values });
        formik.setValues(initialValues);

        setSnackBar({ message: 'Таны хүсэлтийг хүлээж авлаа.', open: true, severity: 'success' });
      } catch (error) {
        setSnackBar({ message: 'Хүсэлт илгээхэд алдаа гарлаа.', open: true, severity: 'error' });
      }
    },
  });

  const { data: provinceRes } = useQuery(getProvinces);
  const { getProvinces: provinces } = provinceRes || { getProvinces: [] };

  const { data: districtsRes } = useQuery(getDistricts, {
    variables: { parent: selectedProvince },
  });
  const { getDistricts: districts } = districtsRes || { getDistricts: [] };

  const { data: committeesRes } = useQuery(getCommittees, {
    variables: { parent: selectedDistricts },
  });
  const { getCommittees: committees } = committeesRes || { getCommittees: [] };

  useEffect(() => {
    if (formik.values.city) {
      const { getProvinces } = provinceRes || {};
      const { code } = find(getProvinces, ['name', formik.values.city]) || '';
      setSelectedProvince(code);
    }
  }, [formik.values.city]);

  useEffect(() => {
    if (formik.values.district) {
      const { getDistricts } = districtsRes || {};
      const { code } = find(getDistricts, ['name', formik.values.district]) || '';
      setSelectedDistricts(code);
    }
  }, [formik.values.district]);

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="flex-start" marginY={5} paddingTop={6}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container justifyContent="center" columns={{ xs: 11 }} rowSpacing={4}>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <QuestionSection
              label="Эмнэлгийн мэдээлэл"
              questions={[
                {
                  id: 'clinicName',
                  question: 'Эмнэлгийн нэр',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.clinicName),
                  helperText: formik.errors.clinicName || '',
                  value: formik.values.clinicName,
                  onChange: formik.handleChange,
                  placeholder: 'Дэнтал клиник',
                },
                {
                  id: 'phone',
                  question: 'Холбоо барих утас',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.phone),
                  helperText: formik.errors.phone || '',
                  value: formik.values.phone,
                  onChange: formik.handleChange,
                  placeholder: '99998888',
                },
                {
                  id: 'email',
                  question: 'Имэйл хаяг',
                  type: 'input',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.email),
                  helperText: formik.errors.email || '',
                  value: formik.values.email,
                  onChange: formik.handleChange,
                  placeholder: 'example@gmail.com',
                },
              ]}
            />
          </Grid>

          <Grid item xs={8}>
            <QuestionSection
              label="Албан ёсны хаяг"
              questions={[
                {
                  id: 'city',
                  question: 'Аймаг / хот',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.city),
                  helperText: formik.errors.city || '',
                  value: formik.values.city,
                  selections: provinces.map((cur: { name: string }) => cur.name),
                  onChange: formik.handleChange('city'),
                },
                {
                  id: 'district',
                  question: 'Сум / Дүүрэг',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.district),
                  helperText: formik.errors.district || '',
                  value: formik.values.district,
                  selections: districts.map((cur: { name: string }) => cur.name),
                  onChange: formik.handleChange('district'),
                },
                {
                  id: 'sub_district',
                  question: 'Баг / Хороо',
                  type: 'selector',
                  grid: { xs: 5.4 },
                  error: Boolean(formik.errors.sub_district),
                  helperText: formik.errors.sub_district || '',
                  value: formik.values.sub_district,
                  selections: committees.map((cur: { name: string }) => cur.name),
                  onChange: formik.handleChange('sub_district'),
                },
                {
                  id: 'full_address',
                  question: 'Дэлгэрэнгүй хаяг',
                  type: 'textarea',
                  grid: { xs: 12 },
                  error: Boolean(formik.errors.full_address),
                  helperText: formik.errors.full_address || '',
                  value: formik.values.full_address,
                  onChange: formik.handleChange,
                  placeholder: 'Эмнэлгийн дэлгэрэнгүй байршил'
                },
              ]}
            />
          </Grid>

          <Grid item container xs={8} justifyContent="flex-end">
            <Grid item xs={4}>
              <Button fullWidth variant="contained" type="submit" style={{fontWeight: '600'}}>
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
