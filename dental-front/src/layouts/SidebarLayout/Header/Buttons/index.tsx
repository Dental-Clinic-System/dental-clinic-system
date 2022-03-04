import { Box } from '@mui/material';
import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <Box sx={{ mx: .5 }} component="span">
        <HeaderNotifications />
      </Box>
    </Box>
  );
}

export default HeaderButtons;
