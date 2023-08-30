import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

import { Text, View } from '../../components/Themed';

export default function Form() {
  const [color, setColor] = useState("");

    function geraCor() {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
        let cor: string = `rgb(${r},${g},${b})`;
        setColor(cor);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Média</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Media 1</Text>
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