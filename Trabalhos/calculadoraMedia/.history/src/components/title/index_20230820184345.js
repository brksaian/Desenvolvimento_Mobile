import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form() {
  return (
    //conteudo do formulario
    <View>
      <Text>Media 1</Text>
      <TextInput placeholder="Digite a primeira nota" keyboardType="numeric" />
      <Text>Media 2</Text>
      <TextInput placeholder="Digite a segunda nota" keyboardType="numeric" />

      <View></View>
      <View></View>
    </View>
  );
}
