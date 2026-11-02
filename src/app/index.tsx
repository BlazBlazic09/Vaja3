
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.naslov}>
        Eplaner
      </Text>

      <Text style={styles.podnaslov}>
        Dobrodosel v svojem planerju
      </Text>

      <Text style={styles.besedilo}>
        Spremljaj solske obveznosti tukaj.
      </Text>

      <Button
        title="Dodaj novo obveznost"
        onPress={() => alert("Tukaj bomo dodali nalogo!")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#000000', justifyContent: 'flex-start', alignItems: 'center'},
    naslov: { fontSize: 38, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#ffffff' },
    podnaslov: { fontSize: 20, textAlign: 'center', color: '#ffffff', marginBottom: 15 },
    besedilo: { fontSize: 20, textAlign: 'center', color: '#ffffff' },
});