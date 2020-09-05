import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from '../menu-list/menu-list.component';
import {useStyles} from './navigation.styles';

const Navigation = ({open, handleDrawerClose}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}>
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {
        theme.direction === 'rtl' ?
        <ChevronRightIcon /> : <ChevronLeftIcon />
          }
        </IconButton>
      </div>
      <Divider />
      <MenuList/>
    </Drawer>
  );
};

export default Navigation;
