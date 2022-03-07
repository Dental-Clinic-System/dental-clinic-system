import React from "react";
import {
  Grid,
  Stack,
  Button,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import { EnvelopeIcon } from "../../components/";

export const HomePageContent = () => {
  return (
    <Container>
      <Grid container spacing={2} height="100vh" alignItems="center">
        <Grid item lg={6} sm={12}>
          <Typography variant="h5">deedlih</Typography>
          <Typography variant="h3" fontWeight="bold">
            dund
          </Typography>
          <Typography variant="h6">doodlih</Typography>
        </Grid>

        <Grid item lg={6} sm={12}>
          <Stack
            spacing={3}
            padding={4}
            bgcolor="white"
            borderRadius={3}
            direction="column"
          >
            <Typography variant="h4" fontWeight="bold">
              Send message
            </Typography>
            <Stack spacing={1}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="standard"
              />
              <TextField
                id="outlined-basic"
                label="Message"
                variant="standard"
              />
            </Stack>
            <Button variant="contained" endIcon={<EnvelopeIcon />}>
              Send
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
