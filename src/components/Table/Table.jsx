import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(nome, trackingId, data, status) {
    return { nome, trackingId, data, status };
  }
  
  const rows = [
    createData("Seda Zomo Slim", 18908424, "2 Março 2024", "Approved"),
    createData("Tabaco Amsterda", 18908424, "2 Março 2024", "Pending"),
    createData("Seda BemBolado KingSize", 18908421, "2 Março 2024", "Delivered"),
  ];


  const makeStyle=(status)=>{
    if(status === 'Approved')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Pending')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else{
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
  }

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Pedidos Recentes</h3>
    
    <TableContainer component={Paper}
    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="left">ID Rastreio</TableCell>
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.data}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className=''>Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
