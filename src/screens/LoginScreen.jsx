import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { globalStyles } from '../styles/styles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
    navigation.replace('Home');
  };

  return (
    <View style={globalStyles.container}>
      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={globalStyles.logo}
      />

      <Text style={globalStyles.title}>Iniciar Sesión</Text>

      <TextInput
        label="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={globalStyles.input}
      />
      <TextInput
        label="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={globalStyles.input}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={globalStyles.linkText}>
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>
    </View>
  );
}
