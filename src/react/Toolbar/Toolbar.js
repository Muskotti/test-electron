import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  IconButton,
  Toolbar,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = () => (
    <List component="nav">
      {['test'].map((text, index) => (
        <ListItem button key={text} component={Link} to={text}>
          <ListItemText primary="Trash" />
        </ListItem>
      ))}
    </List>
  )

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleDrawerOpen} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleDrawerClose}>
        <div style={{marginTop: 30}}>
          {list()}
        </div>
      </Drawer>
    </div>
  );
}
