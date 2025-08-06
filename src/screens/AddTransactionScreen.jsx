import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { saveTransaction } from '../storage/storage';

export default function AddTransactionScreen({ navigation }) {
  const [amount, setAmount] = useState('');

  const handleAddTransaction = async (type) => {
    if (!amount || isNaN(amount)) {
      alert("Por favor, ingresa una cantidad válida");
      return;
    }

    // Guardar la transacción
    await saveTransaction({
      type,
      amount: type === 'Gasto' ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount)),
      date: new Date().toISOString()
    });

    // Limpiar campo y regresar
    setAmount('');
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant="titleLarge" style={{ marginBottom: 10 }}>
        Nueva transacción
      </Text>
      <TextInput
        label="Cantidad"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={{ marginBottom: 20 }}
      />
      <Button
        mode="contained"
        onPress={() => handleAddTransaction('Ingreso')}
        style={{ marginBottom: 10 }}
      >
        Agregar Ingreso
      </Button>
      <Button
        mode="outlined"
        onPress={() => handleAddTransaction('Gasto')}
      >
        Agregar Gasto
      </Button>
    </View>
  );
}
