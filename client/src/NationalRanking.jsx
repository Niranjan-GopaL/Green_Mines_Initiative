import React, { useState } from 'react';
import LiveMap from './LiveMap';

const coalMines = [
  { id: 1, name: 'Jharia', lat: 23.7553, lng: 86.4192 },
  { id: 2, name: 'Korba', lat: 22.3666, lng: 82.6915 },
  { id: 3, name: 'Raniganj', lat: 23.6317, lng: 87.1640 },
  // Add more mines later
];

const NationalRanking = () => {
  const [selectedMine, setSelectedMine] = useState(null);

  // Handle selection of a mine
  const handleMineSelect = (mine) => {
    setSelectedMine({ lat: mine.lat, lng: mine.lng });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Ranking Table */}
      <div style={{ width: '50%' }}>
        <h1>National Ranking - Coal Mines</h1>
        <table border="1" style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Mine Name</th>
            </tr>
          </thead>
          <tbody>
            {coalMines.map((mine, index) => (
              <tr key={mine.id} onClick={() => handleMineSelect(mine)}>
                <td>{index + 1}</td>
                <td>{mine.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Live Map */}
      <div style={{ width: '50%' }}>
        <LiveMap selectedLocation={selectedMine} />
      </div>
    </div>
  );
};

export default NationalRanking;