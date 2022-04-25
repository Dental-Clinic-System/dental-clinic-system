import { ModalInput, CreateModal, DeleteModal, Loading } from "../components";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useQuery, useMutation } from "@apollo/client";
import { Button, Box, Typography, TextField, Input } from "@mui/material";
import {
  GET_SERVICES,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../graphql";

type serviceType = {
  _id: string;
  serviceName: string;
  serviceCode: string;
  price: string;
  description: string;
};

export const Services = () => {
  const clinicId = window.sessionStorage.getItem("clinicId");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [serviceData, setServiceData] = useState<any>({ clinicId: clinicId });
  const [selectedId, setselectedId] = useState({});
  const [services, setServices] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_SERVICES, {
    variables: { clinicId: clinicId },
  });
  const [AddService] = useMutation(ADD_SERVICE);
  const [UpdateService] = useMutation(UPDATE_SERVICE);
  const [DeleteService] = useMutation(DELETE_SERVICE);

  useEffect(() => {
    if (error) console.log(error);
    if (!loading && !error) {
      setServices(data.getServices);
      setServiceData({ clinicId: clinicId });
    }
  }, [loading, data]);

  const updateChangeData = (key: string, data: string) => {
    setServiceData({
      ...serviceData,
      [key]: data,
    });
  };

  const addData = async () => {
    try {
      await AddService({ variables: serviceData });
      refetch();
      setOpenAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    console.log(serviceData);
    try {
      await UpdateService({ variables: serviceData });
      refetch();
      setOpenDeleteModal(false);
    } catch (error) {
      console.log(error);
    } 
  };

  const deleteData = async () => {
    try {
      await DeleteService({ variables: selectedId });
      setOpenDeleteModal(false);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data, serviceData);

  const columns: GridColDef[] = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "serviceName",
      headerName: "Үйлчилгээний нэр",
      width: 150,
      editable: true,
    },
    {
      field: "serviceCode",
      headerName: "Код",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Үнэ",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "description",
      headerName: "Тодорхойлолт",
      width: 250,
      editable: true,
    },
    {
      field: "action",
      headerName: "Үйлдэл",
      sortable: false,
      renderCell: () => {
        return <Button onClick={() => setOpenDeleteModal(true)}>Засах</Button>;
      },
    },
  ];

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          setOpenAddModal(true);
          setServiceData({ clinicId: clinicId });
        }}
      >
        Add Service
      </Button>
      <CreateModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        addButtonName={"Үүсгэх"}
        createFunction={addData}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Үйлчилгээ Нэмэх
        </Typography>
        <ModalInput
          label={"Үйлчилгээний нэр"}
          onChange={(e: any) => updateChangeData("serviceName", e.target.value)}
        />
        <ModalInput
          label={"Код"}
          onChange={(e: any) => updateChangeData("serviceCode", e.target.value)}
        />
        <ModalInput
          label={"Үнэ"}
          onChange={(e: any) => updateChangeData("price", e.target.value)}
        />
        <ModalInput
          label={"Тодорхойлолт"}
          onChange={(e: any) => updateChangeData("description", e.target.value)}
        />
      </CreateModal>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        deleteButtonName={"Delete"}
        fixButtonName={"Fix"}
        deleteFunction={deleteData}
        fixFunction={updateData}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Үйлчилгээ засах
        </Typography>
        <ModalInput
          label={"Үйлчилгээний нэр"}
          onChange={(e: any) => updateChangeData("serviceName", e.target.value)}
          value={serviceData?.serviceName}
        />
        <ModalInput
          label={"Код"}
          onChange={(e: any) => updateChangeData("serviceCode", e.target.value)}
          value={serviceData?.serviceCode}
        />
        <ModalInput
          label={"Үнэ"}
          onChange={(e: any) => updateChangeData("price", e.target.value)}
          value={serviceData?.price}
        />
        <ModalInput
          label={"Тодорхойлолт"}
          onChange={(e: any) => updateChangeData("description", e.target.value)}
          value={serviceData?.description }
        />
      </DeleteModal>
      <DataGrid
        sx={{ height: "60vh", width: "100%" }}
        getRowId={(row) => row._id}
        rows={services}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(itm) => {
          setServiceData(
            services.filter((e: serviceType) => e._id === itm[0])[0]
          );
          setselectedId({ _id: itm[0] });
        }}
      />
    </Box>
  );
};
