import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainBlock}>
      <Text></Text>
      <View style={[styles.box, {backgroundColor: 'yellow', alignSelf: 'flex-start'}]}></View>
      <View style={[styles.box, {backgroundColor: 'red'}]}></View>
      <View style={[styles.box, {backgroundColor: 'green'}]}></View>
    </View>
  );
}

const simpleStyle = {backgroundColor: 'red', color: 'blue'};

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});
