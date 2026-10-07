import { Link } from 'expo-router';
// Desafio Dinâmico 1: Para criar interatividade, precisamos importar o 'useState' do 'react'. 
// Escreva: import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'; 
// Desafio Dinâmico 2: Adicione o componente 'Pressable' no import do 'react-native' acima, junto com View e Text.

export default function Index() {
  // Desafio Dinâmico 3: Crie aqui uma variável de estado para guardar o número de cliques.
  // Exemplo: const [cliques, setCliques] = useState(0);

  return (
    // <View> é como se fosse uma "caixa" invisível que guarda outros componentes.
    // Tente mudar a cor de fundo (backgroundColor) lá em baixo no StyleSheet!
    <View style={styles.container}>
      
      {/* <Text> é o componente usado para mostrar textos na tela.
          Desafio: Mude o texto abaixo para algo sobre você! */}
      <Text style={styles.text}>Minha vida é uma comédia romântica, mas sem a parte romântica e comédia só para os outros.</Text>
      
      {/* 
        Desafio Dinâmico 4: Crie abaixo um botão <Pressable>. 
        Use onPress={() => setCliques(cliques + 1)} para ele somar cliques toda vez que for pressionado.
        Dentro do Pressable, coloque um <Text> mostrando a palavra "Cliques:" e o valor da variável {cliques}! 
      */}

      {/* <Link> é usado para navegar entre telas (rotas) no Expo Router.
          O href="/sobre" diz para qual tela vamos ao clicar.
          Desafio: Que tal mudar o texto de "Sair de casa" para "Ir para a tela Sobre"? */}
      <Link href="/sobre" style={styles.button}>
        Sair de casa
      </Link>
    </View>
  );
}

// StyleSheet é onde guardamos todos os "estilos" do nosso App, parecido com CSS na web.
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
    // Desafio: Troque a cor hexadecimal abaixo por uma cor de sua preferência (ex: '#ff0000' para vermelho, ou 'lightblue')
    backgroundColor: '#25292e',
    alignItems: 'center', // Centraliza os itens na horizontal
    justifyContent: 'center', // Centraliza os itens na vertical
  },
  text: {
    // Desafio: Tente aumentar o tamanho do texto adicionando: fontSize: 24
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginTop: 20, // Adicionando uma margem no topo para desgrudar do texto
  },
  // Desafio Dinâmico 5: Crie aqui um estilo chamado 'actionButton' para embelezar o seu <Pressable>.
  // Exemplo: coloque backgroundColor: 'yellow', padding: 15, borderRadius: 10.
});

