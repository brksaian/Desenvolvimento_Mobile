import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

import { Text, View } from '../../components/Themed';
import { FlatList } from "react-native-gesture-handler";

export default function Home2() {
  const [color, setColor] = useState("");

    function geraCor() {
        let r: number = Math.floor(Math.random() * 255);
        let g: number = Math.floor(Math.random() * 255);
        let b: number = Math.floor(Math.random() * 255);
      let cor: string = `rgb(${r},${g},${b})`;
      alert(color)
        setColor(cor);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de cores</Text>
          <Text>Media 1</Text>
          <Button title="Gerar Cor" onPress={() => geraCor()} />
          <FlatList 
              data={color}
              keyExtractor={item => item}
              renderItem={({ item }) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: item }} />;
              }}
          />
          
          
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
    box: {
        width: 100,
        height: 100,
  }
});
