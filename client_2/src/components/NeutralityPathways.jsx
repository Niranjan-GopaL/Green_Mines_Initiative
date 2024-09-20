import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const NeutralityPathways = () => {
  const [strategies, setStrategies] = useState({
    electricVehicles: 0,
    afforestation: 0,
    renewableEnergy: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStrategies({
      ...strategies,
      [name]: parseFloat(value) || 0,
    });
  };

  const totalImpact = Object.values(strategies).reduce((acc, strategy) => acc + strategy, 0);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Carbon Neutrality Pathways</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        <TextField label="Electric Vehicles Impact (tons CO2)" name="electricVehicles" variant="outlined" onChange={handleChange} />
        <TextField label="Afforestation Impact (tons CO2)" name="afforestation" variant="outlined" onChange={handleChange} />
        <TextField label="Renewable Energy Impact (tons CO2)" name="renewableEnergy" variant="outlined" onChange={handleChange} />
      </Box>
      <Typography variant="h6" gutterBottom>Total Impact from Strategies: {totalImpact} tons CO2</Typography>
    </Box>
  );
};

export default NeutralityPathways;












// // NeutralityPathways.jsx
// import React from 'react';

// const NeutralityPathways = () => {
//   return (
//     <div>
//       <h2>Carbon Neutrality Pathways</h2>
//       <p>Simulate emission reduction strategies like electric vehicles, afforestation, renewable energy use.</p>
//     </div>
//   );
// };

// export default NeutralityPathways;
