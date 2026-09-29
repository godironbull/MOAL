import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'CASA' }} />
      <Stack.Screen name="sobre" options={{ title: 'Tristeza' }} />
    </Stack>
  );
}
