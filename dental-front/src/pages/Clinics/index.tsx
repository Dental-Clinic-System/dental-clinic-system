import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { ClinicsQuery } from 'src/hooks/query';
import { ADDCLINIC, UPDATECLINIC } from 'src/hooks/mutations';
import { useQuery, useMutation } from "@apollo/client";
import { useState, useEffect } from 'react';
import { Box, Button, Modal, Typography, TextField } from '@mui/material';
import { AddDataModal } from '../../components/Modal';

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

const Clinics = () => {
  const { loading, error, data } = useQuery(ClinicsQuery);
  const [clinics, setClinics] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<String>('');
  const [clinicData, setClinicData] = useState<any>({});
  const [selectedClinic, setSelectedClinic] = useState<clinicType>({ _id: 'alshu' });
  const [AddClinic] = useMutation(ADDCLINIC);
  const [UpdateClinic] = useMutation(UPDATECLINIC);

  const addChangeData = (key: string, data: string) => {
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

  const handleClose = () => setOpen(false);

  const fixButton = () => {
    setOpen(true);
    setModalType('fix');
  }

  const addButton = () => {
    setOpen(true);
    setModalType('add');
  }

  useEffect(() => {
    if (loading == false) setClinics(data.getClinics)
  }, [loading])

  const columns: GridColDef[] = [
    { field: '_id', headerAlign: 'center', headerName: '№', width: 90 },
    {
      field: 'clinic_name',
      headerName: 'Эмнэлгийн нэр',
      width: 130,
      editable: true
    },
    {
      field: 'contact_number',
      headerName: 'Утас',
      type: 'number',
      width: 160,
      editable: true
    },
    {
      field: 'email',
      headerName: 'Имэйл',
      width: 170,
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

  return (
    <div style={{ height: "100%", width: '100%' }}>
      <Button variant='contained' onClick={addButton}>Эмнэлэг нэмэх</Button>
      {/* <AddDataModal openAdd={openAdd}/> */}
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
            <TextField id="outlined-basic" label="Эмнэлгийн нэр" value={selectedClinic.clinic_name} variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('clinicName', e.target.value)} />
            <TextField id="outlined-basic" label="Холбоо барих дугаар" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('phone', e.target.value)} />
            <TextField id="outlined-basic" label="Имэйл хаяг" variant="outlined" sx={{ mt: 2 }} onChange={(e) => addChangeData('email', e.target.value)} />
            <Button variant='text' sx={{ mt: 2 }}>Устгах</Button>
            <Button variant='contained' sx={{ mt: 2 }}>Хадгалах</Button>
          </Box>}
      </Modal>
      <DataGrid
        getRowId={(row) => row._id}
        rows={clinics}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(itm: Array<string>) => {
          setSelectedClinic(clinics.filter((e: clinicType) => e._id === itm[0])[0])
        }}
      />
    </div >
  );
}
export default Clinics;