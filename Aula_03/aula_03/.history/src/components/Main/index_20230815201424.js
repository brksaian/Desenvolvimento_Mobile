import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Form from '../Form';

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
        <View style={styles.container}>
            <Form/>
        </View>
    );
}