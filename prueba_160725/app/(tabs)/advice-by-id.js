import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

export default function AdviceById() {
  const [id, setId] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAdviceById = async () => {
    const adviceId = id.trim();
    if (!adviceId.match(/^\d+$/)) {
      setAdvice('Por favor ingresa un ID válido (número).');
      return;
    }
    setLoading(true);
    setAdvice('');
    Keyboard.dismiss();

    try {
      const res = await fetch(`https://api.adviceslip.com/advice/${adviceId}`);
      if (res.status === 404) {
        setAdvice('No se encontró consejo con ese ID.');
      } else {
        const json = await res.json();
        if (json.slip && json.slip.advice) {
          setAdvice(json.slip.advice);
        } else {
          setAdvice('No se encontró consejo con ese ID.');
        }
      }
    } catch (error) {
      setAdvice('Error al obtener consejo 😓');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consejo por ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce ID del consejo"
        placeholderTextColor="#888"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <Button title="Obtener consejo aleatorio" onPress={fetchAdviceById} color="#00d4ff" />
      {loading ? (
        <ActivityIndicator size="large" color="#00d4ff" style={{ marginTop: 20 }} />
      ) : advice ? (
        <Text style={styles.adviceText}>{advice}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00d4ff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#00d4ff',
    padding: 10,
    borderRadius: 8,
    color: '#fff',
    marginBottom: 20,
  },
  adviceText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 30,
    textAlign: 'center',
  },
});
