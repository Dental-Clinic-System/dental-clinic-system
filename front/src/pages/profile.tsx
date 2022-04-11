import { Box, sizing } from '@mui/system'
import { Paper, Input } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react'
import { LoadingButton } from '@mui/lab';
import { info } from './globaldata'
import { useLocation } from 'react-router-dom'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ProfilePage = () => {
  const location = useLocation();
  console.log(location);
  // const {} = useQuery({variant: {uid: location.pathname.split('/')[2]}})
  // const id = location.state;
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(info[0]);

  const handleClick = () => {
    setOpen(true);
    setEdit(false);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {
        //main page
        edit === false ?
          <Box>
            <Paper sx={{ display: 'flex', flexDiretion: 'row', justifyContent: 'space-between', paddingRight: 50, paddingLeft: 50 }}>
              <Box>
                <img src={data.profileImage} style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'fill',
                  borderRadius: '50%'
                }} alt={'profileImage'} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>{data.lastname} {data.firstname}</h1>
                <h3>{data.address}</h3>
                <h3>email: {data.email}</h3>
                <h3>phone: {data.phone}</h3>
              </Box>
            </Paper>
          </Box>
          :
          //editing page
          <Box>
            <Paper sx={{ display: 'flex', flexDiretion: 'row', justifyContent: 'space-between', paddingRight: 50, paddingLeft: 50 }}>
              <Box>
                <img src={data.profileImage} style={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'fill',
                  borderRadius: '50%',
                  zIndex: -1
                }} alt={'profileImage'} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Input value={data.lastname} onChange={(e) => setData({ ...data, lastname: e.target.value })} />
                  <Input value={data.firstname} onChange={(e) => setData({ ...data, firstname: e.target.value })} />
                </Box>
                <Input value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })} />
                <Input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <Input value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <Input value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
              </Box>
            </Paper>
          </Box>
      }
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingLeft: 50, paddingRight: 50 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 5 }}>
          <h1>Work Schedule</h1>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Box>
            <h3>Mon: {data.timestamp.mon}</h3>
            <h3>Tue: {data.timestamp.tue}</h3>
            <h3>Wed: {data.timestamp.wed}</h3>
            <h3>Thu: {data.timestamp.thu}</h3>
            <h3>Fri: {data.timestamp.fri}</h3>
          </Box>
          <Box>
            <h3>Mon: Ирсэн</h3>
            <h3>Tue: Ирсэн</h3>
            <h3>Wed: Ирнэ</h3>
            <h3>Thu: Чөлөөтэй</h3>
            <h3>Fri: Чөлөөтэй</h3>
          </Box>
        </Box>
      </Box>
      {
        edit == false ?
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <LoadingButton loading={loading}>
              <Fab color='secondary' aria-label='edit' onClick={() => setEdit(true)}>
                <EditIcon />
              </Fab>
            </LoadingButton>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: '#00ceba' }}>
                Амжилттай хадгалагдлаа！
              </Alert>
            </Snackbar>
          </Box>
          :
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} >
            <LoadingButton loading={loading}>
              <Fab
                color='secondary'
                aria-label='edit'
                onClick={() => handleClick()}
              >
                <SaveIcon />
              </Fab>
            </LoadingButton>
          </Box>
      }
    </Box>
  )
}
export default ProfilePage