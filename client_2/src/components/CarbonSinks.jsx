import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const CarbonSinks = () => {
  const [sinks, setSinks] = useState({
    afforestation: 0,
    soilSequestration: 0,
    otherSinks: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSinks({
      ...sinks,
      [name]: parseFloat(value) || 0,
    });
  };

  const totalSinks = Object.values(sinks).reduce((acc, sink) => acc + sink, 0);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Carbon Sink Estimation</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        <TextField label="Afforestation (tons CO2 sequestered)" name="afforestation" variant="outlined" onChange={handleChange} />
        <TextField label="Soil Sequestration (tons CO2 sequestered)" name="soilSequestration" variant="outlined" onChange={handleChange} />
        <TextField label="Other Sinks (tons CO2 sequestered)" name="otherSinks" variant="outlined" onChange={handleChange} />
      </Box>
      <Typography variant="h6" gutterBottom>Total Carbon Sinks: {totalSinks} tons CO2</Typography>
    </Box>
  );
};

export default CarbonSinks;









// // CarbonSinks.jsx
// import React from 'react';

// const CarbonSinks = () => {
//   // Here you can add inputs and logic to calculate carbon sink and compare with emissions
//   return (
//     <div>
//       <h2>Carbon Sink Estimation</h2>
//       <p>Calculate and estimate carbon sinks to understand the gap with emissions.</p>
//     </div>
//   );
// };

// export default CarbonSinks;
