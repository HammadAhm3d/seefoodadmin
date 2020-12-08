import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">SignInMethod</TableCell>
            {/* <TableCell align="right">IsUser</TableCell> */}
            </TableRow>
        </TableHead>
        <TableBody>
          {props.userData.map((row) => (
            <TableRow key={Math.random()}>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell align="right">{row.signInMethod}</TableCell>
              {/* <TableCell align="right">{row.isUser}</TableCell> */}
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
