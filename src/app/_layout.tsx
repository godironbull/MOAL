import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    // Desafio de Layout: Tente adicionar 'screenOptions' na tag Stack abaixo para mudar a cor do cabeçalho de todas as telas!
    // Dica: <Stack screenOptions={{ headerStyle: { backgroundColor: '#1E1E1E' }, headerTintColor: '#fff' }}>
    <Stack>
      {/* Desafio: Mude o nome do título do cabeçalho desta tela (options={{ title: 'Início' }}) */}
      <Stack.Screen name="index" options={{ title: 'CASA' }} />
      {/* Desafio: Mude o título desta tela para algo melhor, ex: 'Sobre Mim' */}
      <Stack.Screen name="sobre" options={{ title: 'Tristeza' }} />
    </Stack>
  );
}
