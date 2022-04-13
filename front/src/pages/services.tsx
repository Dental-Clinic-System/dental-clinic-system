import { Box } from '@mui/material'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "../graphql";
import { Loading } from '../components';

type serviceType = {
  id: string;
  serviceName: string;
  shortName: string;
  code: string;
  price: number;
  description: string;
};

export const Services = () => {
  const { loading, data } = useQuery(GET_SERVICES);
  if (!loading) console.log(data);

  const rows: Array<serviceType> = [
    {
      id: "1",
      serviceName: "Shud avah mes ajilbar",
      shortName: "Shud avah",
      code: "A02",
      price: 15000,
      description: "shud avah agt araag tootsohgu",
    },
    {
      id: "2",
      serviceName: "Shud tseverleh",
      shortName: "tseverlgee",
      code: "A02",
      price: 15000,
      description: "shud avah agt araag tootsohgu",
    },
    {
      id: "3",
      serviceName: "Shud gun tseverlegee",
      shortName: "gun tseverlgee",
      code: "A02",
      price: 15000,
      description: "shud avah agt araag tootsohgu",
    },
    {
      id: "4",
      serviceName: "Tsoorson shud lombdoh",
      shortName: "Lomb",
      code: "A02",
      price: 15000,
      description: "shud avah agt araag tootsohgu",
    },
    {
      id: "5",
      serviceName: "Hiimel shud suulgah ajilbar",
      shortName: "Shud suulgah",
      code: "A02",
      price: 15000,
      description: "shud avah agt araag tootsohgu",
    },
  ];

  return (
    <Box>
      {loading && <Loading/>}
      <DataGrid
        sx={{ height: 640, width: "60vw" }}
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(e) => console.log(e)}
      />
    </Box>
  );
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "serviceName",
    headerName: "Үйлчилгээний нэр",
    width: 150,
    editable: true,
  },
  {
    field: "shortName",
    headerName: "Богино нэр",
    width: 150,
    editable: true,
  },
  {
    field: "code",
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
];