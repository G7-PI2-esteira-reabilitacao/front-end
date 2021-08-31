import { makeStyles, Toolbar, Container, Button, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  title:{
    textAlign: 'center',
    color: '#fff',
    background: '#17809F'    
  },
  button: {
    width: theme.spacing(20), 
    align: 'right',
    marginRight: '20px',
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
        main: '#C4C4C4',
      }
    }
  })

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div className={classes.root}>
          <Container maxWidth="md">
          <h1 className={classes.title}>DADOS DO PACIENTE</h1>
          <div>
          <TextField
            id="filled-full-width"
            label="Nome"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Data Nascimento"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Cartão de Saúde"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="RG"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="CPF"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Telefone"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Genero</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                <FormControlLabel value="other" control={<Radio />} label="Outro" />
              </RadioGroup>
          </FormControl>
        </div>
        <div>
          <TextField 
            id="filled-full-width"
            label="Nome da mãe"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Nome do pai"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <h1 className={classes.title}>DADOS FÍSICOS</h1>
        <div>
          <TextField
            id="filled-full-width"
            label="Prontuário"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            label="Altura"
            id="filled-end-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">m</InputAdornment>,
            }}
            variant="filled"
          />
          <TextField
            label="Peso"
            id="filled-start-adornment"
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Grau de dificuldade"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Sessão"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Evolução"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-full-width"
            label="Desempenho"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          <TextField
            id="filled-full-width"
            label="Limitações"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </div>

          </Container>
        </div>
      </form>
      <ThemeProvider theme={theme}>
        <Container className={classes.root} maxWidth="md">
          <Button className={classes.button} variant="contained" color="secondary" size="small">
            CANCELAR
          </Button>
          <Button className={classes.button} variant="contained" color="primary" size="small">
            CADASTRAR
          </Button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Main;