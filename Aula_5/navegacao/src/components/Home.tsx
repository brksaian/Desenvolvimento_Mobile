// HomeScreen.tsx
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Galeria")}
      />
    </View>
  );
};

export default HomeScreen;
