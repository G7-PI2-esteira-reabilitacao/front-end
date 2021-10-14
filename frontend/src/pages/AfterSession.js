import { makeStyles, Toolbar, Container, Box, Card, CardContent, Typography, Switch, FormControlLabel, Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
  Label,
  BarChart,
} from 'recharts';


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
  content: {
    height: '680px',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  test: {
    marginLeft: '10px',
  },
  title: {
    marginTop: theme.spacing(3),
  },
  description: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  desc: {
    height: '200px',
    width: '100%',
  },
  cardbox: {
    marginTop: '20px'
  },
  titlebox: {
    color: '#fff',
    background: '#17809F'
  },
  switch: {
    left: '25%',
  },

}));

const data = [
  {
    name: 'Page A',
    acertos: 12,
    cadencia: 142,
    batimentos: 90,
    velocidade: 0.2,
  },
  {
    name: 'Page B',
    acertos: 14,
    cadencia: 144,
    batimentos: 94,
    velocidade: 0.3,
  },
  {
    name: 'Page C',
    acertos: 15,
    cadencia: 150,
    batimentos: 96,
    velocidade: 0.4,
  },
  {
    name: 'Page D',
    acertos: 13,
    cadencia: 148,
    batimentos: 102,
    velocidade: 0.5,
  },
  {
    name: 'Page E',
    acertos: 15,
    cadencia: 157,
    batimentos: 108,
    velocidade: 0.6,
  },
  {
    name: 'Page F',
    acertos: 16,
    cadencia: 155,
    batimentos: 110,
    velocidade: 0.7,
  },
  {
    name: 'Page G',
    acertos: 18,
    cadencia: 160,
    batimentos: 115,
    velocidade: 0.8,
  },
];

function AfterSession() {
  const classes = useStyles();
  const [type, setType] = useState([false, false, false]);

  const preventDefault = (event) => event.preventDefault();


  useEffect(() => {
    setType([false, false, false]);
  }, [])

  const handleChange = (opt) => {
    let obj = [...type];
    obj[opt] = !obj[opt];
    setType(obj);
    console.log(type);
  };
  return (
    <div>
      <Toolbar />
      <Container className={classes.title} maxWidth="md">
        <Box display="flex">

          <Box display="flex" height='630px' width='20%' className={classes.description}>
            <Box style={{ marginTop: "5px" }} className={classes.desc}>
              <Card className={classes.cardbox}>
                <CardContent>
                  <Typography className={classes.titlebox} align="center" gutterBottom>
                    PONTUAÇÃO
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    acertos/sessão
                  </Typography>
                  <Switch className={classes.switch} onChange={() => handleChange(0)} color="primary" />
                </CardContent>
              </Card>
            </Box>
            <Box className={classes.desc}>
              <Card className={classes.cardbox}>
                <CardContent>
                  <Typography className={classes.titlebox} align="center" gutterBottom>
                    CADÊNCIA
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    ppm/sessão
                  </Typography>
                  <Switch className={classes.switch} onChange={() => handleChange(1)} color="primary" />
                </CardContent>
              </Card>
            </Box>
            <Box className={classes.desc}>
              <Card className={classes.cardbox}>
                <CardContent>
                  <Typography className={classes.titlebox} align="center" gutterBottom>
                    FREQUÊNCIA CARDIACA
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    bpm/(m/s)
                  </Typography>
                  <Switch className={classes.switch} onChange={() => handleChange(2)} color="primary" />
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box display="flex" className={classes.content}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="left">
              Para realizar medições dos movimentos nas gravações do treino, <b />
              <Link href="#" onClick={preventDefault}>
                clique aqui
              </Link>
            </Typography>
            <Box className={classes.test}>

              <ResponsiveContainer width="100%" height={200}>

                {type[0] ? (<LineChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis >
                    <Label value="Sessões" offset={0} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'acertos', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line dataKey="acertos" stroke="#8884d8" fill="#8884d8" />
                </LineChart>) :
                  (<BarChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis >
                      <Label value="Sessões" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'acertos', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar maxBarSize={40} dataKey="acertos" fill="#8884d8" />
                  </BarChart>)}
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
                {type[1] ? (<LineChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis >
                    <Label value="Sessões" offset={0} position="insideBottom" />
                  </XAxis>
                  <YAxis label={{ value: 'cadencia', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="cadencia" stroke="#82ca9d" fill="#82ca9d" />
                </LineChart>) :
                  (<BarChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis >
                      <Label value="Sessões" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'cadencia', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar maxBarSize={40} type="monotone" dataKey="cadencia" fill="#82ca9d" />
                  </BarChart>)}
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
                {type[2] ? (<LineChart
                  width={500}
                  height={200}
                  data={data}
                  syncId="anyId"
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="velocidade" >
                    <Label value="velocidade" offset={0} position="insideBottom" />
                  </XAxis >
                  <YAxis dataKey="batimentos" label={{ value: 'bpm', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="batimentos" stroke="#820c00" fill="#820c00" />
                 <Line type="monotone" dataKey="batimentos" stroke="#820c00" fill="#820c00" />
                </LineChart>) : (<BarChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="velocidade" >
                      <Label value="velocidade" offset={0} position="insideBottom" />
                    </XAxis >
                    <YAxis dataKey="batimentos" label={{ value: 'bpm', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar maxBarSize={40} type="monotone" dataKey="batimentos" fill="#820c00" />
                  </BarChart>)}
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={40}>
                <BarChart margin={{
                  right: 30,
                  left: 55,
                }} data={data} syncId="anyId">
                  <Brush />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Box>


        </Box>
      </Container>
    </div>
  );
}

export default AfterSession;