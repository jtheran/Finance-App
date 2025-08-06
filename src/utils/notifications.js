import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

export async function registerForPushNotificationsAsync() {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Permiso de notificaciones denegado');
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
  } else {
    alert('Debes usar un dispositivo físico para recibir notificaciones');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export async function sendLocalNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: { extraData: 'info' },
    },
    trigger: null,
  });
}
