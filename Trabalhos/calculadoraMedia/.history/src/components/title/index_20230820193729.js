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
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  const msg = imc ? "Seu imc é igual:" : "Preencha o peso e altura";
  const txtButton = imc ? "Calcular Novamente" : "Calcular";

  function imcCalculator() {
    let heightFormat = height.replace(",", ".");
    let totalImc = (weight / (height * heightFormat)).toFixed(2);
    const miliSeconds = new Date().getTime();
    setImcList((array) => [...array, { id: miliSeconds, imc: totalImc }]);
    setImc(totalImc);
  }

  function verificationImc() {
    if (imc === null) {
      Vibration.vibrate();
      setErrorMessage("Campo Obrigatório*");
    }
  }

  function validationImc() {
    if (!weight !== null && height !== null) {
      imcCalculator();
      resetInput();
    } else {
      verificationImc();
      setImc(null);
    }
  }

  function resetInput() {
    setHeight(null);
    setWeight(null);
    setErrorMessage(null);
  }

  return (
    <View>
      <Text>Altura</Text>
      {errorMessage && <Text>{errorMessage}</Text>}
      <TextInput
        value={height}
        keyboardType="numeric"
        placeholder="Ex. 1.75"
        onChangeText={setHeight}
      />

      <Text>Peso</Text>
      {errorMessage && <Text>{errorMessage}</Text>}

      <TextInput
        value={weight}
        keyboardType="numeric"
        placeholder="Ex. 75.365"
        onChangeText={setWeight}
      />

      <Button title="Calcular IMC" onPress={() => validationImc()} />

      <FlatList
        data={imcList.reverse()}
        renderItem={({ item }) => {
          return (
            <Text>
              <Text> Resultado do Imc = </Text>
              {item.imc}
            </Text>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
