import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';

export const LeftSide = () => {
  return (
    <Box width="100%" position="relative" height="fit-content">
      <Image draggable={false} src={require('../../components/assets/clinic.png')} layout="responsive" />
    </Box>
  );
};
