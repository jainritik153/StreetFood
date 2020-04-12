

import React, { useState } from "react";

import MapView, { Marker } from "react-native-maps";

function MapScreen (){
  const [region, setRegion] = useState({
    latitude: 19.380775,
    longitude: 72.829487,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });

  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={region => setRegion(region)}
    >
      <Marker coordinate={{ latitude: 19.380775, longitude: 72.829487 }} />
    </MapView>
  );
};

export default MapScreen;
