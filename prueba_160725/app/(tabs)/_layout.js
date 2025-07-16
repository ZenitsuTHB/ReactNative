import { Tabs } from 'expo-router/tabs';

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Consejo aleatorio',
          tabBarLabel: 'Aleatorio',
        }}
      />
      <Tabs.Screen
        name="advice-by-id"
        options={{
          title: 'Consejo por ID',
          tabBarLabel: 'Por ID',
        }}
      />
    </Tabs>
  );
}