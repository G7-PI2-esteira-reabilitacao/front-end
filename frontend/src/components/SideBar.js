import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import TrendingUpIcon from '@material-ui/icons/TrendingUp'; 
import { Link } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

function SideBar(props) {
  const classes = useStyles();

  const resolveLink = (texto) => {
    switch (texto) {
      case 'Pacientes':
        return '/patients'
      case 'Novo Cadastro':
        return '/registration'
      case 'Relatório de Desempenho':
        return '/aftersession'
      default:
        return '/';
    }
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        open={props.side}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Início', 'Pacientes', 'Novo Cadastro'].map((text, index) => (
              <Link underline='none' href={resolveLink(text)} className={classes.link} >
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <PeopleIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List>
            {['Relatório de Desempenho'].map((text, index) => (
              <Link underline='none' href={resolveLink(text)} className={classes.link} >
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <TrendingUpIcon /> : <HomeIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;