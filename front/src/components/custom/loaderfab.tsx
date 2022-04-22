import { LoadingButton } from '@mui/lab';
import Fab from '@mui/material/Fab';

export const FabLoading = ({loading, children}:any) => {
    return (
        <LoadingButton loading={loading}>
            <Fab color='secondary' aria-label='edit'>
                {children}
            </Fab>
        </LoadingButton>
    )
}