import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { withStyles, WithStyles } from '@mui/styles';
import { ClinicsQuery } from 'src/hooks/query';
import { ADDCLINIC, UPDATECLINIC, DELETECLINIC } from 'src/hooks/mutations';
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from 'react';
import { Box, Button, Modal, Typography, TextField, Container } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#fff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
};

type clinicType = {
  _id: string
  clinic_admin?: { admin_number?: string, admin_email?: string, admin_name?: string, position?: string }
  clinic_name?: string
  clinic_web?: string
  contact_number?: string
  email?: string
  official_address?: { city?: string, district?: string, sub_district?: string, full_address?: string }
  operation_date?: string
  operation_name?: string
  phone?: string
  status?: string
  workhours?: string
}

const styles = {
  root: {
    border: 3,
    borderRadius: '40',
    boxShadow: '0 1px 10px 1px lightgrey'
  }
}

function Clinics(props: WithStyles<typeof styles>) {
  const { loading, error, data } = useQuery(ClinicsQuery);
  const [clinics, setClinics] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<String>('');
  const [clinicData, setClinicData] = useState<any>({});
  const [selectedClinic, setSelectedClinic] = useState<clinicType>({ _id: '0000' });
  const [selectedId, setSelectedId] = useState({});
  const [AddClinic] = useMutation(ADDCLINIC);
  const [UpdateClinic] = useMutation(UPDATECLINIC);
  const { classes } = props;
  const [DeleteClinic] = useMutation(DELETECLINIC);

  const addChangeData = (key: string, data: string) => {
    setClinicData({
      ...clinicData,
      [key]: data,
      '_id': clinics.length
    });
  };

  const updateChangeData = (key: string, data: string) => {
    // setChangeData({
    //   value + data
    // })
    setClinicData({
      ...clinicData,
      [key]: data,
    });
  };

  const addData = async () => {
    try {
      await AddClinic({ variables: clinicData });
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async () => {
    try {
      console.log('clinicData', clinicData);
      await UpdateClinic({ variables: clinicData });
    } catch (error) {
      console.log(error);
    }
  }

  const deleteData = async () => {
    try {
      console.log('selectedClinic', selectedId);
      await DeleteClinic({ variables: selectedId });
    } catch (error) {
      console.log(error);
    }
  }

  const handleClose = () => {
    setClinicData({});
    setOpen(false);
  };

  const fixButton = () => {
    setOpen(true);
    setModalType('fix');
  }

  const addButton = () => {
    setClinicData({});
    setOpen(true);
    setModalType('add');
  }

  useEffect(() => {
    if (error) console.log(error)
    if (!loading && !error) setClinics(data.getClinics.map((e: any, i: number) => ({...e, _id: i+1})));
  }, [loading])

  const columns: GridColDef[] = [
    { field: '_id', headerName: '№', flex: 1 },
    {
      field: 'clinic_name',
      headerName: 'Эмнэлгийн нэр',
      flex: 1,
      editable: true
    },
    {
      field: 'phone',
      headerName: 'Утас',
      flex: 1,
      editable: true
    },
    {
      field: 'email',
      headerName: 'Имэйл',
      flex: 1,
      editable: true
    },
    {
      field: "action",
      headerName: "Үйлдэл",
      sortable: false,
      renderCell: () => {
        return <Button onClick={fixButton}>Засах</Button>;
      }
    },
  ];

  // console.log(selectedClinic);

  return (
    <div style={{ height: "100%", width: '100%' }}>
      {loading || error ?
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography paddingTop='100px' variant="h1" color={error ? "crimson" : ''}>
            {error ? 'Error' : 'Loading...'}
          </Typography>
        </Container>
        :
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {modalType == 'add' ?
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Эмнэлэг нэмэх
                </Typography>
                <TextField id="outlined-basic" label="Эмнэлгийн нэр" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('clinicName', e.target.value)} />
                <TextField id="outlined-basic" label="Холбоо барих дугаар" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('phone', e.target.value)} />
                <TextField id="outlined-basic" label="Имэйл хаяг" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('email', e.target.value)} />
                <Button variant='contained' sx={{ mt: 2 }} onClick={addData}>Хадгалах</Button>
              </Box>
              :
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Мэдээлэл засах
                </Typography>
                <TextField id="outlined-basic" label="Эмнэлгийн нэр" variant="outlined" sx={{ mt: 2 }} onChange={(e) => updateChangeData('clinicName', e.target.value)} value={clinicData.clinicName} />
                <TextField id="outlined-basic" label="Холбоо барих дугаар" variant="outlined" sx={{ mt: 2 }} onChange={(e) => updateChangeData('phone', e.target.value)} value={clinicData.phone} />
                <TextField id="outlined-basic" label="Имэйл хаяг" variant="outlined" sx={{ mt: 2 }} onChange={(e) => updateChangeData('email', e.target.value)} value={clinicData.email} />
                {/* <Button variant='text' sx={{ mt: 2 }} onClick={deleteData}>Устгах</Button> */}
                <Button variant='contained' sx={{ mt: 2 }} onClick={updateData}>Хадгалах</Button>
              </Box>}
          </Modal>
          <Box sx={{
            height: "100%",
            width: '100%',
            borderRadius: 40,
            padding: "5%",
            paddingTop: "2%"

          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: "flex-start",
            }}>
              <Button sx={{marginTop: "-15px", marginBottom: "15px"}}variant='contained' onClick={addButton}>Эмнэлэг нэмэх</Button>
            </Box>
            <DataGrid
              className={classes.root}
              getRowId={(row) => row._id}
              rows={clinics}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              onSelectionModelChange={(itm: Array<string>) => {
                setSelectedClinic(clinics.filter((e: clinicType) => e._id === itm[0])[0])
                setSelectedId({ id: itm[0] })
                setClinicData({
                  id: clinics.filter((e: clinicType) => e._id === itm[0])[0]._id,
                  clinicName: clinics.filter((e: clinicType) => e._id === itm[0])[0].clinic_name,
                  phone: clinics.filter((e: clinicType) => e._id === itm[0])[0].phone,
                  email: clinics.filter((e: clinicType) => e._id === itm[0])[0].email
                })
              }}
            />
          </Box>
        </>
      }
    </div >
  );
}
export default withStyles(styles)(Clinics);