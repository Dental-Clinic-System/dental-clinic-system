import { Box, sizing } from '@mui/system'
import { Paper, Input, Typography } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import React, { useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab';
import { useLocation } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
import { GET_STAFF, UPDATE_STAFF } from '../graphql';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const ProfilePage = () => {
  const location: any = useLocation();
  const clinicId = window.sessionStorage.getItem('clinicId');
  const { data, loading } = useQuery(GET_STAFF, {
    variables: {
      clinicId: clinicId,
      id: location.state.id
    }
  });
  const [ update ] = useMutation(UPDATE_STAFF)

  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    role: '',
    email: '',
    availability: ''
  })
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [pageLoading, setPageLoading] = useState(false)
  const handleClick = async () => {
    if(info.username !== "" && info.firstName !== "" && info.lastName !== "" && info.phone !== "" && info.role !== "" && info.email !== "") {
      try {
        setPageLoading(true);
        await update({
          variables: {
            username: info.username,
            type: info.role,
            clinicId: clinicId,
            lastName: info.lastName,
            firstName: info.firstName,
            phone: info.phone,
            email: info.email,
            availability: info.availability,
          }
        })
      } catch(err) {
        setError(true)
      }
      setOpen(true);
      setEdit(false);
      setPageLoading(false);
    }
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if(!loading) {
      setInfo({
        firstName: data?.getStaff?.first_name,
        lastName: data?.getStaff?.last_name,
        username: data?.getStaff?.username,
        phone: data?.getStaff?.phone,
        role: data?.getStaff?.type,
        email: data?.getStaff?.email,
        availability: data?.getStaff?.availability
      })
    }
  }, [loading, data])

  if(loading) return <Typography variant='h5' > Loading ... </Typography>

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1 }}>
      {
        //main page
        edit === false ?
          <Box>
            <Paper sx={{ display: 'flex', flexDiretion: 'row', alignItems: 'center', padding: '20px' }}>
              <Box>
                <img src={'https://image.shutterstock.com/image-vector/doctor-icon-260nw-224509450.jpg'} style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'fill',
                  borderRadius: '50%'
                }} alt={'profileImage'} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', marginLeft: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }} >
                  <Typography variant='h4' marginBottom={2} paddingRight={1} borderRight={1} >Нэр: {info?.firstName} {info?.lastName} </Typography>
                  <Typography variant='h4' marginBottom={2} paddingLeft={1}> {info?.username}</Typography>
                </Box>
                <Typography variant='h5' >Ажил: {info?.role} </Typography>
                <Typography variant='h5' >Мэйл: {info?.email}</Typography>
                <Typography variant='h5' >Утас: {info?.phone}</Typography>
              </Box>
            </Paper>
          </Box>
          :
          //editing page
          <Box>
            <Paper sx={{ display: 'flex', flexDiretion: 'row', alignItems: 'center', padding: '20px' }}>
              <Box>
                <img src={'https://image.shutterstock.com/image-vector/doctor-icon-260nw-224509450.jpg'} style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'fill',
                  borderRadius: '50%'
                }} alt={'profileImage'} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column', marginLeft: '20px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Хэрэглэгчийн нэр: </Typography>
                  <Input value={info?.username} onChange={(e) => setInfo({...info, username: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Нэр: </Typography>
                  <Input value={info?.firstName} onChange={(e) => setInfo({...info, firstName: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Овог: </Typography>
                  <Input value={info?.lastName} onChange={(e) => setInfo({...info, lastName: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Ажил: </Typography>
                  <Input value={info?.role} onChange={(e) => setInfo({...info, role: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Мэйл: </Typography>
                  <Input value={info?.email} onChange={(e) => setInfo({...info, email: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                  <Typography variant='h5' paddingRight={1} >Утас: </Typography>
                  <Input value={info?.phone} onChange={(e) => setInfo({...info, phone: e.target.value})} sx={{ borderRight: 'solid black 1' }} />
                </Box>
              </Box>
            </Paper>
          </Box>
      }
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: 5, paddingTop: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Typography variant='h4' fontWeight={'bold'} marginRight={2} >Ажиллах хуваарь: </Typography>
          <Typography variant='h4' >9:00 - 13:00</Typography>
        </Box>
      </Box>
      {
        edit === false ?
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <LoadingButton loading={loading}>
              <Fab color='secondary' aria-label='edit' onClick={() => setEdit(true)}>
                <EditIcon />
              </Fab>
            </LoadingButton>
            {
              error === true &&
              <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%', backgroundColor: 'red' }}>
                  Алдаа гарлаа Та дахин оролдоно уу！
                </Alert>
              </Snackbar>
            }
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
            {
              pageLoading === true &&
                <Snackbar open={pageLoading} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity="info" sx={{ width: '100%', backgroundColor: 'white', border: 'solid 1px bolid', color: 'black' }}>
                    Уншиж байна ...
                  </Alert>
                </Snackbar>
            }
          </Box>
      }
    </Box>
  )
}
export default ProfilePage