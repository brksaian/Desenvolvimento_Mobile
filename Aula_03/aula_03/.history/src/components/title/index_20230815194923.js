import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

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
            <Button title="Hello" />
        </View>
    );
}