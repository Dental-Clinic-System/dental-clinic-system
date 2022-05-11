import { useMutation, useQuery } from "@apollo/client";
import { Chip, Box, Button, Typography, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {
  CreateModal,
  DeleteModal,
  Loading,
  ModalInput,
} from "../components";
import {
  ADD_CLINIC,
  DELETE_CLINIC,
  GET_CLINICS,
  UPDATE_CLINIC,
} from "../graphql";
import { AddBox, IndeterminateCheckBox } from "@mui/icons-material";

type clinicType = {
  _id: string;
  title: string;
  email: string;
  contact_number: string;
  address: string;
  khoroo: string;
  district: string;
  status: string;
};

const RenderStatus = (params: any) => {
  return params.status === "active" ? (
    <Chip label="зөвшөөрсөн" color="success" />
  ) : params.status === "inactive" ? (
    <Chip label="татгалзсан" color="error" />
  ) : (
    <Chip label="хүлээгдэж байгаа" />
  );
};

export const Clinic = () => {
  const [AddClinic] = useMutation(ADD_CLINIC);
  const [DeleteCLinic] = useMutation(DELETE_CLINIC);
  const [UpdateClinic] = useMutation(UPDATE_CLINIC);
  const { loading, error, data } = useQuery(GET_CLINICS);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [clinics, setClinics] = useState<any>([]);
  const [selectedId, setselectedId] = useState<any>({});
  const [approveModal, setApproveModal] = useState(false);
  const [clinicData, setClinicData] = useState<any>({});

  const styles = {
    approveModalTitle: {
      mb: 2,
    },
    approveModalDesc: {
      mb: 2,
    },
    actionButton: {
      heigth: 25,
      fontSize: 20,
    },
    declineButton: {
      ml: 5,
      heigth: 25,
      fontSize: 20,
    },
  };

  const updateChangeData = (key: string, data: string) => {
    setClinicData({
      ...clinicData,
      [key]: data,
    });
  };

  const addData = async () => {
    try {
      const res = await AddClinic({ variables: clinicData });
      const addedClinicIndex = clinics[0].index + 1;
      const addedClinic = { ...res.data.addClinic, index: addedClinicIndex };
      setClinics([addedClinic, ...clinics]);
      setOpenAddModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const res = await UpdateClinic({ variables: clinicData });
      const updatedClinic = clinics.map((e: any) =>
        e._id === res.data.updateClinic._id
          ? { ...e, ...res.data.updateClinic }
          : e
      );
      setClinics(updatedClinic);
      setOpenDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      const res = await DeleteCLinic({ variables: selectedId });
      const deleteState = clinics.filter(
        (e: any) => e._id !== res.data.deleteClinic._id
      );
      deleteState.sort(function (a: any, b: any) {
        return b.index - a.index;
      });
      const formatedData: any = [];
      deleteState.map((clinic: any, index: number) => {
        let cli = {
          ...clinic,
          index: index + 1,
        };
        formatedData.push(cli);
      });
      setClinics(formatedData);
      setOpenDeleteModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const approveClinic = async (params: any) => {
    try {
      const data = {
        ...params.row,
        status: "active",
      };
      const res = await UpdateClinic({ variables: data });
      const updatedClinic = clinics.map((e: any) =>
        e._id === res.data.updateClinic._id
          ? { ...e, ...res.data.updateClinic }
          : e
      );
      setClinics(updatedClinic);
    } catch (error) {
      console.log(error);
    }
  };

  const declineClinic = async (params: any) => {
    try {
      const data = {
        ...params.row,
        status: "inactive",
      };
      const res = await UpdateClinic({ variables: data });
      const updatedClinic = clinics.map((e: any) =>
        e._id === res.data.updateClinic._id
          ? { ...e, ...res.data.updateClinic }
          : e
      );
      setClinics(updatedClinic);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let formatedData: any = [];
    data?.getClinics?.map((clinic: any, index: number) => {
      let cli = {
        ...clinic,
        index: index + 1,
      };
      formatedData.push(cli);
    });
    formatedData.sort(function (a: any, b: any) {
      return b.index - a.index;
    });
    setClinics(formatedData);
  }, [data]);

  const columns: GridColDef[] = [
    {
      field: "index",
      headerName: "Ду.",
      width: 15,
    },
    { field: "_id", headerName: "ID", width: 150 },
    { field: "title", headerName: "Эмнэлгийн нэр", width: 150 },
    { field: "email", headerName: "Имэйл", width: 200 },
    { field: "contact_number", headerName: "Холбогдох утас", width: 150 },
    { field: "district", headerName: "Дүүрэг", width: 150 },
    { field: "khoroo", headerName: "Хороо", width: 100 },
    { field: "address", headerName: "Дэлгэрэнгүй хаяг", width: 150 },
    {
      field: "status",
      headerName: "Төлөв",
      width: 150,
      renderCell: (params) => <RenderStatus status={params.value} />,
    },
    {
      field: "updateStatus",
      headerName: "Төлөв өөрчлөх",
      sortable: false,
      width: 150,
      renderCell: (params: any) => {
        const clinicStatus: string = params.row.status;
        return clinicStatus === "pending" ? (
          <>
            <IconButton
              color="success"
              sx={styles.actionButton}
              onClick={() => approveClinic(params)}
            >
              <AddBox />
            </IconButton>
            <IconButton
              color="error"
              sx={styles.actionButton}
              onClick={() => declineClinic(params)}
            >
              <IndeterminateCheckBox />
            </IconButton>
          </>
        ) : clinicStatus === "active" ? (
          <IconButton
            color="error"
            sx={styles.declineButton}
            onClick={() => declineClinic(params)}
          >
            <IndeterminateCheckBox />
          </IconButton>
        ) : (
          <IconButton
            color="success"
            sx={styles.actionButton}
            onClick={() => approveClinic(params)}
          >
            <AddBox />
          </IconButton>
        );
      },
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
    <Box
      sx={{
        width: "100%",
        height: "90Vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => {
          setClinicData({});
          setOpenAddModal(true);
        }}
        variant="outlined"
      >
        Эмнэлэг нэмэх
      </Button>
      {loading ? (
        <Loading />
      ) : (
        <DataGrid
          sx={{
            width: "100%",
            height: 640,
          }}
          getRowId={(doc) => doc._id}
          rows={clinics}
          columns={columns}
          pageSize={10}
          onSelectionModelChange={(itm) => {
            setClinicData(
              clinics.filter((e: clinicType) => e._id === itm[0])[0]
            );
            setselectedId({ _id: itm[0] });
          }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                _id: false,
              },
            },
          }}
        />
      )}
      <CreateModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        createFunction={addData}
        addButtonName={"Add clinic"}
      >
        <ModalInput
          label={"Эмнэлгийн нэр"}
          onChange={(val: any) => updateChangeData("title", val.target.value)}
        />
        <ModalInput
          label={"Имэйл"}
          onChange={(val: any) => updateChangeData("email", val.target.value)}
        />
        <ModalInput
          label={"Холбогдох утас"}
          onChange={(val: any) =>
            updateChangeData("contact_number", val.target.value)
          }
        />
        <ModalInput
          label={"Дүүрэг"}
          onChange={(val: any) =>
            updateChangeData("district", val.target.value)
          }
        />
        <ModalInput
          label={"Хороо"}
          onChange={(val: any) => updateChangeData("khoroo", val.target.value)}
        />
        <ModalInput
          label={"Дэлгэрэнгүй хаяг"}
          onChange={(val: any) => updateChangeData("address", val.target.value)}
        />
      </CreateModal>
      <CreateModal
        addButtonName={"Зөвшөөрөх"}
        open={approveModal}
        setOpen={setApproveModal}
        createFunction={() => console.log("approve")}
      >
        <Typography
          id="modal-title"
          variant="h5"
          align="center"
          sx={styles.approveModalTitle}
        >
          Зөвшөөрөл өгөх
        </Typography>
        <Typography
          id="modal-description"
          variant="h6"
          align="center"
          sx={styles.approveModalDesc}
        >
          Та тус эмнэлэгт системийн эрх өгөхийг зөвшөөрч байна уу?
        </Typography>
      </CreateModal>
      <DeleteModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        deleteButtonName={"Устгах"}
        fixButtonName={"Засах"}
        deleteFunction={deleteData}
        fixFunction={updateData}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Үйлчилгээ засах
        </Typography>
        <ModalInput
          label={"Эмнэлгийн нэр"}
          onChange={(e: any) => updateChangeData("title", e.target.value)}
          value={clinicData?.title}
        />
        <ModalInput
          label={"Имэйл"}
          onChange={(e: any) => updateChangeData("email", e.target.value)}
          value={clinicData?.email}
        />
        <ModalInput
          label={"Холбогдох утас"}
          onChange={(e: any) =>
            updateChangeData("contact_number", e.target.value)
          }
          value={clinicData?.contact_number}
        />
        <ModalInput
          label={"Дүүрэг"}
          onChange={(e: any) => updateChangeData("district", e.target.value)}
          value={clinicData?.district}
        />
        <ModalInput
          label={"Хороо"}
          onChange={(e: any) => updateChangeData("khoroo", e.target.value)}
          value={clinicData?.khoroo}
        />
        <ModalInput
          label={"Дэлгэрэнгүй хаяг"}
          onChange={(e: any) => updateChangeData("address", e.target.value)}
          value={clinicData?.address}
        />
      </DeleteModal>
    </Box>
  );
};
