import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';

// NavigationContainer wraps the whole app and manages navigation state
import { NavigationContainer } from '@react-navigation/native';
// createNativeStackNavigator builds a stack-based navigator using native transitions
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={PlayerScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PlayerScreen({ navigation }: any){
    const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tic-Tac-Toe!</Text>

      <TextInput
        placeholder="Player 1 Name"
        value={player1}
        onChangeText={setPlayer1}
        style={styles.input}
      />
      <TextInput
      placeholder="Player 2 Name"
        value={player2}
        onChangeText={setPlayer2}
        style={styles.input}
      />

      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Game', {player1: player1, player2: player2})}
      />
    </View>
  );
}
function GameScreen({ navigation, route} : any){
  const { player1, player2 } = route.params; 
  const [player1Turn, setPlayer1Turn] = useState<boolean>(true);

  
  const [block1, setBlock1] = useState<number>(0);
  const [block2, setBlock2] = useState<number>(0);
  const [block3, setBlock3] = useState<number>(0);
  const [block4, setBlock4] = useState<number>(0);
  const [block5, setBlock5] = useState<number>(0);
  const [block6, setBlock6] = useState<number>(0);
  const [block7, setBlock7] = useState<number>(0);
  const [block8, setBlock8] = useState<number>(0);
  const [block9, setBlock9] = useState<number>(0);
  const contentFor = (block: number): string => {
    switch (block) {
      case 1:
        return 'X';
      case 2:
        return 'O';
      default:
        return '';
    }
  };

   // Checks all 8 possible winning lines: 3 rows, 3 columns, 2 diagonals
  let winner: number = 0;
  if (block1 > 0 && block1 === block2 && block2 === block3) winner = block1;
  if (block4 > 0 && block4 === block5 && block5 === block6) winner = block4;
  if (block7 > 0 && block7 === block8 && block8 === block9) winner = block7;
  if (block1 > 0 && block1 === block4 && block4 === block7) winner = block1;
  if (block2 > 0 && block2 === block5 && block5 === block8) winner = block2;
  if (block3 > 0 && block3 === block6 && block6 === block9) winner = block3;
  if (block1 > 0 && block1 === block5 && block5 === block9) winner = block1;
  if (block3 > 0 && block3 === block5 && block5 === block7) winner = block3;

  const handlePress = (index: number) => {
    if (winner !== 0) return; // stop game after winner is chosen


if (index === 0) {
      player1Turn ? setBlock1(1) : setBlock1(2);
    }

    if (index === 1) {
      player1Turn ? setBlock2(1) : setBlock2(2);
    }

    if (index === 2) {
      player1Turn ? setBlock3(1) : setBlock3(2);
    }

    if (index === 3) {
      player1Turn ? setBlock4(1) : setBlock4(2);
    }

    if (index === 4) {
      player1Turn ? setBlock5(1) : setBlock5(2);
    }
    
    if (index === 5) {
      player1Turn ? setBlock6(1) : setBlock6(2);
    }

    if (index === 6) {
      player1Turn ? setBlock7(1) : setBlock7(2);
    }

    if (index === 7) {
      player1Turn ? setBlock8(1) : setBlock8(2);
    }
    
    if (index === 8) {
      player1Turn ? setBlock9(1) : setBlock9(2);
    }
    