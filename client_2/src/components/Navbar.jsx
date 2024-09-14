// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Green India Initiative
        </Typography>
        <Button color="inherit" component={Link} to="/emission-estimation">
          Emission Estimation
        </Button>
        <Button color="inherit" component={Link} to="/carbon-sinks">
          Carbon Sinks
        </Button>
        <Button color="inherit" component={Link} to="/neutrality-pathways">
          Neutrality Pathways
        </Button>
        <Button color="inherit" component={Link} to="/visualization">
          Data Visualization
        </Button>
        <Button color="inherit" component={Link} to="/per-capita">
          Per Capita
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;