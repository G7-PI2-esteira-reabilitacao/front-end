/* eslint-disable react-hooks/rules-of-hooks */
import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    marginLeft: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  image: {
    width: '4%',
  }
}));

function barGraph(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleChange = () => {
    setAuth(!auth);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseMenu = () => {
    handleChange()
    handleClose();
  }

  const handleSide = () => {
    props.setSide(!props.side);
  }

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
  ];
  
  return (
    <div className={classes.root}>
      <Box>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
}

export default barGraph;