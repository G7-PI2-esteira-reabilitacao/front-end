import { makeStyles, Toolbar } from '@material-ui/core';
import { Button, ThemeProvider, Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    height: '100hv'
  },
  image:{
    height: 140,
    display: 'block',
    marginTop: '50px',
    marginLeft: '430px',
    marginRight: 'auto'
  },
  button: {
    width: theme.spacing(50), 
    align: 'center',
    marginLeft: '35px'
  }
}));

function Main() {
  const classes = useStyles();

  const theme = createTheme ({
    palette: {
      primary: {
        main: '#17809F',
      },
      secondary: {
        main: '#3f51b5',
      }
    }
  })

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Toolbar/>
        {/* <CardMedia
          className={classes.media}
          image="/assets/logo-fisio-gama.png"
          title="Contemplative Reptile"
        /> */}
        <img 
          className={classes.image}
          alt="logo" 
          src="./assets/logo-fisio-gama.png"
        />
      </Container>
      <Container maxWidth="md">     
      <Toolbar/>
      <ThemeProvider theme={theme}>
        <Button className={classes.button} variant="contained" color="primary" size="large">
          INICIAR SESSÃO
        </Button>
        <Button className={classes.button} variant="contained" color="primary" size="large">
          LISTA DE PACIENTES
        </Button>
        <Toolbar/>
        <Button className={classes.button} variant="contained" color="primary" size="large">
          RELATÓRIO DE DESEMPENHO
        </Button>
        <Button className={classes.button} variant="contained" color="primary" size="large">
          CADASTRAR NOVO PACIENTE
        </Button>
      </ThemeProvider>
      </Container> 
    </div>
  );
}

export default Main;


