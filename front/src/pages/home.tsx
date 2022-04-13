import { useTheme } from "@material-ui/core";
import { Box, Typography } from "@mui/material";

export const Home = () => {
  const theme = useTheme();

  return (
    <>
      <Box>This is home screen</Box>
      <h1>h1 simple</h1>
      <Typography color={theme.palette.primary.main}>
        <h1>h1 inside Typography</h1>
      </Typography>
      <Typography variant="h1">Typography h1 variant</Typography>
    </>
  );
};
