import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';
import { ADDCLINIC } from '../../graphql';
import { useMutation } from '@apollo/client';
import { SnackBar, SnackBatTypeParam } from '../../components/';

export const HomePageContent = () => {
  const [formData, setFormData] = useState<any>({});
  const [AddClinic] = useMutation(ADDCLINIC);
  const [snackBar, setSnackBar] = useState<SnackBatTypeParam>({ open: false, message: '', severity: 'info' });

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
            onChange={onChange}
            label="Эмнэлгийн мэдээлэл"
            questions={[
              {
                id: 'clinicName',
                question: 'Эмнэлгийн нэр',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['clinicName'],
              },
              {
                id: 'operationName',
                question: 'Үйл ажиллагааны чиглэл',
                type: 'selector',
                grid: { xs: 5.4 },
                error: !formData['operationName'],
                selections: ['Шүдний эмнэлэг'],
              },
              {
                id: 'operationDate',
                question: 'Үйл ажиллагаа явуулж эхэлсэн огноо',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['operationDate'],
              },
              {
                id: 'contactNumber',
                question: 'Холбоо барих утас',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['contactNumber'],
              },
              { id: 'email', question: 'Имэйл хаяг', type: 'input', grid: { xs: 12 }, error: !formData['email'] },
              {
                id: 'clinicWeb',
                question: 'Эмнэлгийн вэб сайт',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['clinicWeb'],
              },
            ]}
          />
        </Grid>

        <Grid item xs={6}>
          <QuestionSection
            onChange={onChange}
            label="Албан ёсны хаяг"
            questions={[
              {
                id: 'city',
                question: 'Аймаг / хот',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['city'],
              },
              { id: 'district', question: 'Дүүрэг', type: 'input', grid: { xs: 5.4 }, error: !formData['district'] },
              {
                id: 'sub_district',
                question: 'Хороо',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['sub_district'],
              },
              {
                id: 'full_address',
                question: 'Дэлгэрэнгүй хаяг',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['full_address'],
              },
            ]}
          />
        </Grid>

        <Grid item container xs={6} justifyContent="flex-end">
          <Grid item xs={4}>
            <Button onClick={onSubmit} fullWidth variant="contained">
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
