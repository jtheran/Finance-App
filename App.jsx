import React, { useEffect, useRef, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './src/utils/notifications';
import AppNavigator from './src/AppNavigator';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

export default function App(){

  const [expoPushToken, setExpoPushToken] = useState('');
  const notificationListener = useRef();

   useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notificación recibida:', notification);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
    };
  }, []);

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}
