import { useMutation, useQuery } from '@apollo/client';
import { Chip, Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { GetClinics } from '../graphql/queries';
import { CustomInput, CreateModal, DeleteModal, Loading } from '../components';
import { ADD_CLINIC, DELETE_CLINIC } from '../graphql';

const RenderStatus = (params: any) => {
  if (params.status == "accepted") {
    return <Chip label="accepted" color="success" />;
  } else {
    return <Chip label="requested" />;
  }
};


export const Clinic = () => {
  const { loading, error, data } = useQuery(GetClinics);
  const [clinics, setClinics] = useState([]);
  const [modal, setModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteCLinic] = useMutation(DELETE_CLINIC)
  const [addTodo] = useMutation(ADD_CLINIC)
  const [selectClinic, setSelectClinic] = useState([])

  const [addData, setAddData] = useState({
    clinic_name: '',
    contact_number: '',
    email: '',
    official_address: {
      city: '',
      district: '',
      sub_district: '',
      full_address: '',
    },
    status: '',
  })
  useEffect(() => {
    let formatedData: any = [];
    data?.getClinics?.map((clinic: any, index: number) => {
      let cli = {
        ...clinic,
        index: index + 1,
      };
      formatedData.push(cli);
    });
    setClinics(formatedData);
  }, [data]);
  const columns: GridColDef[] = [
    {
      field: 'index',
      headerName: 'No',
      width: 15,
    },
    { field: 'clinic_name', headerName: 'name', width: 150 },
    { field: 'email', headerName: 'email', width: 200 },
    { field: 'contact_number', headerName: 'contact number', width: 150 },
    {
      field: 'official_address', headerName: 'official_address', width: 150,
      renderCell: (address: any) => <div>{address?.full_address}</div>
    },
    {
      field: 'status', headerName: 'status', width: 150,
      renderCell: (params) => <RenderStatus status={params.value} />
    },
  ]

  return (
    <Box sx={{ width: '100%', height: '90Vh', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => setModal(true)} variant='outlined'>Clinic нэмэх</Button>
      <Button onClick={() => setDeleteModal(true)} variant='outlined' color='error'>Clinic хасах</Button>
      {
        loading ?
          <Loading />
          :
          <DataGrid
            sx={{
              width: '100%',
              height: 640
            }}
            getRowId={(doc) => doc._id}
            rows={clinics}
            columns={columns}
            pageSize={10}
            onSelectionModelChange={(item: any) => {
              setSelectClinic(item)
            }}
          />
      }
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} deleteButtonName='delete clinic' deleteFunction={() => { deleteCLinic({ variables: { id: selectClinic[0] } }) }} />
      <CreateModal open={modal} setOpen={setModal} createFunction={() => addTodo({ variables: addData })} addButtonName={'Add clinic'}>
        <CustomInput placeholder={'clinic_name'} value={addData.clinic_name} setValue={(value: string) => setAddData({ ...addData, clinic_name: value })} />
        <CustomInput placeholder={'contact_number'} value={addData.contact_number} setValue={(value: string) => setAddData({ ...addData, contact_number: value })} />
        <CustomInput placeholder={'email'} value={addData.email} setValue={(value: string) => setAddData({ ...addData, email: value })} />
        <CustomInput placeholder={'status'} value={addData.status} setValue={(value: string) => setAddData({ ...addData, status: value })} />
        <CustomInput placeholder={'city'} value={addData.official_address.city} setValue={(value: string) => setAddData({ ...addData, official_address: { ...addData.official_address, city: value } })} />
        <CustomInput placeholder={'district'} value={addData.official_address.district} setValue={(value: string) => setAddData({ ...addData, official_address: { ...addData.official_address, district: value } })} />
        <CustomInput placeholder={'sub_district'} value={addData.official_address.sub_district} setValue={(value: string) => setAddData({ ...addData, official_address: { ...addData.official_address, sub_district: value } })} />
        <CustomInput placeholder={'full_address'} value={addData.official_address.full_address} setValue={(value: string) => setAddData({ ...addData, official_address: { ...addData.official_address, full_address: value } })} />
      </CreateModal>
    </Box >
  )
}
