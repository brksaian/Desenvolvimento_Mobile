import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar} from "react-native";
import Media from "./src/app/components/media";

const data = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Media",
        component: <Media />,
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Item 2",
        component: <Media />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Item 3",
        component: <Media />,
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

const Home2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => { <Item title={item.title}></Item> }}
                keyExtractor={item.id}
            />
        </SafeAreaView>
    )
}