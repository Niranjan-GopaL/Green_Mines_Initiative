import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();  // Hook to get current route

  // Style for the active tab
  const activeStyle = {
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left-aligned title */}
        <Typography variant="h6">
          Green India Initiative
        </Typography>
        
        {/* Right-aligned buttons */}
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/emission-estimation"
            sx={location.pathname === '/emission-estimation' ? activeStyle : null}
          >
            Emission Estimation
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/carbon-sinks"
            sx={location.pathname === '/carbon-sinks' ? activeStyle : null}
          >
            Carbon Sinks
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/neutrality-pathways"
            sx={location.pathname === '/neutrality-pathways' ? activeStyle : null}
          >
            Neutrality Pathways
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/visualization"
            sx={location.pathname === '/visualization' ? activeStyle : null}
          >
            Data Visualization
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/per-capita"
            sx={location.pathname === '/per-capita' ? activeStyle : null}
          >
            Per Capita
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;