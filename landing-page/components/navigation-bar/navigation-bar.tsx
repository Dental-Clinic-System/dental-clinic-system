import React from "react";
import { Typography, Box, IconButton, Stack } from "@mui/material";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../icons";

export const NavigationBar = () => {
  return (
    <Stack
      display={"flex"}
      spacing={10}
      bgcolor={"#eff6ff"}
      justifyContent={"center"}
    >
      <Box
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box marginLeft={5}>
          <Typography>DentalMN</Typography>
        </Box>
        <Stack direction={"row"} spacing={1} marginRight={5}>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <LinkedinIcon />
          </IconButton>
        </Stack>
      </Box>
      <Stack display={"flex"} alignItems={"center"} marginBottom={"30px"}>
        <Typography variant={"h5"} gutterBottom>Welcome to DentalMN</Typography>
        <Typography variant={"body1"} align={"center"} maxWidth={450} gutterBottom>At DentalMN, we are proud to offer general dentistry and prosthodontics in Ulaanbaatar. Dr. Enku is highly qualified and experienced in bringing quality care to every need.</Typography>
      </Stack>
    </Stack>
  );
};
