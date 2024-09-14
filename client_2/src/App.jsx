import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';

import ThemeProvider from './style/ThemeProvider';
import ThemeToggle from './style/ThemeToggle';

import Navbar from './components/Navbar';
import EmissionEstimation from './components/EmissionEstimation';
import CarbonSinks from './components/CarbonSinks';
import NeutralityPathways from './components/NeutralityPathways';
import DataVisualization from './components/DataVisualization';
import PerCapitaEmissions from './components/PerCapitaEmissions';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Container>

          <Navbar />
          <ThemeToggle />
          
          <Routes>
            <Route path="/emission-estimation" element={<EmissionEstimation />} />
            <Route path="/carbon-sinks" element={<CarbonSinks />} />
            <Route path="/neutrality-pathways" element={<NeutralityPathways />} />
            <Route path="/visualization" element={<DataVisualization />} />
            <Route path="/per-capita" element={<PerCapitaEmissions />} />
          </Routes>

        </Container>
      </Router>
    </ThemeProvider>

  );
};

export default App;