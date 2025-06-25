import React, { useState } from 'react';
import { Text, View, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles'; // Asegúrate de que este archivo tenga estilos para input, item, etc.

export default function App() {
  const [txt, setTxt] = useState('');
  const [items, setItems] = useState(['Elemento 1', 'Elemento 2']);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const addItem = () => {
    if (txt.trim() !== '') {
      setItems([...items, txt.trim()]);
      setTxt('');
    }
  };

  // Al pulsar un ítem, abrimos el modal y guardamos el ítem en el estado
  const confirmDeleteItem = (item) => {
    setItemToDelete(item);
    setModalVisible(true);
  };

  const deleteItem = () => {
    setItems(items.filter(item => item !== itemToDelete));
    setModalVisible(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Escribe un nuevo elemento"
        value={txt}
        onChangeText={setTxt}
        style={styles.input}
      />

      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => confirmDeleteItem(item)}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            ¿Deseas eliminar "{itemToDelete}"?
          </Text>
          <View style={styles.modalButtons}>
            <Button title="Cancelar" onPress={cancelDelete} />
            <Button title="Eliminar" color="red" onPress={deleteItem} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
