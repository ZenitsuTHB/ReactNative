import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Pressable, FlatList } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import QuicksandRegular from './assets/fonts/Quicksand-VariableFont_wght.ttf'; // Verifica que la ruta esté bien
import { ActivityIndicator } from 'react-native'; // Para mostrar el spinner de carga
import Icon from 'react-native-vector-icons/Ionicons'; // Asegúrate de que esté correctamente instalado
import Modal from 'react-native-modal'; // Para manejar el modal
//import MapView from 'react-native-maps'; // Importar MapView
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';  // Necesario para trabajar con react-leaflet
import 'leaflet/dist/leaflet.css';  // Importante para que los mapas se rendericen correctamente

export default function App() {
  const [myText, setMyText] = useState('hello world');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal

  // Cargar la fuente
  const [fontsLoaded] = useFonts({ 'QuicksandRegular': QuicksandRegular });

  // Si las fuentes no están cargadas, mostrar el mensaje de carga
  return fontsLoaded ? (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TextInput onChangeText={text => setMyText(text)} style={{ backgroundColor: 'red' }} />
        <Text style={{ fontFamily: 'QuicksandRegular', fontSize: 18 }}>
          lksaagjsowjgojaosjgajsgjsogjaos`japsjgoàjspojg+aw'e0jgas+ga9wgas+pjog+asjga+s'jgas+jgasgjga+spgjos+gaj'sgja+s'gjas+gjasg`
        </Text>

        <Pressable onPress={() => alert('pulsado')} style={{
          backgroundColor: 'gray',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 3,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
        }}>
          <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'QuicksandRegular' }}>
            Aquí no debería poner la etiqueta Button
          </Text>
        </Pressable>

        <FlatList
          data={[{ name: 'Juan', age: 32 }, { name: 'Laura', age: 22 }]}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={item => item.name}
        />

        {/* Icono de Ionicons */}
        <Icon name="rocket" size={30} color="#900" />

        {/* Botón para abrir el modal */}
        <Pressable onPress={() => setModalVisible(true)} style={{
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
          borderRadius: 10,
          shadowColor: 'black',
          shadowOpacity: 0.5,
          elevation: 3,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 10,
        }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Mostrar Modal</Text>
        </Pressable>

        {/* Modal */}
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)} // Cerrar el modal al hacer click fuera
          style={{ justifyContent: 'center', alignItems: 'center' }} // Centrar el modal en la pantalla
        >
          <View style={{
            backgroundColor: 'white', // Fondo blanco para el modal
            padding: 20,
            borderRadius: 10,
            width: '80%', // Ajuste de tamaño
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>I am the modal content!</Text>
            <Pressable onPress={() => setModalVisible(false)} style={{
              marginTop: 10,
              backgroundColor: 'blue',
              padding: 10,
              borderRadius: 5,
            }}>
              <Text style={{ color: 'white' }}>Cerrar Modal</Text>
            </Pressable>
          </View>
        </Modal>

        {/* MapView Component */}
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

      </ScrollView>
    </SafeAreaView>
  ) : (
    // Si las fuentes no están cargadas, mostrar un mensaje de carga
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Cargando fuentes...</Text>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 300, // Ajusta la altura del mapa
    marginTop: 20,
  },
});
