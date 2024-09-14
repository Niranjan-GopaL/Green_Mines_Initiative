import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Initial center point of the map => default to India
const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const LiveMap = ({ selectedLocation }) => {
  // The marker position for the selected mine location
  const [markerPosition, setMarkerPosition] = useState(center);

  // Update marker position when selectedLocation changes
  useCallback(() => {
    if (selectedLocation) {
      setMarkerPosition(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <LoadScript googleMapsApiKey="GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={markerPosition}
        zoom={6}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveMap;