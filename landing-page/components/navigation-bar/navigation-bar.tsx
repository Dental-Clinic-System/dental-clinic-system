import React from 'react';
import { Typography, Box, IconButton, Stack } from '@mui/material';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from '../icons';

export const NavigationBar = () => {
  return (
    <Stack
      position="fixed"
      top={0}
      zIndex={4}
      width="100vw"
      display={'flex'}
      spacing={10}
      bgcolor={'#eff6ff'}
      justifyContent={'center'}
    >
      <Box width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <Box marginLeft={5}>
          <Typography>DentalMN</Typography>
        </Box>
        <Stack direction={'row'} spacing={1} marginRight={5}>
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
    </Stack>
  );
};
