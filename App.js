import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  const handleTextPress = () => console.log('text pressed');
  const handleButtonPress = () => Alert.alert('Name of window', 'Main message', [
    {text: 'yes', onPress: () => console.log('Yes button')},
    {text: 'cancel', onPress: () => console.log('Cancel button')}
  ]);

  return (
// {'/n'} перевод строки
    <View style={styles.container}>
      <Text></Text>
      <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hello!!</Text>
      <Button title='Нажми на меня' color='red' onPress={handleButtonPress}/>
      <TouchableWithoutFeedback onPress={handleButtonPress}>
        <Image blurRadius={1} source={{
          width: 200,
          height: 150,
          uri: "https://avatars.githubusercontent.com/u/37043482"
        }}/>
      </TouchableWithoutFeedback>
    <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red',
  },
});
