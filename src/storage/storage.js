import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'transactions';

// Obtener todas las transacciones
export const getTransactions = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    return [];
  }
};

// Guardar una transacción
export const saveTransaction = async (transaction) => {
  try {
    const transactions = await getTransactions();
    transactions.push(transaction);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  } catch (error) {
    console.error("Error al guardar transacción:", error);
  }
};

// Limpiar todas las transacciones (opcional)
export const clearTransactions = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error al limpiar transacciones:", error);
  }
};
