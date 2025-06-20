import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';  // Necesario para trabajar con react-leaflet
import 'leaflet/dist/leaflet.css';  // Importante para que los mapas se rendericen correctamente

export default function App() {
  return (
    <View style={styles.container}>
      {/* Usamos MapContainer en lugar de MapView de react-native-maps */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={styles.map}>
        {/* TileLayer es el "fondo" del mapa */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Puedes añadir marcadores y popups */}
        <Marker position={[51.505, -0.09]}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </MapContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,  // Algo de espacio arriba para que el mapa no se pegue al borde superior
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
