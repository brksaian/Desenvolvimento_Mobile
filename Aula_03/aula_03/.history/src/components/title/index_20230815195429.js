import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});

export default function Title() {
    return (
        <View style={styles.container}>
            <Text>TItle funciona!!</Text>
        </View>
    );
}