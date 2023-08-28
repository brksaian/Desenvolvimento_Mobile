import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function Form() {
  const [media_1, setMedia_1] = useState("");
  const [media_2, setMedia_2] = useState("");
  const [mediaFinal, setMediaFinal] = useState("");

  function mediaFinalCalculator() {
    let m1: number = parseFloat(media_1);
    let m2: number = parseFloat(media_2);
    let mf: number = (m1 + m2) / 2;
    setMediaFinal(mf.toFixed(2).toString());
  }

  function validationMediaFinal() {
    if (!media_2 !== null && media_1 !== null) {
      mediaFinalCalculator();
      resetInput();
    } else {
      setMediaFinal("");
    }
  }

  function resetInput() {
    setMedia_1("");
    setMedia_2("");
  }

  return (
    <View>
      <Text>Media 1</Text>
      <TextInput
        value={media_1}
        keyboardType="numeric"
        placeholder="Insira a primeira media"
        onChangeText={setMedia_1}
      />
      <Text>Media 2</Text>a
      <TextInput
        value={media_2}
        keyboardType="numeric"
        placeholder="Insira a segunda media"
        onChangeText={setMedia_2}
      />
      <Button
        title="Calcular Media Final"
        onPress={() => validationMediaFinal()}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {mediaFinal}
      </Text>
    </View>
  );
}
