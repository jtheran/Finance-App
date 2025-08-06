import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import AddTransactionScreen from './screens/AddTransactionScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Recuperar contraseña' }} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Restablecer contraseña' }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      <Stack.Screen name="Agregar" component={AddTransactionScreen} options={{ title: 'Agregar Transacción' }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notificaciones' }} />
    </Stack.Navigator>
  );
}
