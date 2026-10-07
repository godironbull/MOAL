# 🚀 Material de Apoio: Desafios React Native

Bem-vindo(a) ao seu primeiro projeto React Native com Expo! Se você travou em algum dos desafios que deixamos no código, não se preocupe. Este guia foi feito para te ajudar a entender os conceitos por trás de cada tarefa.

---

## 1. O básico: View, Text e StyleSheet
No React Native, não usamos `<div>` ou `<p>` como na web (HTML). Nós usamos componentes nativos:

- **`<View>`**: É a "caixa" invisível. Usada para agrupar outros componentes (como uma `div`).
- **`<Text>`**: Qualquer texto que você quiser mostrar na tela **precisa** estar dentro de um `<Text>`.
- **`StyleSheet`**: É a forma como damos estilo (cores, margens, tamanhos). Funciona de forma muito parecida com o CSS.

**Dica para os desafios de Cor e Fonte:**
No arquivo `index.tsx`, para mudar o tamanho da fonte ou a cor de fundo, você só precisa ir lá embaixo na seção `const styles` e modificar as propriedades.
```javascript
// Exemplo de como aumentar o texto e mudar a cor:
text: {
  color: '#fff', 
  fontSize: 24, // <-- Adicionando tamanho da fonte!
  fontWeight: 'bold', // <-- Deixando em negrito!
}
```

---

## 2. Navegação com Expo Router (Link)
Para ir de uma tela para a outra no Expo, nós importamos o componente `<Link>` do `expo-router`.
A propriedade `href` diz para qual arquivo o botão vai te levar.

- `href="/sobre"`: Leva para o arquivo `sobre.tsx`.
- `href="/"`: Leva de volta para a tela inicial (`index.tsx`).

**Como resolver o Desafio Extra do `sobre.tsx`:**
1. Importe o Link no topo do arquivo: `import { Link } from 'expo-router';`
2. Adicione o componente embaixo do seu texto, dentro da View:
```javascript
<Link href="/" style={styles.button}>
   Voltar para o Início
</Link>
```

---

## 3. Dinamismo com `useState` (O Botão de Cliques)
Aqui é onde a mágica do React acontece! O `useState` é uma função que permite que o nosso aplicativo "lembre" de informações e atualize a tela sempre que essa informação mudar.

**Passo a passo para o Desafio Dinâmico no `index.tsx`:**

**Passo 1: As importações**
Precisamos trazer as ferramentas certas. No topo do arquivo:
```javascript
import { useState } from 'react'; // Para criar o estado
import { StyleSheet, Text, View, Pressable } from 'react-native'; // Adicionamos o Pressable
```
*Obs: O `<Pressable>` é um componente do React Native feito especialmente para criar botões que detectam toques na tela.*

**Passo 2: Criando o Estado**
Logo abaixo de `export default function Index() {`, vamos criar a memória do botão:
```javascript
const [cliques, setCliques] = useState(0);
```
- `cliques`: é a variável que guarda o número (começa em `0`).
- `setCliques`: é a função que usamos para mudar o valor do número.

**Passo 3: Criando o Botão**
Dentro da sua `<View>`, vamos colocar o botão:
```javascript
<Pressable 
   style={styles.actionButton} 
   onPress={() => setCliques(cliques + 1)}
>
   <Text>Cliques: {cliques}</Text>
</Pressable>
```
Quando o `onPress` é ativado (quando alguém clica), ele pega o valor atual de `cliques`, soma `+ 1` e guarda de novo. A tela se atualiza sozinha!

---

## 4. Estilizando o Cabeçalho (O Layout)
O arquivo `_layout.tsx` dita as regras globais do aplicativo, como aquela barra de título no topo de todas as telas.

Para resolver o desafio e colocar uma cor de fundo na barra superior, basta adicionar `screenOptions` na tag `<Stack>`:

```javascript
<Stack
  screenOptions={{
    headerStyle: { backgroundColor: '#1E1E1E' }, // Fundo escuro
    headerTintColor: '#fff', // Texto do cabeçalho branco
    headerTitleStyle: { fontWeight: 'bold' }, // Título em negrito
  }}
>
  <Stack.Screen name="index" options={{ title: 'Início' }} />
  <Stack.Screen name="sobre" options={{ title: 'Sobre Mim' }} />
</Stack>
```

Boa sorte com a programação e divirta-se! 🎉
