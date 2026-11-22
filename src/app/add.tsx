
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
}