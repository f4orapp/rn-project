import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="browser" options={{ headerShown: false }} />
    </Stack>
  );
}
