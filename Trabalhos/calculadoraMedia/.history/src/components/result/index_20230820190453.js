import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ResultMedia(props) {
  function CalcularMedia(media1, media2) {
    alert((media1 + media2) / 2);
  }

  return (
    <View>
      <Text>{props.resultImc}</Text>
      <Text>{props.messageResultImc}</Text>
    </View>
  );
}

export function CalcularMedia(media1, media2) {
  return (media1 + media2) / 2;
}
