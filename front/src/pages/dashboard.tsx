import { Typography, Grid, Container } from "@mui/material";
import { useQuery } from "@apollo/client";
import { size } from "lodash";
import { GET_PATIENTS } from "../graphql";
import {
  LineChart,
  Item,
  PieChart,
  Calendar,
} from "../components/custom/dashboard";

export const Dashboard = () => {
  const TITLE = sessionStorage.getItem("clinicTitle");

  const { data } = useQuery(GET_PATIENTS);
  const { getPatients } = data || { getPatients: [] };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} minHeight={90}>
          <Typography variant="h5">Hello, {TITLE}.</Typography>
          <Typography variant="subtitle1">
            Welcome to your Dental dashboard.
          </Typography>
        </Grid>
        <Grid item xs={8} minHeight={300}>
          <Item>
            <Typography variant="h6" mb={4}>
              Ажилчид
            </Typography>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h6" mb={4}>
              Ажилчид
            </Typography>
            <PieChart />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item height="auto">
            <Typography variant="h5" mb={1}>
              Нийт өвчтөн
            </Typography>
            <Typography variant="h2">
              {size(getPatients).toLocaleString("en-US")}
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <Calendar />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
};
