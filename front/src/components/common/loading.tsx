import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
    return(
        <Box sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            bottom: 0,
            display: "center",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
            background: "white",
        }}>
            <CircularProgress/>
        </Box>
    )
}