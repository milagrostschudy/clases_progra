import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/Screen/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Probando Flatlist </Text>
      <ProductList/>
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
  texto:{
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold"
  }
});
