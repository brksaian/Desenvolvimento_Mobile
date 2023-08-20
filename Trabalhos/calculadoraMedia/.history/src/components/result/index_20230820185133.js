import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function ResultMedia(props) {
  return (
    <View>
      <Text>{props.resultImc}</Text>
      <Text>{props.messageResultImc}</Text>
    </View>
  );
}
