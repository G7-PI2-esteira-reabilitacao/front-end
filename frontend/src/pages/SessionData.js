import React from 'react';
import { makeStyles, Toolbar, Container, Button, Card } from '@material-ui/core';
import { CardContent, CardActions, Typography, Box, Grid} from '@material-ui/core';
import clsx from 'clsx';
import saturacao from '../assets/icon-saturacao.svg';
import pressao from '../assets/icon-pressao2.png';
import frequencia from '../assets/icon-frequencia2.png';
import relogio from '../assets/relogio.jpg';
import cadencia from '../assets/icon-cadencia.png';
import BarGraph from '../components/BarGraph';


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
  image: {
    width: '30%',
    display: 'block',
    margin: 'auto',
  },
  imagesecondary: {
    width: '20%',
    display: 'block',
    margin: '15px',
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

  /* const [value, setSelectedValue] = React.useState('female'); */

  /* const handleChange = (event) => {
    setSelectedValue(event.target.value);
  }; */

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Toolbar/>
        <div>
          <Container maxWidth="md">
            <h2 className={classes.title} fontFamyli="">SESSÃO: 4</h2>
            <div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
              Dados do desempenho de nome da sessao x:
            </Typography>

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
                      <img
                        className={classes.image}
                        alt={"saturacao"}
                        src={saturacao}
                        align="left"
                      />
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
                  <BarGraph data={51} lim={50}/>
                </Grid>
                <Grid item xs={4}>
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        FREQUENCIA CARDÍACA
                      </Typography>
                      <img
                        className={classes.imagesecondary}
                        alt={"frequencia"}
                        src={frequencia}
                        align="left"
                      />
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
                      <img
                        className={classes.image}
                        alt={"tempo"}
                        src={relogio}
                        align="left"
                      />
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
                      <img
                        className={classes.imagesecondary}
                        alt={"pressao"}
                        src={pressao}
                        align="left"
                      />
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
                      <img
                        className={classes.imagesecondary}
                        alt={"cadencia"}
                        src={cadencia}
                        align="left"
                      />
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
                        VELOCIDADE MÉDIA
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        1
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        m/s
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">Números anteriores</Button>
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
        <Button className={classes.button} variant="contained" color="primary" size="small" href="/patients">
          VOLTAR
        </Button>
      </Container>
    </div>
  );
}

export default SessionData;