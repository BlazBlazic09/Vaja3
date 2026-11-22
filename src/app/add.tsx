import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddScreen() {
  const [imeNaloge, setImeNaloge] = useState("");
  const [predmet, setPredmet] = useState("");

  const shraniNalogo = async () =>{
    if (imeNaloge.trim() === "" || predmet.trim() === ""){
      Alert.alert ("napaka", "izpolni obe polji");
      return;
    }

    try {
      const shranjene = await AsyncStorage.getItem("naloge");
      const naloge = shranjene ? JSON.parse(shranjene) : [];

      const novaNaloga = {
        id: Date.now().toString(),
        ime: imeNaloge,
        predmet: predmet,
        opravljeno: false,

      };

      naloge.push(novaNaloga);

      await AsyncStorage.setItem("naloge", JSON.stringify(naloge));

      Alert.alert("Uspešno", "Naloga je bila shranjena");
      setImeNaloge("");
      setPredmet("");
      router.back();
    }
      catch (error) {
        Alert.alert("napaka", "Naloge ni bilo mogoče shraniti");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.naslov}>
        Dodaj novo nalogo
      </Text>

      <TextInput
        placeholder="Vpisi predmet"
        placeholderTextColor="#888888"
        style={styles.Vnos}
        value={predmet}
        onChangeText={setPredmet}
      />

      <TextInput
        placeholder="Vpiši ime naloge"
        placeholderTextColor="#888888"
        style={styles.Vnos}
        value={imeNaloge}
        onChangeText={setImeNaloge }
      />

      <Button
          title="ShraniNalogo"
          onPress={shraniNalogo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex:1, backgroundColor: "#000000", padding: 20},
  naslov: {fontSize: 28, fontWeight: "bold", color: "#ffffff", marginTop: 50},
  Vnos: {
    backgroundColor: "#ffffff", padding: 15, borderRadius: 10, marginTop: 25, fontSize: 16,
    },
});