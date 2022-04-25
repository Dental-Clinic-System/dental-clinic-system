import { Box, TextField } from '@mui/material'

type CustomInputType = {
    value?: String;
    setValue: Function;
    placeholder?: String;
}

export const CustomInput:React.FC<CustomInputType> = ({ value = '', setValue, placeholder }) => {
    return (
        <Box>
            <TextField 
                sx={{ width: 400, m: 1 }}
                label={placeholder} 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                variant="outlined" 
                size="small"    
            />
        </Box>
    );
}
