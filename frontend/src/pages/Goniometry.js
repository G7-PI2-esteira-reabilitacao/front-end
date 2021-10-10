import { makeStyles, Toolbar, Container, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Link } from 'react-router-dom';

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
  button: {
    width: theme.spacing(20), 
    marginRight: '20px',
    marginBottom: '30px',
    position: 'relative',
    float: 'right'
  },
}));

function Goniometry() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div>
          <Container maxWidth="md">
            <h1 className={classes.title} fontFamyli="">DADOS DA SESSÃO</h1>
            <div>
              {/* <InputLabel htmlFor="standard-adornment">Nome</InputLabel> */}
              <TextField
                required
                id="name"
                label="Paciente"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '98%'}}
                variant="filled"
              />
            </div>
            <div>
              <TextField 
                required
                id="filled-full-width"
                label="Sistólica"
                margin="normal"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-full-width"
                label="Diastólica"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
            </div>
            <div>
              {/* <InputLabel htmlFor="standard-adornment">Nome</InputLabel> */}
              <TextField
                required
                id="obs"
                label="Observações"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '98%'}}
                variant="filled"
              />
            </div>
            <h1 className={classes.title}>DADOS DA GONIOMETRIA</h1>
            <div>
              <TextField
                required
                id="filled-required"
                label="Flexão de quadril"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Extensão de quadril"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Flexão joelho esquerdo"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Flexão joelho direito"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Extensão joelho esquerdo"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Extensão joelho direito"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Flexão plantar tornozelo esquerdo"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Flexão plantar tornozelo direito"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Dorsiflexão tornozelo esquerdo"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Dorsiflexão tornozelo direito"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                }}
                style ={{width: '31%'}}
                variant="filled"
              />
            </div>
              <Button className={classes.button} 
              href="/" 
              variant="contained" 
              color="default" 
              size="small"
              >
                CANCELAR
            </Button>
            <Button className={classes.button} variant="contained" color="primary" size="small" href="sessiondata">
              INICIAR
            </Button>
          </Container>
        </div>
      </form>
    </div>
  );
}

export default Goniometry;