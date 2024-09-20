import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const TotalEmissionsBox = styled(Box)({
  backgroundColor: '#000000', // dARK background color for emphasis
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  marginTop: '20px',
  textAlign: 'center',
});

const EmissionEstimation = () => {
  // State for each section
  const [efActivities, setEfActivities] = useState({
    fuelConsumption: 0,
    methaneEmissions: 0,
    explosivesUsage: 0,
    coalProduction: 0,
  });

  const [etActivities, setEtActivities] = useState({
    transportationDistance: 0,
    fuelConsumption: 0,
    emissionsFromMachinery: 0,
  });

  const [esActivities, setEsActivities] = useState({
    waterUsage: 0,
    electricityUsage: 0,
    emissionsFromProcessing: 0,
  });

  const [egActivities, setEgActivities] = useState({
    landDisturbance: 0,
    wasteGeneration: 0,
    emissionsFromWasteDisposal: 0,
  });

  const fieldRefs = useRef([]);

  const handleChange = (section, setSection) => (e) => {
    const { name, value } = e.target;
    setSection({
      ...section,
      [name]: parseFloat(value) || 0,
    });
  };

  const calculateEf = () => Object.values(efActivities).reduce((acc, emission) => acc + emission, 0);
  const calculateEt = () => Object.values(etActivities).reduce((acc, emission) => acc + emission, 0);
  const calculateEs = () => Object.values(esActivities).reduce((acc, emission) => acc + emission, 0);
  const calculateEg = () => Object.values(egActivities).reduce((acc, emission) => acc + emission, 0);

  const calculateTotalEmissions = () => {
    return calculateEf() + calculateEt() + calculateEs() + calculateEg();
  };

  const renderTextField = (label, name, section, setSection, index) => (
    <TextField
      label={label}
      key={name}
      name={name}
      variant="outlined"
      fullWidth
      onChange={handleChange(section, setSection)}
      inputRef={(el) => (fieldRefs.current[index] = el)}
    />
  );

  return (
    <Box>

        {/* Total Carbon Emissions Section */}
        <TotalEmissionsBox>
            <Typography variant="h4" gutterBottom>
            Total Carbon Emissions (E): {calculateTotalEmissions()} tons
            </Typography>
        </TotalEmissionsBox>

      <Typography variant="h4" gutterBottom>
        Carbon Emission Estimation
      </Typography>

      {/* Ef: Falling and Mining Coal */}
      <Typography variant="h6" gutterBottom>Ef: Falling and Mining Coal</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        {renderTextField('Fuel Consumption (tons)', 'fuelConsumption', efActivities, setEfActivities, 0)}
        {renderTextField('Methane Emissions (tons)', 'methaneEmissions', efActivities, setEfActivities, 1)}
        {renderTextField('Explosives Usage (kg)', 'explosivesUsage', efActivities, setEfActivities, 2)}
        {renderTextField('Coal Production (tons)', 'coalProduction', efActivities, setEfActivities, 3)}
      </Box>
      <Typography variant="h6" gutterBottom>
        Total Carbon Emissions (Ef): {calculateEf()} tons
      </Typography>

      {/* Et: Transporting Coal */}
      <Typography variant="h6" gutterBottom>Et: Transporting Coal</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        {renderTextField('Transportation Distance (km)', 'transportationDistance', etActivities, setEtActivities, 4)}
        {renderTextField('Fuel Consumption (tons)', 'fuelConsumption', etActivities, setEtActivities, 5)}
        {renderTextField('Emissions from Machinery (tons)', 'emissionsFromMachinery', etActivities, setEtActivities, 6)}
      </Box>
      <Typography variant="h6" gutterBottom>
        Total Carbon Emissions (Et): {calculateEt()} tons
      </Typography>

      {/* Es: Roof Support */}
      <Typography variant="h6" gutterBottom>Es: Roof Support</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        {renderTextField('Water Usage (liters)', 'waterUsage', esActivities, setEsActivities, 7)}
        {renderTextField('Electricity Usage (kWh)', 'electricityUsage', esActivities, setEsActivities, 8)}
        {renderTextField('Emissions from Processing (tons)', 'emissionsFromProcessing', esActivities, setEsActivities, 9)}
      </Box>
      <Typography variant="h6" gutterBottom>
        Total Carbon Emissions (Es): {calculateEs()} tons
      </Typography>

      {/* Eg: Gob Area Treatment */}
      <Typography variant="h6" gutterBottom>Eg: Gob Area Treatment</Typography>
      <Box display="flex" flexDirection="column" gap={2} marginBottom={2}>
        {renderTextField('Land Disturbance (hectares)', 'landDisturbance', egActivities, setEgActivities, 10)}
        {renderTextField('Waste Generation (tons)', 'wasteGeneration', egActivities, setEgActivities, 11)}
        {renderTextField('Emissions from Waste Disposal (tons)', 'emissionsFromWasteDisposal', egActivities, setEgActivities, 12)}
      </Box>
      <Typography variant="h6" gutterBottom>
        Total Carbon Emissions (Eg): {calculateEg()} tons
      </Typography>

    </Box>
  );
};

export default EmissionEstimation;



// import React, { useState, useRef } from 'react';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// const EmissionEstimation = () => {
//   const [activities, setActivities] = useState({
//     fuelConsumption: 0,
//     electricityUsage: 0,
//     methaneEmissions: 0,
//     explosivesUsage: 0,
//     transportationDistance: 0,
//     coalProduction: 0,
//     waterUsage: 0,
//     landDisturbance: 0,
//     wasteGeneration: 0,
//     emissionsFromMachinery: 0,
//     emissionsFromProcessing: 0,
//     emissionsFromWasteDisposal: 0,
//   });

//   const fieldRefs = useRef([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setActivities({
//       ...activities,
//       [name]: parseFloat(value) || 0,
//     });
//   };

//   const calculateEmissions = () => {
//     const totalEmissions = Object.values(activities).reduce((acc, emission) => acc + emission, 0);
//     return totalEmissions;
//   };

//   const handleKeyDown = (e, index, field) => {
//     const totalFields = Object.keys(activities).length;
//     const navigationKeys = { h: -1, l: 1, j: 3, k: -3 }; // Left, Right, Down, Up

//     if (e.altKey && navigationKeys[e.key] !== undefined) {
//       e.preventDefault();
//       const newIndex = (index + navigationKeys[e.key] + totalFields) % totalFields; // Modulo for cyclic navigation
//       fieldRefs.current[newIndex].focus();
//     }
//   };

//   const renderTextField = (label, name, index) => (
//     <TextField
//       label={label}
//       key={name}
//       name={name}
//       variant="outlined"
//       fullWidth
//       onChange={handleChange}
//       inputRef={(el) => (fieldRefs.current[index] = el)}
//       onKeyDown={(e) => handleKeyDown(e, index, name)}
//     />
//   );

//   return (
//     <Box>
//       <Typography variant="h4" gutterBottom>
//         Emission Estimation
//       </Typography>

//       {/* Box 1: 3 TextFields */}
//       <Box display="flex" gap={2} marginBottom={2}>
//         {renderTextField('Fuel Consumption (tons)', 'fuelConsumption', 0)}
//         {renderTextField('Electricity Usage (kWh)', 'electricityUsage', 1)}
//         {renderTextField('Methane Emissions (tons)', 'methaneEmissions', 2)}
//       </Box>

//       {/* Box 2: 3 TextFields */}
//       <Box display="flex" gap={2} marginBottom={2}>
//         {renderTextField('Explosives Usage (kg)', 'explosivesUsage', 3)}
//         {renderTextField('Transportation Distance (km)', 'transportationDistance', 4)}
//         {renderTextField('Coal Production (tons)', 'coalProduction', 5)}
//       </Box>

//       {/* Box 3: 3 TextFields */}
//       <Box display="flex" gap={2} marginBottom={2}>
//         {renderTextField('Water Usage (liters)', 'waterUsage', 6)}
//         {renderTextField('Land Disturbance (hectares)', 'landDisturbance', 7)}
//         {renderTextField('Waste Generation (tons)', 'wasteGeneration', 8)}
//       </Box>

//       {/* Box 4: 3 TextFields */}
//       <Box display="flex" gap={2} marginBottom={2}>
//         {renderTextField('Emissions from Machinery (tons)', 'emissionsFromMachinery', 9)}
//         {renderTextField('Emissions from Processing (tons)', 'emissionsFromProcessing', 10)}
//         {renderTextField('Emissions from Waste Disposal (tons)', 'emissionsFromWasteDisposal', 11)}
//       </Box>

//       <Typography variant="h6" gutterBottom>
//         Total Emissions: {calculateEmissions()} tons
//       </Typography>
//     </Box>
//   );
// };

// export default EmissionEstimation;