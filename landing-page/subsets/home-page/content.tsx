import React from 'react';
import { Box, Grid, Button } from '@mui/material';
import { useState } from 'react';
import { QuestionSection } from './question-section';

const data = {
  services: [
    { value: 'dental', label: 'Dental' },
    { value: 'optic', label: 'Optic' },
  ],
  location: {
    city: [
      { value: 'ulaanbaatar', label: 'Ulaanbaatar' },
      { value: 'darkhan', label: 'Darkhan' },
    ],
    district: [
      { value: 'chingeltei', label: 'Чингэлтэй' },
      { value: 'sukhbaatar', label: 'Сүхбаатар' },
    ],
    subdistrict: [
      { value: 'fisrt', label: 'Нэгдүгээр' },
      { value: 'second', label: 'Хоёрдугаар' },
    ],
  },
};

export const HomePageContent = () => {
  const [formData, setFormData] = useState<any>({});

  const onChange = (question: string, change: string) => {
    setFormData({ ...formData, [question]: change });
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <Box width="100vw" display="flex" flexDirection="column" alignItems="center" marginY={5}>
      <Grid container justifyContent="center" columns={{ xs: 11 }} rowSpacing={5}>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <QuestionSection
            onChange={onChange}
            label="Эмнэлгийн мэдээлэл"
            questions={[
              { question: 'Эмнэлгийн нэр', type: 'input', grid: { xs: 12 }, error: !formData['Эмнэлгийн нэр'] },
              {
                question: 'Үйл ажиллагааны чиглэл',
                type: 'selector',
                grid: { xs: 5.4 },
                error: !formData['Үйл ажиллагааны чиглэл'],
                selections: ['Шүдний эмнэлэг'],
              },
              {
                question: 'Үйл ажиллагаа явуулж эхэлсэн огноо',
                type: 'input',
                grid: { xs: 5.4 },
                error: !formData['Үйл ажиллагаа явуулж эхэлсэн огноо'],
              },
              { question: 'Холбоо барих утас', type: 'input', grid: { xs: 12 }, error: !formData['Холбоо барих утас'] },
              { question: 'Имэйл хаяг', type: 'input', grid: { xs: 12 }, error: !formData['Имэйл хаяг'] },
              {
                question: 'Эмнэлгийн вэб сайт',
                type: 'input',
                grid: { xs: 12 },
                error: !formData['Эмнэлгийн вэб сайт'],
              },
            ]}
          />
        </Grid>

        <Grid item xs={6}>
          <QuestionSection
            onChange={onChange}
            label="Албан ёсны хаяг"
            questions={[
              { question: 'Аймаг / хот', type: 'input', grid: { xs: 5.4 }, error: !formData['Аймаг / хот'] },
              { question: 'Дүүрэг', type: 'input', grid: { xs: 5.4 }, error: !formData['Дүүрэг'] },
              { question: 'Хороо', type: 'input', grid: { xs: 5.4 }, error: !formData['Хороо'] },
              { question: 'Дэлгэрэнгүй хаяг', type: 'input', grid: { xs: 12 }, error: !formData['Дэлгэрэнгүй хаяг'] },
            ]}
          />
        </Grid>

        <Grid item xs={6}>
          <QuestionSection
            label="Хариуцсан ажилтны мэдээлэл"
            onChange={onChange}
            questions={[
              { question: 'Утас', type: 'number', grid: { xs: 12 }, error: !formData['Утас'] },
              { question: 'Имэйл', type: 'input', grid: { xs: 12 }, error: !formData['Имэйл'] },
              { question: 'Нэр', type: 'input', grid: { xs: 12 }, error: !formData['Нэр'] },
              { question: 'Албан тушаал', type: 'input', grid: { xs: 12 }, error: !formData['Албан тушаал'] },
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
    </Box>
  );
};

{
  /* 
  <Box>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Эмнэлгийн мэдээлэл
        </Typography>
        <Grid container width="40vw">
          <Grid item xs={12}>
            <InputLabel>Эмнэлгийн нэр</InputLabel>
            <TextField fullWidth size="small"></TextField>
            <Stack direction="row" justifyContent="space-between">
              <Grid item xs={5.8}>
                <InputLabel>Үйл ажиллагааны чиглэл</InputLabel>
                <TextField
                  fullWidth
                  select
                  value={service}
                  onChange={handleChange}
                  size="small"
                >
                  {data.services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={5.8}>
                <InputLabel>Үйл ажиллагаа явуулж эхэлсэн огноо</InputLabel>
                 <DesktopDatePicker
                  label={"Date desktop"}
                  inputFormat={"MM/dd/yyyy"}
                  value={value}
                  onChange={(newValue: Date | null) => {
                    // setValue(newValue);
                  }}
                  renderInput={(params: any) => <TextField {...params} />}
                /> 
                </Grid>
                </Stack>
                <InputLabel>Холбоо барих утас</InputLabel>
                <TextField fullWidth size="small"></TextField>
                <InputLabel>Имэйл хаяг</InputLabel>
                <TextField fullWidth size="small"></TextField>
                <InputLabel>Эмнэлгийн вэб сайт</InputLabel>
                <TextField fullWidth size="small"></TextField>
              </Grid>
            </Grid>
          </Box>
    
          <Box width="40%" marginTop={5}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Албан ёсны хаяг
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between">
                  <Grid item xs={5.8}>
                    <InputLabel>Аймаг / хот</InputLabel>
                    <TextField
                      fullWidth
                      select
                      value={service}
                      onChange={handleChange}
                      size="small"
                    >
                      {data.location.city.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={5.8}>
                    <InputLabel>Дүүрэг</InputLabel>
                    <TextField
                      fullWidth
                      select
                      value={service}
                      onChange={handleChange}
                      size="small"
                    >
                      {data.location.district.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Stack>
                <Grid item xs={5.8}>
                  <InputLabel>Хороо</InputLabel>
                  <TextField
                    fullWidth
                    select
                    value={service}
                    onChange={handleChange}
                    size="small"
                  >
                    {data.location.subdistrict.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel>Дэлгэрэнгүй хаяг</InputLabel>
                  <TextField fullWidth size="small"></TextField>
                </Grid>
              </Grid>
            </Grid>
          </Box>
    
          <Box width="40%" marginTop={5}>
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Хариуцсан ажилтны мэдээлэл
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <InputLabel>Утас</InputLabel>
                <TextField fullWidth size="small"></TextField>
                <InputLabel>Имэйл</InputLabel>
                <TextField fullWidth size="small"></TextField>
                <InputLabel>Нэр</InputLabel>
                <TextField fullWidth size="small"></TextField>
                <InputLabel>Албан тушаал</InputLabel>
                <TextField fullWidth size="small"></TextField>
              </Grid>
              <Grid marginTop={2} xs={12} display="flex" justifyContent="flex-end">
                <Grid xs={5}>
                  <Button fullWidth variant="contained">
                    Илгээх
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
  */
}
