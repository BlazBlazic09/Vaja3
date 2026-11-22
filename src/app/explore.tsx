import {Text, View, Stylesheet},
import { Callback } from "@react-native-async-storage/async-storage/lib/typescript/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

export default function ExploreScreen() {
    const [naloge, setNaloge] = useState([]);

    useFocusEffect(
        useCallback(()) => {
            naloziNaloge();
        }, [])
    );

    const naloziNaloge = async () => {
        try {
            const shranjene = await AsyncStorage.getItem("naloge");
            const podatki = shranjene ? JSON.parse(shranjene) : [];
            setNaloge(podatki);
        }   catch(error) {
            console.log("napaka pri nalaganu nalog", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.naslov}>Moje Naloge</Text>

            {naloge.map((naloga) => (
                <View key={naloga.id} style={styles.kartica}>
                    <Text style={styles.ime}>{naloga.ime}</Text>
                    <Text style={styles.predmet}>{naloga.predmet}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#000000", padding: 20,
    }
    naslov: {
        fontsize: 28, fontWeight: "bold", color: "#ffffff", marginTop: 50, marginBottom: 20,
    }
    kartica: {
        backgroundColor: "#ffffff", padding: 15, borderRadius: 10, marginBottom: 15,
    }
    ime: {
    fontSize: 18, fontWeight: "bold", color: "#000000",
    }
    predmet: {
    fontSize: 15, color: "#555555", marginTop: 5,
  },
});