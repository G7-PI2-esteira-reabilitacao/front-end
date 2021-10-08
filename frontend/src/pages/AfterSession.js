import { makeStyles, Toolbar, Container, Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
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
}));

const data = [
  {
    name: 'Page A',
    acertos: 12,
    cadencia: 142,
    tempo: 102,
  },
  {
    name: 'Page B',
    acertos: 14,
    cadencia: 144,
    tempo: 98,
  },
  {
    name: 'Page C',
    acertos: 15,
    cadencia: 150,
    tempo: 105,
  },
  {
    name: 'Page D',
    acertos: 13,
    cadencia: 148,
    tempo: 95,
  },
  {
    name: 'Page E',
    acertos: 15,
    cadencia: 157,
    tempo: 100,
  },
  {
    name: 'Page F',
    acertos: 16,
    cadencia: 155,
    tempo: 110,
  },
  {
    name: 'Page G',
    acertos: 18,
    cadencia: 160,
    tempo: 80,
  },
];

function AfterSession() {
  const classes = useStyles();

  const [value, setSelectedValue] = React.useState('female');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Toolbar />
      <Container className={classes.title} maxWidth="md">
        <Box display="flex">
          <Box display="flex" height='630px' width='20%' className={classes.description}>
            <Box className={classes.desc}>
              <Card className={classes.cardbox}>
                <CardContent>
                  <Typography className={classes.titlebox} align="center" gutterBottom>
                    PONTUAÇÃO
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    acertos
                  </Typography>
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
                    ppm
                  </Typography>
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
                    bpm
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box display="flex" className={classes.content}>
            <Box className={classes.test}>

              <ResponsiveContainer width="100%" height={200}>

                <BarChart
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
                  <YAxis label={{ value: 'acertos', angle: -90, position: 'insideLeft' }}/>
                  <Tooltip />
                  <Bar maxBarSize={40} dataKey="acertos" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart
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
                  <YAxis label={{ value: 'cadência', angle: -90, position: 'insideLeft' }}/>
                  <Tooltip />
                  <Bar maxBarSize={40} type="monotone" dataKey="cadencia" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
              <BarChart
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
                  <YAxis label={{ value: 'bpm', angle: -90, position: 'insideLeft' }}/>
                  <Tooltip />
                  <Bar maxBarSize={40} type="monotone" dataKey="tempo" fill="#820c00" />
                </BarChart>
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