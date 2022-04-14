import { useQuery } from "@apollo/client";
import { Chip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState, useEffect } from "react";
import { GetClinics } from "../graphql/queries";

const RenderStatus = (params: any) => {
  if (params.status == "accepted") {
    return <Chip label="accepted" color="success" />;
  } else {
    return <Chip label="requested" />;
  }
};

const columns: GridColDef[] = [
  {
    field: "index",
    headerName: "No",
    width: 15,
  },
  { field: "clinic_name", headerName: "name", width: 150 },
  { field: "operation_name", headerName: "operation name", width: 150 },
  { field: "operation_date", headerName: "operation date", width: 150 },
  { field: "email", headerName: "email", width: 200 },
  { field: "clinic_web", headerName: "web", width: 150 },
  { field: "phone", headerName: "phone", width: 150 },
  { field: "contact_number", headerName: "contact number", width: 150 },
  {
    field: "status",
    headerName: "status",
    width: 150,
    renderCell: (params) => <RenderStatus status={params.value} />,
  },
];

export const Clinic = () => {
  const { loading, error, data } = useQuery(GetClinics);
  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    let formatedData: any = [];
    data?.getClinics?.map((clinic: any, index: number) => {
      let cli = {
        ...clinic,
        index: index + 1,
      };
      console.log(cli);
      formatedData.push(cli);
    });
    setClinics(formatedData);
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height: "90Vh",
        display: "flex ",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading == true ? (
        "Loading..."
      ) : (
        <div style={{ width: "100%", height: "90%" }}>
          <DataGrid
            getRowId={(doc) => doc._id}
            rows={clinics}
            columns={columns}
            pageSize={10}
          />
        </div>
      )}
    </div>
  );
};
