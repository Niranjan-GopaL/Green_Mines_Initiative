import React, { useState, useRef } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const EmissionEstimation = () => {
  const [activities, setActivities] = useState({
    fuelConsumption: 0,
    electricityUsage: 0,
    methaneEmissions: 0,
    explosivesUsage: 0,
    transportationDistance: 0,
    coalProduction: 0,
    waterUsage: 0,
    landDisturbance: 0,
    wasteGeneration: 0,
    emissionsFromMachinery: 0,
    emissionsFromProcessing: 0,
    emissionsFromWasteDisposal: 0,
  });

  const fieldRefs = useRef([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivities({
      ...activities,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateEmissions = () => {
    const totalEmissions = Object.values(activities).reduce((acc, emission) => acc + emission, 0);
    return totalEmissions;
  };

  const handleKeyDown = (e, index, field) => {
    const totalFields = Object.keys(activities).length;
    const navigationKeys = { h: -1, l: 1, j: 3, k: -3 }; // Left, Right, Down, Up

    if (e.altKey && navigationKeys[e.key] !== undefined) {
      e.preventDefault();
      const newIndex = (index + navigationKeys[e.key] + totalFields) % totalFields; // Modulo for cyclic navigation
      fieldRefs.current[newIndex].focus();
    }
  };

  const renderTextField = (label, name, index) => (
    <TextField
      key={name}
      label={label}
      name={name}
      variant="outlined"
      fullWidth
      onChange={handleChange}
      inputRef={(el) => (fieldRefs.current[index] = el)}
      onKeyDown={(e) => handleKeyDown(e, index, name)}
    />
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Emission Estimation
      </Typography>

      {/* Box 1: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        {renderTextField('Fuel Consumption (tons)', 'fuelConsumption', 0)}
        {renderTextField('Electricity Usage (kWh)', 'electricityUsage', 1)}
        {renderTextField('Methane Emissions (tons)', 'methaneEmissions', 2)}
      </Box>

      {/* Box 2: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        {renderTextField('Explosives Usage (kg)', 'explosivesUsage', 3)}
        {renderTextField('Transportation Distance (km)', 'transportationDistance', 4)}
        {renderTextField('Coal Production (tons)', 'coalProduction', 5)}
      </Box>

      {/* Box 3: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        {renderTextField('Water Usage (liters)', 'waterUsage', 6)}
        {renderTextField('Land Disturbance (hectares)', 'landDisturbance', 7)}
        {renderTextField('Waste Generation (tons)', 'wasteGeneration', 8)}
      </Box>

      {/* Box 4: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        {renderTextField('Emissions from Machinery (tons)', 'emissionsFromMachinery', 9)}
        {renderTextField('Emissions from Processing (tons)', 'emissionsFromProcessing', 10)}
        {renderTextField('Emissions from Waste Disposal (tons)', 'emissionsFromWasteDisposal', 11)}
      </Box>

      <Typography variant="h6" gutterBottom>
        Total Emissions: {calculateEmissions()} tons
      </Typography>
    </Box>
  );
};

export default EmissionEstimation;