import React, { useState } from "react";
import {
  TextInput,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import { Text, View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";

export default function Galeria() {
  const [image, setImage] = useState<string>("");
  const [galeria, setGaleria] = useState<string[]>([]);
  const [id, getId] = useState<number>(0);

  function appendImage() {
    if (image != "" || image != null) {
      setGaleria((prevFts) => [...prevFts, image]);
    }
  }

  function gerarId(): string {
    getId(id + 1);
    return id.toString();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de imagens</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Insira a imagem</Text>
      <TextInput
        value={image}
        keyboardType="numeric"
        placeholder="Insira a url da imagem"
        onChangeText={setImage}
      />
      <Button title="Adicionar imagem" onPress={() => appendImage()} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {galeria.map((image, index) => (
          <Image
            key={index}
            style={styles.image}
            source={{ uri: image }}
            resizeMode="contain" // Ajusta a imagem para caber no espaço
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width / 3, // 1/3 da largura da tela
    height: Dimensions.get("window").height / 3, // 1/3 da altura da tela
    margin: 2, // Espaçamento entre as imagens
  },
});