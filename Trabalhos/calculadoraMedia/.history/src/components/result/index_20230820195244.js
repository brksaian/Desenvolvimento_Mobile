import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";

export default function ResultImc(props) {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {props.mediaFinal}
      </Text>
    </View>
  );
}
