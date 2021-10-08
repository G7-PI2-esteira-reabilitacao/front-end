import { makeStyles, Toolbar, Container, Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
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
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
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
                    TEMPO DE SESSÃO
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    min
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
          <Box display="flex" className={classes.content}>
            <Box className={classes.test}>

              <ResponsiveContainer width="100%" height={200}>

                <LineChart
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
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart
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
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
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
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
            <Box className={classes.test}>
              <ResponsiveContainer width="100%" height={40}>
                <LineChart margin={{
                  right: 30,
                  left: 55,
                }} data={data} syncId="anyId">
                  <Brush />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Box>


        </Box>
      </Container>
    </div>
  );
}

export default AfterSession;