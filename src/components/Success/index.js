import React, { useEffect, useState } from 'react'
import {ThreeDots} from 'react-loader-spinner'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

function createData(
  id,
  email,
  username,
){
  return{
    id,
    email,
    username
  };
}

function Success() {

  const [loading , setLoading] = useState(true);
  const [users , setUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  },[]);

  const getAllUser = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users`).then((response) => {

      var temp = response.data.map((user) => {
        return createData(user.id , user.email , user.username);

      });
      setUsers(temp);
      setLoading(false);
    }).catch((err) => {
      console.log(err);
    });
  }

  const deleteUser = (id) =>{
    axios.delete(`${process.env.REACT_APP_API_URL}/users/${id}`).then((response) => {
      console.log("kullanıcı silindi");
      getAllUser()
    }).catch((err) => {
      console.log(err);
    });
  }
  return (
    loading ? <ThreeDots color="#00BFFF" height={80} width={80}/> :

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Username</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.username}</TableCell>
                                <TableCell align="right">
                                    <button onClick={() => {
                                        deleteUser(row.id)
                                    }}>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </button>


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
  )
}

export default Success
