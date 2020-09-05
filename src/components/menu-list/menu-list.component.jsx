import React from 'react';
import {Link} from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const MenuList = () => {
  return (
    <List>
      <Link to='/'>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link to='/book'>
        <ListItem button>
          <ListItemIcon>
            <MenuBookIcon/>
          </ListItemIcon>
          <ListItemText primary="Book" />
        </ListItem>
      </Link>
    </List>
  );
};

export default MenuList;
