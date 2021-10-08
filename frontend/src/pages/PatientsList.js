import React, { useEffect, useState } from 'react';
import { makeStyles,withStyles, Toolbar, Container, Button} from '@material-ui/core';
import { Select, Input,  MenuItem, FormControl} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '30px',
    alignItems: 'center',
    height: '100hv',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(2),
  },
  title:{
    marginTop: '35px',
    textAlign: 'center',
    color: '#fff',
    background: '#17809F'    
  },
  cardbox:{
    marginTop: '20px'  
  },
  titlebox:{
    color: '#fff',
    background: '#17809F'    
  },
  button: {
    width: theme.spacing(20), 
    align: 'right',
    marginTop: '30px',
    marginRight: '20px',
    position: 'relative',
    right: '0'

  },
  table: {
    minWidth: 700,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#17809F',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name,  session, prontuary, age) {
  return { name, session, prontuary, age };
}

const rows = [
  createData('Antonio Marcos Silva', 3, 'Fisioterapia', 42),
  createData('Barbara Ferreira Costa', 1, 'Parkinson', 29),
  createData('José Luís Pereira', 1, 'Recuperação', 57),
  createData('Manoel Cardoso', 4, 'Fisioterapia', 54),
  createData('Paula Matos Guimarães', 2, 'Fisioterapia', 47),
];

function SessionData(props) {
  const classes = useStyles();

  const [value, setSelectedValue] = React.useState('female');
/* 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }; */

  const [elements, setElements] = useState([]);

  useEffect(()=>{
    if(props.elements) setElements(props.elements)
  }, [props.elements])

  const handleChange = (event) => {
    props.change(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div>
          <Container maxWidth="md">
            <h1 className={classes.title} fontFamyli="">LISTA DE PACIENTES</h1>
            {/* <div>
              <TextField 
                required
                id="filled-full-width"
                label="Data"
                margin="normal"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
              <TextField
                id="filled-full-width"
                label="Procedimento"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
            </div> */}
            <div className={classes.root}>
              <FormControl className={classes.formControl}>
                <Select
                  value={props.value}
                  onChange={handleChange}
                  input={<Input />}
                >
                  {elements.map((name, index) => (
                    <MenuItem key={index} value={name} >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Nome</StyledTableCell>
                    <StyledTableCell align="right">Sessão</StyledTableCell>
                    <StyledTableCell align="right">Prontuário</StyledTableCell>
                    <StyledTableCell align="right">Idade</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.session}</StyledTableCell>
                      <StyledTableCell align="right">{row.prontuary}</StyledTableCell>
                      <StyledTableCell align="right">{row.age}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>
          </Container>          
        </div>
      </form>
      <Container className={clsx(classes.root, classes.position)} maxWidth="md">
        {/* <Button className={classes.button} variant="contained" color="secondary" size="small">
          CANCELAR
        </Button> */}
        <Button className={classes.button} variant="contained" color="primary" size="small" href="/">
          VOLTAR
        </Button>
      </Container>
    </div>
  );
}

export default SessionData;                                                           