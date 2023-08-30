import React, { useState, useEffect } from "react";
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

interface ImageDimensions {
  width: number;
  height: number;
  link: string;
}

export default function Galeria() {
  const [image, setImage] = useState<string>("");
  const [galeria, setGaleria] = useState<ImageDimensions[]>([]);
  const [id, getId] = useState<number>(0);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    async function fetchImageSize() {
      if (image !== "") {
        try {
          Image.getSize(image, (width, height) => {
            setImageDimensions({ width, height });
          });
        } catch (error) {
          console.error("Erro ao obter as dimensões da imagem:", error);
        }
      }
    }

    fetchImageSize();
  }, [image]);

  function appendImage() {
    if (image != "" || image != null) {
      setGaleria((prevFts) => [...prevFts, image]);
    }
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
            style={{
              width: imageDimensions.width * 0.6,
              height: imageDimensions.height * 0.6,
              margin: 2,
            }}
            source={{ uri: image }}
            resizeMode="contain"
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
});
