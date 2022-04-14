import { Box, TextField } from '@mui/material'

type AddPatientInputType = {
    value: String;
    setValue: Function;
    placeholder?: String;
}

export const AddPatientInput:React.FC<AddPatientInputType> = ({ value, setValue, placeholder }) => {
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
