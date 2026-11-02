import { StyleSheet, Text, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.naslov}>Dodaj novo nalogo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', padding: 20 },
  naslov: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginTop: 50 },
});