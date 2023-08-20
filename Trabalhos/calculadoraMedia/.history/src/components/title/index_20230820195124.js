import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
  Button,
} from "react-native";

import ResultImc from "../result";

export default function Form() {
  const [media_1, setMedia_1] = useState(null);
  const [media_2, setMedia_2] = useState(null);
  const [mediaFinal, setMediaFinal] = useState(null);

  function mediaFinalCalculator() {
    let media_1Format = media_1.replace(",", ".");
    let mediaFinal = (media_2 / (media_1 * media_1Format)).toFixed(2);
    const miliSeconds = new Date().getTime();
    setMediaFinal(mediaFinal);
  }

  function validationmediaFinal() {
    if (!media_2 !== null && media_1 !== null) {
      mediaFinalCalculator();
      resetInput();
    } else {
      verificationmediaFinal();
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
      <Button title="Calcular IMC" onPress={() => validationImc()} />
      <ResultImc messageResultImc={imc} />
    </View>
  );
}
