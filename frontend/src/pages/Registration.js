import { makeStyles, Toolbar, Container, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
    marginTop: '30px',
    marginRight: '20px',
    position: 'relative',
    right: '0'

  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Registration() {
  const classes = useStyles();

  const [value, setSelectedValue] = React.useState('female');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div>
          <Container maxWidth="md">
            <h1 className={classes.title} fontFamyli="">DADOS PESSOAIS</h1>
            <div>
              {/* <InputLabel htmlFor="standard-adornment">Nome</InputLabel> */}
              <TextField
                required
                id="name"
                label="Nome"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
              <TextField
                required
                id="date"
                label="Data Nascimento"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
              <TextField
                id="filled-full-width"
                label="Cartão de Saúde"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
            </div>
            <div>
              <TextField
                required
                id="filled-required"
                label="RG"
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="CPF"
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
              <TextField
                id="filled-full-width"
                label="Telefone"
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
              <FormControl component="fieldset" className={classes.margin}>
                <FormLabel component="legend" size="small">Genero</FormLabel>
                  <RadioGroup row label="gender" name="gender" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio color="primary" size="small"/>} label="F" />
                    <FormControlLabel value="male" control={<Radio color="primary" size="small"/>} label="M"/>
                    <FormControlLabel value="other" control={<Radio color="primary" size="small"/>} label="Outro" />
                  </RadioGroup>
              </FormControl>
            </div>
            <div>
              <TextField 
                id="filled-full-width"
                label="Nome da mãe"
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
                label="Nome do pai"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
            </div>
            <h1 className={classes.title}>DADOS FÍSICOS</h1>
            <div>
              <TextField
                required
                id="filled-required"
                label="Prontuário"
                type="text"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                style ={{width: '48%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Altura"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">m</InputAdornment>,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
              <TextField
                required
                id="filled-required"
                label="Peso"
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                }}
                style ={{width: '23%'}}
                variant="filled"
              />
            </div>
            <div>
                <TextField                  
                  required
                  id="filled-required"
                  label="Grau de dificuldade"
                  type="text"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style ={{width: '48%'}}
                  variant="filled"
                />
                <TextField
                  id="filled-full-width"
                  label="Limitações"
                  type="text"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style ={{width: '48%'}}
                  variant="filled"
                />
            </div>
          </Container>
        </div>
      </form>
      <Container className={clsx(classes.root, classes.position)} maxWidth="md">
        <Button className={classes.button} variant="contained" color="secondary" size="small" href="/">
          CANCELAR
        </Button>
        <Button className={classes.button} 
          variant="contained" 
          type="button" 
          color="primary" 
          size="small" 
          onClick={handleOpen}>
          CADASTRAR
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">USUÁRIO CADASTRADO COM SUCESSO!</h2>
              <Button className={classes.button} variant="contained" color="primary" size="small" href="/">
                INÍCIO
              </Button>
              <Button className={classes.button} variant="contained" color="primary" size="small" href="patients">
                LISTA DE PACIENTES
              </Button>
            </div>
          </Fade>
        </Modal>
      </Container>
    </div>
  );
}

export default Registration;