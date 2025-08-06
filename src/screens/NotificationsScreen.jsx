import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import * as Notifications from 'expo-notifications';

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      setNotifications(prev => [notification, ...prev]);
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text variant="headlineMedium" style={{ marginBottom: 20 }}>
        Notificaciones
      </Text>
      <FlatList
        data={notifications}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, backgroundColor: '#f0f0f0', marginBottom: 10, borderRadius: 6 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.request.content.title}</Text>
            <Text>{item.request.content.body}</Text>
          </View>
        )}
      />
    </View>
  );
}
