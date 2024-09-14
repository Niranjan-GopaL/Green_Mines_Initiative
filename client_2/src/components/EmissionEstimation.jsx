// EmissionEstimation.jsx
import React, { useState } from 'react';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivities({
      ...activities,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateEmissions = () => {
    const totalEmissions =
      activities.fuelConsumption +
      activities.electricityUsage +
      activities.methaneEmissions +
      activities.explosivesUsage +
      activities.transportationDistance +
      activities.coalProduction +
      activities.waterUsage +
      activities.landDisturbance +
      activities.wasteGeneration +
      activities.emissionsFromMachinery +
      activities.emissionsFromProcessing +
      activities.emissionsFromWasteDisposal;
    return totalEmissions;
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Emission Estimation
      </Typography>

      {/* Box 1: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        <TextField
          label="Fuel Consumption (tons)"
          name="fuelConsumption"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Electricity Usage (kWh)"
          name="electricityUsage"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Methane Emissions (tons)"
          name="methaneEmissions"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Box>

      {/* Box 2: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        <TextField
          label="Explosives Usage (kg)"
          name="explosivesUsage"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Transportation Distance (km)"
          name="transportationDistance"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Coal Production (tons)"
          name="coalProduction"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Box>

      {/* Box 3: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        <TextField
          label="Water Usage (liters)"
          name="waterUsage"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Land Disturbance (hectares)"
          name="landDisturbance"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Waste Generation (tons)"
          name="wasteGeneration"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Box>

      {/* Box 4: 3 TextFields */}
      <Box display="flex" gap={2} marginBottom={2}>
        <TextField
          label="Emissions from Machinery (tons)"
          name="emissionsFromMachinery"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Emissions from Processing (tons)"
          name="emissionsFromProcessing"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          label="Emissions from Waste Disposal (tons)"
          name="emissionsFromWasteDisposal"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      </Box>

      <Typography variant="h6" gutterBottom>
        Total Emissions: {calculateEmissions()} tons
      </Typography>
    </Box>
  );
};

export default EmissionEstimation;
