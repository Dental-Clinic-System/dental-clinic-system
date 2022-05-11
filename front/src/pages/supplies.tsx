import { Box } from "@mui/system"
import { DataGrid } from "@mui/x-data-grid";


export const Supplies = () => {
    return (
        <Box>
            {/* <DataGrid
                sx={{ height: 640, width: '100%' }}
                getRowId={(row) => row._id}
                rows={patients ? patients : []}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
            /> */}

            <DataGrid
                sx={{ height: 640, width: '100%' }}
                rows={dummyData}
                columns={columns}
                pageSize={10}
                getRowId={(row) => row.itemCode}
            />
        </Box>
    )
}

const columns = [
    { field: "itemCode", headerName: 'Код', width: 100 },
    { field: 'barCode', headerName: 'Бар код', width: 150 },
    { field: 'itemName', headerName: 'Барааны нэр', width: 250 },
    { field: 'quantity', headerName: 'Тоо', width: 100 },
];

const dummyData = [
    {
        itemCode: 'F01',
        barCode: '',
        itemName: 'Ломбо',
        quantity: '100 мг',
    },
    {
        itemCode: 'C01',
        barCode: '83923823',
        itemName: 'Бээлий',
        quantity: '100'
    },
    {
        itemCode: 'C02',
        barCode: '34576543',
        itemName: 'Чимхэгч',
        quantity: '100'
    },
    {
        itemCode: 'C03',
        barCode: '23452346',
        itemName: 'Амны толь',
        quantity: '100'
    },
    {
        itemCode: 'C04',
        barCode: '54234536',
        itemName: 'Тариур',
        quantity: '100'
    },
    {
        itemCode: 'C05',
        barCode: '54234537',
        itemName: 'Маск',
        quantity: '100'
    },
    {
        itemCode: 'C06',
        barCode: '54234539',
        itemName: 'Өвчин намдаагч',
        quantity: '100'
    },
]