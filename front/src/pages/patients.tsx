import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Алунгуа', age: '17', registration_number: 'ФД04253111', sex: 'Эр', address: 'Somewhere', phone: '99161699', email: 'n.ligfe@gmail.com', doctor: 'Someone', card_id: '83137659' },
  { id: 2, name: 'Хулан', age: '42', registration_number: 'УБ02223414', sex: 'Эр', address: 'Somewhere', phone: '93402204', email: 'john.me@gmail.com', doctor: 'Anyone', card_id: '17482732' },
  { id: 3, name: 'Тэмүлэн', age: '22', registration_number: 'УБ00224222', sex: 'Эм', address: 'With me', phone: '92422504', email: 'mon.coo@gmail.com', doctor: 'Sarah', card_id: '84604646' },
];

const columns = [
  { field: 'id', width: 150 },
  { field: 'name', headerName: 'Өвчтөний нэр', width: 150, editable: true },
  { field: 'age', headerName: 'Нас', width: 70, editable: true },
  { field: 'registration_number', headerName: 'Регистийн дугаар', width: 150, editable: true },
  { field: 'sex', headerName: 'Хүйс', width: 70, editable: true },
  { field: 'address', headerName: 'Хаяг', width: 100, editable: true },
  { field: 'phone', headerName: 'Утасны дугаар', width: 150, editable: true },
  { field: 'email', headerName: 'Имэйл хаяг', width: 150, editable: true },
  { field: 'doctor', headerName: 'Эмчлэгч эмч', width: 15e0, editable: true },
  { field: 'card_id', headerName: 'Картын дугаар', width: 150, editable: true },
];

export const PatientsGrid = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick />
    </div>
  );
}