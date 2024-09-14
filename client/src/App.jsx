// import React from 'react';
// import DataLogger_2 from './DataLogger_2';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Data Logger</h1>
//       <DataLogger_2 />
//     </div>
//   );
// }

// export default App;


// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DataLogger_2 from './DataLogger_2';
import NationalRanking from './NationalRanking'; // Import the National Ranking component
import Navbar from './Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />  
        
        <Routes>
        {/* Default route redirects to Data Entry */}
          <Route path="/" element={<Navigate to="/data-entry" />} />

          <Route path="/data-entry" element={<><h1>Data Logger</h1><DataLogger_2 /></>} />
          <Route path="/national-ranking" element={<NationalRanking />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
