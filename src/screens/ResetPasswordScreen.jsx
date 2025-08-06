import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function ResetPasswordScreen({ route, navigation }) {
  const { email } = route.params;
  const [otp, setOtp] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleResetPassword = () => {
    if (!otp || !newPass || !confirmPass) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (newPass !== confirmPass) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Llamada al backend para validar OTP y cambiar contraseña
    alert("Contraseña cambiada correctamente");
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text variant="titleLarge" style={{ marginBottom: 20 }}>
        Restablecer contraseña
      </Text>
      <TextInput
        label="Código OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Nueva contraseña"
        secureTextEntry
        value={newPass}
        onChangeText={setNewPass}
        style={{ marginBottom: 15 }}
      />
      <TextInput
        label="Confirmar contraseña"
        secureTextEntry
        value={confirmPass}
        onChangeText={setConfirmPass}
        style={{ marginBottom: 20 }}
      />
      <Button mode="contained" onPress={handleResetPassword}>
        Cambiar contraseña
      </Button>
    </View>
  );
}
