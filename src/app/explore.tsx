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


}