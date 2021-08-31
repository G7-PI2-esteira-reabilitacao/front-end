import { Grid, makeStyles, Toolbar } from '@material-ui/core';
import { Button, Container } from '@material-ui/core';
import React from 'react';
import logo from '../assets/logo-fisio-gama.png';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    height: '100hv'
  },
  image: {
    width: '40%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    width: theme.spacing(50),
    marginLeft: theme.spacing(2),
    
  }
}));

function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Toolbar />
        <img
          className={classes.image}
          alt={"logo"}
          src={logo}
        />
      </Container>
      <Container maxWidth="md">
        <Grid spacing={4} container>
          <Grid item lg={6} md={6}  >
            <Button className={classes.button} variant="contained" color="primary" size="large">
              INICIAR SESSÃO
            </Button>
          </Grid>
          <Grid item lg={6} md={6}  >
            <Button className={classes.button} variant="contained" color="primary" size="large">
              LISTA DE PACIENTES
            </Button>
          </Grid>
          <Grid item lg={6} md={6}  >
            <Button className={classes.button} variant="contained" color="primary" size="large">
              RELATÓRIO DE DESEMPENHO
            </Button>
          </Grid>
          <Grid item lg={6} md={6}  >
            <Button className={classes.button} variant="contained" color="primary" size="large">
              CADASTRAR NOVO PACIENTE
            </Button>
          </Grid>
        </Grid>
      </Container>

    </div>
  );
}

export default Main;


