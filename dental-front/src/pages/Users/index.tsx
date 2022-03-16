import * as React from "react"
import * as data from "./User.json"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const column = Object.keys(data.data[0]);
const ThData = () => {
  return column.map((data) => {
    return <th key={data}>{data}</th>
  })
}
const tdData = () => {
  return data.data.map((data) => {
    return (
      <tr>
        {
          column.map((v) => {
            return <td>{data[v]}</td>
          })
        }
      </tr>
    )
  })
}

const Users = () => {
  console.log('data: ', data)
  return (
    <div>
      {/* @ts-ignore */}
      {data?.data.map((e, i) => {
        return (
          <div style={{ height: '100vh', width: '100vw' }}>
            {/* <DataGrid rows={data.data} columns={data.data}/> */}
              {ThData()}
              {tdData()}
          </div>
        )
      })}
    </div>
  )
}
export default Users