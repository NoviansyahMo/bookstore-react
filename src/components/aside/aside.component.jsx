import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../header/header.component';
import Navigation from '../navigation/navigation.component';
import {useStyles} from './aside.styles';

const Aside = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        open={open}
        handleDrawerOpen={handleDrawerOpen}/>
      <Navigation
        open={open}
        handleDrawerClose={handleDrawerClose}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Aside;
