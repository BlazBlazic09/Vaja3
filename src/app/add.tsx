import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.naslov}>Dodaj novo nalogo</Text>
      <TextInput
        placeholder="Vpiši ime naloge"
        placeholderTextColor="#888888"
        style={styles.vnos}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', padding: 20 },
  naslov: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginTop: 50 },
  vnos: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, marginTop: 25, fontSize: 16 },
});