import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [ player1, setPlayer1 ] =useState<string>(" ");
  const [player2, setPlayer2 ] =useState<string>(" ");
  
  return (
    <View style={styles.container}>
     <text style={styles.title}>Welcome to Tic-Tac-Toe!</text>

     <TextInput
    placeholder='Player 1 Name'
    value={player1}
    onChangeText={setPlayer1}
    styles= {}
    />
     <TextInput
    placeholder='Player 1 Name'
    value={player1}
     onChangeText={setPlayer1}
     />
     ,<Button>
      title = "start game"
      onPress={() => console,log('Player1 ${player1}, Player2: ${player2})'}
     </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginVertical: 12, 
  };
  input: {
borderWidth: 1,
borderColor: #CCC'alignContent
paddingHorizontal: 12,
paddingVertical: 8.
marginVertical: 8,
width: "80%"


  },
});
