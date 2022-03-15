import React from "react";
import {
  Box,
  Grid,
  Stack,
  Button,
  MenuItem,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useState } from "react";

export const HomePageContent = () => {
  const data = {
    services: [{ value: 'dental', label: 'Dental', }, { value: 'optic', label: 'Optic', }],
    location: {
      city: [{ value: 'ulaanbaatar', label: 'Ulaanbaatar', }, { value: 'darkhan', label: 'Darkhan', },],
      district: [{ value: 'chingeltei', label: 'Чингэлтэй', }, { value: 'sukhbaatar', label: 'Сүхбаатар', },],
      subdistrict: [{ value: 'fisrt', label: 'Нэгдүгээр', }, { value: 'second', label: 'Хоёрдугаар', },],
    },
  };

  const [service, setService] = useState('Dental');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setService(event.target.value);
  };

  return (
    <Box width="100%" display="flex" flexDirection="column" alignItems="center" marginY={5}>
      <Box width="40%" >
        <Typography variant="h5" gutterBottom fontWeight={600}>Эмнэлгийн мэдээлэл</Typography>
        <Grid container>
          <Grid item xs={12} >
            <InputLabel>Эмнэлгийн нэр</InputLabel>
            <TextField fullWidth size="small"></TextField>
            <Stack direction="row" justifyContent="space-between">
              <Grid item xs={5.8}>
                <InputLabel>Үйл ажиллагааны чиглэл</InputLabel>
                <TextField fullWidth select value={service} onChange={handleChange} size="small">
                  {data.services.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={5.8}>
                <InputLabel>Үйл ажиллагаа явуулж эхэлсэн огноо</InputLabel>
                {/* <DesktopDatePicker
                      label={"Date desktop"}
                      inputFormat={"MM/dd/yyyy"}
                      value={value}
                      onChange={(newValue: Date | null) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    /> */}
              </Grid>
            </Stack>
            <InputLabel>Холбоо барих утас</InputLabel>
            <TextField fullWidth size="small"></TextField>
            <InputLabel>Имэйл хаяг</InputLabel>
            <TextField fullWidth size="small"></TextField>
            <InputLabel>Эмнэлгийн вэб сайт</InputLabel>
            <TextField fullWidth size="small"></TextField>
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
        <Typography variant="h5" gutterBottom fontWeight={600}>Албан ёсны хаяг</Typography>
        <Grid container>
          <Grid item xs={12} >
            <Stack direction="row" justifyContent="space-between">
              <Grid item xs={5.8}>
                <InputLabel>Аймаг / хот</InputLabel>
                <TextField fullWidth select value={service} onChange={handleChange} size="small">
                  {data.location.city.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={5.8}>
                <InputLabel>Дүүрэг</InputLabel>
                <TextField fullWidth select value={service} onChange={handleChange} size="small">
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
              <TextField fullWidth select value={service} onChange={handleChange} size="small">
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

      <Box width="40%" marginTop={5} >
        <Typography variant="h5" gutterBottom fontWeight={600}>Хариуцсан ажилтны мэдээлэл</Typography>
        <Grid container>
          <Grid item xs={12} >
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
              <Button fullWidth variant="contained" >Илгээх</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};
