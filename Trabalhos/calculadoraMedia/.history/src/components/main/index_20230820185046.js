import React from "react";
import { View } from "react-native";
import Form from "../title";
import ResultMedia from "../result";

export default function Main() {
  return (
    <View>
      <Form />
      <ResultMedia messageResultImc={12} resultImc={13} />
    </View>
  );
}
