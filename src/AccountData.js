import React, { useEffect, useState } from 'react'
import axios from 'axios'
// table
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export default function AccountData() {



    const myToken = JSON.parse(localStorage.getItem("user"))
    // console.log(myToken);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get("https://real-pear-fly-kilt.cyclic.app/accounts", {
            headers: {
                "Authorization": `Bearer ${myToken.jwtToken}`
            }
        }).then(y => {
            setUserData(y.data)
        })
    }, [])


// table grid start

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    // table grid ends



    return (
        <div>

            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">

                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="right">Title</StyledTableCell>
                            <StyledTableCell align="right">First Name</StyledTableCell>
                            <StyledTableCell align="right">Last Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {userData.map((row) => (
                            <StyledTableRow key={row.id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.title}</StyledTableCell>
                                <StyledTableCell align="right">{row.firstName}</StyledTableCell>
                                <StyledTableCell align="right">{row.lastName}</StyledTableCell>
                                <StyledTableCell align="right">{row.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                    
                </Table>
            </TableContainer>

        </div>
    )
}
