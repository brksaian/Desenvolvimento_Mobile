import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Text, View } from "react-native";

export default function Media() {
  const [media_1, setMedia_1] = useState("");
  const [media_2, setMedia_2] = useState("");
  const [mediaFinal, setMediaFinal] = useState("");

  function mediaFinalCalculator() {
    let m1 = parseFloat(media_1);
    let m2 = parseFloat(media_2);
    let mf = (m1 + m2) / 2;
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
    <View style={styles.container}>
      <Text style={styles.title}>Média</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {mediaFinal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
