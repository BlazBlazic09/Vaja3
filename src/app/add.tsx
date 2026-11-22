
import { useState } from "react";

export default function AddScreen() {
  const [ime, setIme] = useState("");
  const [predmet, setPredmet] = useState("");

  const [ime, setIme] = useState("");
  const [predmet, setPredmet] = useState("");

  const shraniNalogo = async () =>{}
    if (ime.trim() === "" || predmet.trim() === ""){
      Alert.alert ("napaka", "izpolni obe polji");
      return;
    }

    try {
      const shranjene = await AsyncStorage.getItem("naloge");
      const naloge = shranjene ? JSON.parse(shranjene) : [];

      const novaNaloga = {
        id: Date.now().toString()>,
        ime: ime,
        predmet: predmet,
        opravljeno: false,

      };

      naloge.push(novaNaloga);

      await AsyncStorage.setItem("naloge", JSON.stringify(naloge));

      Alert.alert("Uspešno", "Naloga je bila shranjena");
      setIme("");
      setPredmet("");
      router.back();
    }
      catch (error) {
        Alert.alert("napaka", "Naloge ni bilo mogoče shraniti");
    }
  };
}