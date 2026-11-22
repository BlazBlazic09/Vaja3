
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type Naloga = {
    id: string;
    ime: string;
    predmet: string;
    opravljeno: boolean;
};

export default function ExploreScreen() {
    const [naloge, setNaloge] = useState<Naloga[]>([]);

    const naloziNaloge = async () => {
        try {
            const shranjene = await AsyncStorage.getItem("naloge");
            const podatki = shranjene ? JSON.parse(shranjene) : [];
            setNaloge(podatki);
        } catch(error) {
            console.log("napaka pri nalaganju nalog", error);
        }
    };

    const obrniOpravljeno = async (id: string) => {
        const noveNaloge = naloge.map((naloga) =>
            naloga.id === id ? { ...naloga, opravljeno: !naloga.opravljeno } : naloga
        );

        setNaloge(noveNaloge);
        await AsyncStorage.setItem("naloge", JSON.stringify(noveNaloge));
    };

    const izbrisiNalogo = async (id: string) => {
        const noveNaloge = naloge.filter((naloga) => naloga.id !== id);

        setNaloge(noveNaloge);
        await AsyncStorage.setItem("naloge", JSON.stringify(noveNaloge));
    };

    useFocusEffect(
        useCallback(() => {
            naloziNaloge();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.naslov}>Moje Naloge</Text>

            {naloge.map((naloga) => (
                <View key={naloga.id} style={styles.kartica}>
                    <Text style={[styles.ime, naloga.opravljeno && styles.opravljeno]}>
                        {naloga.ime}
                    </Text>

                    <Text style={styles.predmet}>
                        {naloga.predmet}
                    </Text>

                    <Button
                        title={naloga.opravljeno ? "Opravljeno" : "Označi kot opravljeno"}
                        onPress={() => obrniOpravljeno(naloga.id)}
                    />

                    <Button
                        title="Izbriši nalogo"
                        color="blue"
                        onPress={() => izbrisiNalogo(naloga.id)}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#000000", padding: 20,
    },
    naslov: {
        fontSize: 28, fontWeight: "bold", color: "#ffffff", marginTop: 50, marginBottom: 20,
    },
    kartica: {
        backgroundColor: "#ffffff", padding: 15, borderRadius: 10, marginBottom: 15,
    },
    ime: {
        fontSize: 18, fontWeight: "bold", color: "#000000",
    },
    predmet: {
        fontSize: 15, color: "#555555", marginTop: 5, marginBottom: 10,
    },
    opravljeno: {
        textDecorationLine: "line-through", color: "#888888",
    },
});
