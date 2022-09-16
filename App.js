import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './component/home-page';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage></HomePage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
