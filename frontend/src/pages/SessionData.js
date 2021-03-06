import React, { useState } from 'react';
import { makeStyles, Toolbar, Container, Button, Card } from '@material-ui/core';
import { CardContent, CardActions, Typography, Box, Grid} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import saturacao from '../assets/icon-saturacao.svg';
import pressao from '../assets/icon-pressao2.png';
import frequencia from '../assets/icon-frequencia2.png';
import relogio from '../assets/relogio.jpg';
import cadencia from '../assets/icon-cadencia.png';


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
    marginTop: '20px',
    marginRight: '20px',
    position: 'relative',
    float: 'right'
  },
}));

function SessionData() {
  const [observacoes, setObservacoes] = useState({saturacao: false, frequencia: false, pressao: false});
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  const handleClick = (type) =>{
    let obj = {...observacoes};
    if(type === 'saturacao'){
      obj.saturacao = !obj.saturacao;
    } else if (type === 'frequencia') {
      obj.frequencia = !obj.frequencia;
    } else if(type === 'pressao') {
      obj.pressao = !obj.pressao;
    }
    setObservacoes(obj);
  }
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
            <h2 className={classes.title} fontFamyli="">SESS??O: 4</h2>
            <div  style={{display: 'inline'}}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left">
              Para realizar medi????es dos movimentos nas grava????es do treino, <b/>
                <Link href="#" onClick={preventDefault}> 
                  clique aqui
                </Link>
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
                        CAD??NCIA
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
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        TEMPO DE SESS??O
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
                  <Card className={classes.cardbox}>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        VELOCIDADE M??DIA
                      </Typography>
                      <Typography variant="h4" component="div" align="right">
                        1
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        m/s
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size="small">N??meros anteriores</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        FREQUENCIA CARD??ACA
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
                    <CardActions>
                      <Button onClick={() => handleClick("frequencia")} size="small">Observa????es</Button>
                    </CardActions>
                    {observacoes.frequencia ? (
                        <CardContent>
                            <Typography >
                            fequ??ncia limites: 50 - 120
                            </Typography>
                        </CardContent>
                     ) : (
                         <>
                         </>
                         )}
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography className={classes.titlebox} align="center" gutterBottom>
                        PRESS??O ARTERIAL
                      </Typography>
                      <img
                        className={classes.imagesecondary}
                        alt={"pressao"}
                        src={pressao}
                        align="left"
                      />
                      <Typography variant="h4" component="div" align="right">
                        120/80
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        mm/Hg
                      </Typography>
                    </CardContent>
                     <CardActions>
                      <Button onClick={() => handleClick("pressao")} size="small">Observa????es</Button>
                    </CardActions>
                    {observacoes.pressao ? (
                        <CardContent>
                            <Typography >
                            sistolica limites: 105 - 130
                            </Typography>
                            <Typography >
                            diatolica limites: 60 - 85  
                            </Typography>
                        </CardContent>
                     ) : (
                         <>
                         </>
                         )} 
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography style={{backgroundColor: "red"}} className={classes.titlebox} align="center" gutterBottom>
                        SATURA????O
                      </Typography>
                      <img
                        className={classes.image}
                        alt={"saturacao"}
                        src={saturacao}
                        align="left"
                      />
                      <Typography variant="h4" component="div" align="right">
                        90
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary" align="right">
                        SpO2
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleClick("saturacao")} size="small">Observa????es</Button>
                    </CardActions>
                    {observacoes.saturacao ? (
                        <CardContent>
                            <Typography >
                                Limite m??dio: 93
                            </Typography>
                        </CardContent>
                     ) : (
                         <>
                         </>
                         )}
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
        <Button className={classes.button} variant="contained" color="secondary" size="small" href="/patients">
          PAUSAR/JOGAR
        </Button>
      </Container>
    </div>
  );
}

export default SessionData;