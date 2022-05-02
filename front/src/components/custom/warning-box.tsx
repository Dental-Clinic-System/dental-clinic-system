import { Box } from '@mui/material';

export const WarningBox = ({ children }: any) => {
    return(
        <Box sx={{
            fontSize: 10,
            color: 'red'
        }}>
            {children}
        </Box>
    )
}