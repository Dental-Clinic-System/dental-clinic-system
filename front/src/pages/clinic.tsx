import { useMutation, useQuery } from '@apollo/client';
import { Chip, Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { CustomInput, CreateModal, DeleteModal, Loading } from '../components';
import { ADD_CLINIC, DELETE_CLINIC, GET_CLINICS } from '../graphql';

const RenderStatus = (params: any) => {
  if (params.status == "accepted") {
    return <Chip label="accepted" color="success" />;
  } else {
    return <Chip label="requested" />;
  }
};


export const Clinic = () => {
  const [addTodo] = useMutation(ADD_CLINIC);
  const [deleteCLinic] = useMutation(DELETE_CLINIC);
  const { loading, error, data } = useQuery(GET_CLINICS);
  const [clinics, setClinics] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectClinic, setSelectClinic] = useState([]);

  const [addData, setAddData] = useState({
    title: '',
    email: '',
    contact_number: '',
    district: '',
    khoroo: '',
    address: '',
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
      headerName: 'Ду.',
      width: 15,
    },
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'title', headerName: 'Эмнэлгийн нэр', width: 150 },
    { field: 'email', headerName: 'Имэйл', width: 200 },
    { field: 'contact_number', headerName: 'Холбогдох утас', width: 150 },
    { field: 'district', headerName: 'Дүүрэг', width: 150 },
    { field: 'khoroo', headerName: 'Хороо', width: 100 },
    { field: 'address', headerName: 'Дэлгэрэнгүй хаяг', width: 150 },
    {
      field: 'status', headerName: 'Төлөв', width: 150,
      renderCell: (params) => <RenderStatus status={params.value} />
    },
  ]

  console.log(clinics, "clinics")
  return (
    <Box sx={{ width: '100%', height: '90Vh', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={() => setModal(true)} variant='outlined'>Эмнэлэг нэмэх</Button>
      <Button onClick={() => setDeleteModal(true)} variant='outlined' color='error'>Эмнэлэг хасах</Button>
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
            initialState={{
              columns: {
                columnVisibilityModel: {
                  _id: false,
                },
              }
            }}
          />
      }
      <DeleteModal open={deleteModal} setOpen={setDeleteModal} deleteButtonName='delete clinic' deleteFunction={() => { deleteCLinic({ variables: { id: selectClinic[0] } }) }} />
      <CreateModal open={modal} setOpen={setModal} createFunction={() => addTodo({ variables: addData })} addButtonName={'Add clinic'}>
        <CustomInput placeholder={'Эмнэлгийн нэр'} value={addData.title} setValue={(value: string) => setAddData({ ...addData, title: value })} />
        <CustomInput placeholder={'Имэйл'} value={addData.email} setValue={(value: string) => setAddData({ ...addData, email: value })} />
        <CustomInput placeholder={'Холбогдох утас'} value={addData.contact_number} setValue={(value: string) => setAddData({ ...addData, contact_number: value })} />
        <CustomInput placeholder={'Дүүрэг'} value={addData.district} setValue={(value: string) => setAddData({ ...addData, district: value })} />
        <CustomInput placeholder={'Хороо'} value={addData.khoroo} setValue={(value: string) => setAddData({ ...addData, khoroo: value })} />
        <CustomInput placeholder={'Дэлгэрэнгүй хаяг'} value={addData.address} setValue={(value: string) => setAddData({ ...addData, address: value })} />
      </CreateModal>
    </Box >
  )
}
