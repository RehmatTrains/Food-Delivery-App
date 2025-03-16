// src/components/MapComponent.jsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const MapComponent = ({ ngos }) => {
  const center = { lat: ngos[0]?.lat || 0, lng: ngos[0]?.lng || 0 };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {ngos.map(ngo => (
          ngo.lat && ngo.lng && (
            <Marker key={ngo.id} position={{ lat: ngo.lat, lng: ngo.lng }} />
          )
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
