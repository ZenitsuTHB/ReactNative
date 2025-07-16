import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

export default function RandomAdvice() {
  const [advice, setAdvice] = useState('Toca el botón para un consejo');
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const data = await res.json();
      if (!data.slip) throw new Error('Formato de respuesta inválido');

      setAdvice(data.slip.advice);
    } catch (error) {
      console.error('Fetch error:', error);
      setAdvice('Error al cargar. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consejo aleatorio</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00d4ff" />
      ) : (
        <Text style={styles.adviceText}>{advice}</Text>
      )}
      <Button
        title={loading ? "Cargando..." : "Obtener consejo"}
        onPress={fetchAdvice}
        disabled={loading}
        color="#00d4ff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#00d4ff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  adviceText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
});
