import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

import ResultImc from "../result";

export default function Form() {
  const [media_1, setMedia_1] = useState(null);
  const [media_2, setMedia_2] = useState(null);
  const [mediaFinal, setMediaFinal] = useState(null);

  function mediaFinalCalculator() {
    let mf = (media_2 + media_1) / 2;
    setMediaFinal(mf);
  }

  function validationMediaFinal() {
    if (!media_2 !== null && media_1 !== null) {
      mediaFinalCalculator();
      resetInput();
    } else {
      setMediaFinal(null);
    }
  }

  function resetInput() {
    setMedia_1(null);
    setMedia_2(null);
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
      <Text>Media 2</Text>
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
      <ResultImc mediaFinal={media_1} />
      <ResultImc mediaFinal={media_2} />
      <ResultImc mediaFinal={mediaFinal} />
    </View>
  );
}