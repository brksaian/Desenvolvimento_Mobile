import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text: {
      color: "#ab2542",
      fontSize: 100,
    },
});

export default function Title() {
    return (
        <Text style={styles.text}>Title funciona!!</Text>
    );
}