import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export default function App () {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation
         initialRegion={{
         latitude: 19.380775, 
         longitude: 72.829487,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421}}
      />
    );
  
}

