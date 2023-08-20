import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form() {
  const [media1, setMedia1] = useState(null);
  const [media2, setMedia2] = useState(null);

  return (
    //conteudo do formulario
    <View>
      <Text>Media 1</Text>
      <TextInput
        placeholder="Digite a primeira nota"
        value={media1}
        onChange={setMedia1}
        keyboardType="numeric"
      />
      <Text>Media 2</Text>
      <TextInput
        placeholder="Digite a segunda nota"
        value={media2}
        onChange={setMedia2}
        keyboardType="numeric"
      />

      <Button title="Calcular Média final" />
      <Button title="Limpar" />

      <Text>Resultado</Text>
      <Text>IMC: </Text>
      <Text>Peso: </Text>
      <Text>Altura: </Text>
    </View>
  );
}
