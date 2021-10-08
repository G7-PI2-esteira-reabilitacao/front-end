/* eslint-disable react-hooks/rules-of-hooks */
import { Box, makeStyles} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
   },
   box: {
    width: theme.spacing(4),
    height: theme.spacing(20),
    border: '3px solid black',
    borderRadius: '4px',
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'column-reverse'
   },
   bar: {
    width: '105%',
    marginBottom: '-1px'
   },
}));

const data = 4;

function BarGraph(props) {
  const classes = useStyles();
  const [barColor, setBarColor] = useState('green');
  const [lim, setLim] = useState(props.lim);
  const [data, setData] = useState(props.data);



  useEffect(()=>{
    const handleColor = (params) => {
      setData(params);
      if(data >= lim) {
        setBarColor('red');
      }else {
        setBarColor('green');
      }
      return
    };
    handleColor(props.data)}, [props.data, data, lim])
  useEffect(()=>{setLim(props.lim)}, [props.lim])

  return (
    <div className={classes.root}>
      <Box display='flex' flexDirection='reverse' className={classes.box}>
        <Box className={classes.bar} style={{backgroundColor: barColor}} height={data}>

        </Box>
      </Box>
    </div>
  );
}

export default BarGraph;

/*
manual de instalacao
manual de teste
manual de usuario

pode ser em formato de video

no dia da feira alguem estar presente com o professor

06/11 - ultima revisao 14-14:30
*/