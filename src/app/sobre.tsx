import { StyleSheet, Text, View } from 'react-native';

// Este é o componente da nossa segunda tela! 
// Ele é carregado quando clicamos no Link da tela inicial.
export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* Desafio: Altere esta frase para contar um pouco sobre você */}
      <Text style={styles.text}>Arrependimento de sair de casa</Text>
      
      {/* 
        Desafio Extra: 
        Que tal importar o componente "Link" do 'expo-router' lá no topo,
        assim como fizemos na tela index, e adicionar um botão para voltar pra Home?
        Dica: O href da tela inicial é apenas "/"
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Desafio: Use uma cor diferente da tela inicial para percebermos a mudança de telas!
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    // Desafio: Tente colocar fonte em negrito usando: fontWeight: 'bold'
  },
});
