import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Ingrese un correo válido");
      return;
    }
    // Llamada al backend para enviar código OTP por correo
    navigation.navigate('ResetPassword', { email });
  };

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 100, height: 100, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text variant="titleLarge" style={{ marginBottom: 20 }}>
        Recuperar contraseña
      </Text>
      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ marginBottom: 20 }}
      />
      <Button mode="contained" onPress={handleSendOTP}>
        Enviar código OTP
      </Button>
    </View>
  );
}
