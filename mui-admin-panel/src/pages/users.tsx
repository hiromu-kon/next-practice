import { Box, Typography } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from "react";

export default function Users() {

  const columns = useMemo(() => [
    // {field: 'photoURL', headerName: 'Avatar', width: 60},
    {field: 'name', headerName: 'Name', width: 170},
    {field: 'email', headerName: 'Email', width: 200},
    {field: 'age', headerName: 'Age', width: 100},
    {field: 'createdAt', headerName: 'Created At', width: 200},
  ], [])

  const rows = [
    { id: 1, name: 'Snow', email: 'Jon', age: 35 },
    { id: 2, name: 'Lannister', email: 'Cersei', age: 42 },
    // { id: 3, name: 'Lannister', email: 'Jaime', age: 45 },
    // { id: 4, name: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, name: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, name: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, name: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, name: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, name: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <Box sx={{
      height: 400,
      width: '100%',
    }}>
      <Typography 
        variant='h3'
        component='h3'
        sx={{textAlign: 'center', mt:3, mb: 3}}
      >
        Mangage Users
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
      />
    </Box>
  );
}

