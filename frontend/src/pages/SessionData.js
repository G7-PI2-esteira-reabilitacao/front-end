import { makeStyles, Toolbar, Container, Button, Card } from '@material-ui/core';
import { CardContent, Typography, Box, Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React from 'react';
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
}));

function SessionData() {
  const classes = useStyles();

  const [value, setSelectedValue] = React.useState('female');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div>
          <h2 className={classes.title} fontFamyli="">SESSÃO: 4</h2>
          <Container maxWidth="md">
            <div>
              {/* <InputLabel htmlFor="standard-adornment">Nome</InputLabel> */}
              <TextField
                required
                id="name"
                label="Dados Sessão"
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
            </div>
          </Container>
          <div>
            <Container maxWidth="md">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={4}>
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        SATURAÇÃO
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        98
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        SpO2
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        FREQUENCIA CARDÍACA
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        79 
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        bpm
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        TEMPO DE SESSÃO
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        00:19:35
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        min
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        PRESSÃO ARTERIAL
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        12/8
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        mm/Hg
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        CADÊNCIA
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        130
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        ppm
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        PONTUAÇÃO
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        98
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        bpm
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              </Grid>
            </Box>     
            </Container>
          </div>
        </div>
      </form>
      <Container className={clsx(classes.root, classes.position)} maxWidth="md">
        {/* <Button className={classes.button} variant="contained" color="secondary" size="small">
          CANCELAR
        </Button> */}
        <Button className={classes.button} variant="contained" color="primary" size="small">
          VOLTAR
        </Button>
      </Container>
    </div>
  );
}

export default SessionData;