import { useQuery } from '@apollo/client';
import { Chip, Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { GetClinics } from '../graphql/queries';
import { Loading } from '../components';


const RenderStatus = (params: any) => {
    if (params.status == 'accepted') {
        return (<Chip label="accepted" color="success" />)
    }
    else {
        return (<Chip label="requested" />)
    }
}

export const Clinic = () => {
    const { loading, data } = useQuery(GetClinics);
    const [clinics, setClinics] = useState([])

    useEffect(() => {
        let formatedData: any = []
        data?.getClinics?.map((clinic: any, index: number) => {
            let cli = {
                ...clinic,
                index: index + 1
            }
            console.log(cli)
            formatedData.push(cli)
        })
        setClinics(formatedData)
    }, [data])

    return (
        <Box sx={{ width: '100%', height: '90Vh', display: 'flex ', alignItems: 'center', justifyContent: 'center' }}>
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
                    />
            }
        </Box>
    )
}

const columns: GridColDef[] = [
    {
        field: 'index',
        headerName: 'No',
        width: 15,
    },
    { field: 'clinic_name', headerName: 'name', width: 150 },
    { field: 'operation_name', headerName: 'operation name', width: 150 },
    { field: 'operation_date', headerName: 'operation date', width: 150 },
    { field: 'email', headerName: 'email', width: 200 },
    { field: 'clinic_web', headerName: 'web', width: 150 },
    { field: 'phone', headerName: 'phone', width: 150 },
    { field: 'contact_number', headerName: 'contact number', width: 150 },
    {
        field: 'status', headerName: 'status', width: 150,
        renderCell: (params) => <RenderStatus status={params.value} />
    },
]