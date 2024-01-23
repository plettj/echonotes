import React from 'react';
import { AppBar, Toolbar, Tab, Tabs } from '@mui/material';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs>
          <Tab component={NavLink} to="/" label="Home" />
          <Tab component={NavLink} to="/about" label="About" />
          <Tab component={NavLink} to="/beta" label="Beta" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;