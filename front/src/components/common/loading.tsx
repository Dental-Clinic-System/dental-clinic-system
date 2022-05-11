import { Box, CircularProgress } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
