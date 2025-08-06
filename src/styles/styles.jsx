import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#A4FF00', // Verde limón
  background: '#FFFFFF', // Blanco
  text: '#000000', // Negro
  secondaryText: '#555555',
  buttonText: '#FFFFFF',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    marginTop: 15,
    color: '#2196F3',
    textAlign: 'center',
  },
});
