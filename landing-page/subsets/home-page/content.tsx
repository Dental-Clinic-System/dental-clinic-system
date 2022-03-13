import React from "react";
import {
  Grid,
  Stack,
  Button,
  TextField,
  Container,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Box
} from "@mui/material";
import { EnvelopeIcon } from "../../components/";

export const HomePageContent = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center">
        <Box width="50vw">
          <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} >
              <InputLabel>
                Эмнэлгийн нэр
              </InputLabel>
              <TextField fullWidth></TextField>
              <Grid item xs={6}>
                <InputLabel>
                  Үйл ажиллагааны чиглэл
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={6}>
                <InputLabel>
                Үйл ажиллагаа явуулж эхэлсэн огноо
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Холбоо барих утас
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Имэйл хаяг
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Эмнэлгийн вэб сайт
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Холбоо барих утас
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Имэйл хаяг
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>
                Эмнэлгийн вэб сайт
                </InputLabel>
                <TextField fullWidth></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Container>
  );
};
