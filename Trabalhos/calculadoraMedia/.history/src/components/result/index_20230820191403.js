import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu imc hoje é: ${props.resultImc}`,
    });
    return result;
  };

  return (
    <View>
      <View>
        <Text>{props.message}</Text>

        <Text>{props.resultImc}</Text>

        <TouchableOpacity onPress={() => onShare()}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
