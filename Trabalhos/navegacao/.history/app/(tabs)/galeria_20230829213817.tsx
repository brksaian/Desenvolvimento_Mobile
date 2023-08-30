import React, { useState } from "react";
import { TextInput, Image, Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";

export default function Galeria() {
  const [image, setImage] = useState<string>("");
  const [galeria, setGaleria] = useState<string[]>([]);
  const [id, getId] = useState<number>(0);

  function appendImage() {
    if (image != "" || image != null) {
      alert(galeria);
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
      <FlatList
        data={galeria}
        horizontal={true}
        keyExtractor={gerarId()}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              source={{
                uri: item,
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  box: {
    width: 100,
    height: 100,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  image: {
    maxHeight: 100,
    maxWidth: 100,
    minHeight: 30,
    minWidth: 30,
  },
});
