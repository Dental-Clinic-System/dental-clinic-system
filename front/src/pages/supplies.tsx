import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useQuery, useMutation } from '@apollo/client';
import { ModalInput, CreateModal, DeleteModal } from '../components';
import {
  ADD_SUPPLIES,
  DELETE_SUPPLIES,
  GET_SUPPLIES,
  UPDATE_SUPPLIES
} from '../graphql';

type suppliesType = {
  _id: string;
  clinicId: string;
  itemName: string;
  itemCode: string;
  barCode: string;
  quantity: string;
};

export const Supplies = () => {
  const clinicId = window.sessionStorage.getItem('clinicId');
  const [supplies, setSupplies] = useState<Array<suppliesType>>([]);
  const [suppliesData, setSuppliesData] = useState<any>({ clinicId: clinicId });
  const [selectedId, setSelectedId] = useState({});
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [AddSupplies] = useMutation(ADD_SUPPLIES);
  const [UpdateSupplies] = useMutation(UPDATE_SUPPLIES);
  const [DeleteSupplies] = useMutation(DELETE_SUPPLIES);
  const { loading, error, data } = useQuery(GET_SUPPLIES, {
    variables: { clinicId: clinicId }
  });

  useEffect(() => {
    if (error) console.log(error);
    if (!loading && !error) {
      setSupplies(data.getSupplies);
    }
  }, [loading]);

  const updateChangeData = (key: string, data: string) => {
    setSuppliesData({
      ...suppliesData,
      [key]: data
    });
  };

  const addData = async () => {
    try {
      const res = await AddSupplies({ variables: suppliesData });
      const addedSupplies = res.data.addSupplies;
      setSupplies([...supplies, addedSupplies]);
      setOpenAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const res = await UpdateSupplies({ variables: suppliesData });
      const updatedSupplies = supplies.map((e: any) =>
        e._id === res.data.updateSupplies._id
          ? { ...e, ...res.data.updateSupplies }
          : e
      );
      setSupplies(updatedSupplies);
      setOpenDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      const res = await DeleteSupplies({ variables: selectedId });
      const deleteState = supplies.filter(
        (e: any) => e._id !== res.data.deleteSupplies._id
      );
      setSupplies(deleteState);
      setOpenDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const columns: GridColDef[] = [
    { field: 'itemCode', headerName: 'Код', width: 100 },
    { field: 'barCode', headerName: 'Бар код', width: 150 },
    { field: 'itemName', headerName: 'Барааны нэр', width: 250 },
    { field: 'quantity', headerName: 'Тоо', width: 100 },
    {
      field: 'action',
      headerName: 'Үйлдэл',
      sortable: false,
      renderCell: () => {
        return <Button onClick={() => setOpenDeleteModal(true)}>Засах</Button>;
      }
    }
  ];

  return (
    <Box>
      <Button
        variant="outlined"
        onClick={() => setOpenAddModal(true)}
        sx={{ marginBottom: '10px' }}
      >
        Бараа материал Нэмэх
      </Button>
      <CreateModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        addButtonName={'Үүсгэх'}
        createFunction={addData}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Бараа материал Нэмэх
        </Typography>
        <ModalInput
          label={'Материалын нэр'}
          onChange={(e: any) => updateChangeData('itemName', e.target.value)}
        />
        <ModalInput
          label={'Код'}
          onChange={(e: any) => updateChangeData('itemCode', e.target.value)}
        />
        <ModalInput
          label={'Бар код'}
          onChange={(e: any) => updateChangeData('barCode', e.target.value)}
        />
        <ModalInput
          label={'Тоо хэмжээ'}
          onChange={(e: any) => updateChangeData('quantity', e.target.value)}
        />
      </CreateModal>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        deleteButtonName={'Устгах'}
        fixButtonName={'Засах'}
        deleteFunction={deleteData}
        fixFunction={updateData}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Засах
        </Typography>
        <ModalInput
          label={'Материалын нэр'}
          onChange={(e: any) => updateChangeData('itemName', e.target.value)}
          value={suppliesData?.itemName}
        />
        <ModalInput
          label={'Код'}
          onChange={(e: any) => updateChangeData('itemCode', e.target.value)}
          value={suppliesData?.itemCode}
        />
        <ModalInput
          label={'Бар код'}
          onChange={(e: any) => updateChangeData('barCode', e.target.value)}
          value={suppliesData?.barCode}
        />
        <ModalInput
          label={'Тоо хэмжээ'}
          onChange={(e: any) => updateChangeData('quantity', e.target.value)}
          value={suppliesData?.quantity}
        />
      </DeleteModal>
      <DataGrid
        sx={{ height: 640, width: '100%' }}
        rows={supplies}
        columns={columns}
        pageSize={10}
        getRowId={(row) => row._id}
        onSelectionModelChange={(itm) => {
          setSuppliesData(
            supplies.filter((e: suppliesType) => e._id === itm[0])[0]
          );
          setSelectedId({ _id: itm[0] });
        }}
      />
    </Box>
  );
};
