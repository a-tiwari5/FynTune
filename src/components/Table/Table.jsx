import React, { useEffect } from 'react'
import "./table.scss"

import { DataGrid } from '@mui/x-data-grid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteShop, loadShops } from '../../redux/actions';
import { Button, ButtonGroup } from '@mui/material';

import TableMUI from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import { useNavigate } from 'react-router-dom';




const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'area', headerName: 'Area', width: 100 },
    { field: 'category', headerName: 'Category', width: 100 },
    { field: 'openingTime', headerName: 'OpeningTime', width: 110 },
    { field: 'closingTime', headerName: 'ClosingTime', width: 110 },
    { field: 'status', headerName: 'Status', width: 100 }
];

const Table = () => {

    let dispatch = useDispatch()
    const { shops } = useSelector(state => state.data)

    const navigate = useNavigate();


    useEffect(() => {
        dispatch(loadShops())
    }, [])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this shop?")) {
            dispatch(deleteShop(id))
        }
    }

    return (
        <>
            <div style={{ marginBottom: '10px' }} >
                <Button variant="contained" onClick={() => { navigate('/new') }}>Add Shop</Button>
            </div>
            <div className='table'>
                <div style={{ height: "100vh", width: '800px' }}>
                    {shops && <DataGrid
                        rows={shops}
                        columns={columns}
                        pageSize={100}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />}
                    {/* <ButtonGroup variant="contained" aria-label="contained primary button group">
                <Button color='secondary'>Delete</Button>
                <Button color="primary">Edit</Button>
            </ButtonGroup> */}
                </div>
                <TableContainer sx={{ width: '200px', border: '1px solid rgb(231, 228, 228)', borderLeft: 'none', borderBottom: 'none' }} component={Paper}>
                    <TableMUI aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {shops.map((shop) => (
                                <TableRow
                                    key={shop.name}
                                    sx={{ borderBottom: "1px solid rgb(231, 228, 228)" }}
                                >
                                    <ButtonGroup variant="contained" aria-label="contained primary button group" sx={{ marginTop: '5px', marginBottom: '5px', marginLeft: '10px' }}>
                                        <Button onClick={() => handleDelete(shop.id)} color='secondary' sx={{ height: "40px" }}>Delete</Button>
                                        <Button sx={{ width: '90px' }} color="primary">Edit</Button>
                                    </ButtonGroup>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableMUI>
                </TableContainer>
            </div>
        </>
    )
}

export default Table