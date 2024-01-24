import React from 'react';
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const tabNameToIndex = {
    '/': 0,
    '/about': 1,
    '/beta': 2,
  };
  const currentPath = tabNameToIndex[location.pathname];

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={currentPath}>
          <Tab label="Home" component={NavLink} to="/" />
          <Tab label="About" component={NavLink} to="/about" />
          <Tab label="Beta" component={NavLink} to="/beta" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;