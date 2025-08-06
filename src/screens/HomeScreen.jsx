import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import { getTransactions } from '../storage/storage';
import FinanceChart from '../components/FinanceChart';

export default function HomeScreen({ navigation }) {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };
    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation]);

 const total = transactions.reduce((acc, t) => acc + t.amount, 0);


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card style={{ marginBottom: 20 }}>
        <Card.Content>
          <Text variant="titleLarge">💰 Saldo actual</Text>
          <Text variant="headlineMedium">${total}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Agregar')}
        style={{ marginBottom: 20 }}
      >
        Agregar Movimiento
      </Button>

      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text
                variant="titleMedium"
                style={{ color: item.type === 'Gasto' ? 'red' : 'green' }}
              >
                {item.type}: ${Math.abs(item.amount)}
              </Text>
              <Text style={{ fontSize: 12, color: '#555' }}>
                {new Date(item.date).toLocaleString()}
              </Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
