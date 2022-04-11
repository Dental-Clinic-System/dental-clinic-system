import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
    return(
        <Box sx={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
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