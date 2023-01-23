import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Pierce'
    const started = <Text style = { styles.textStyle }>Getting started with React Native!</Text>;
    const nameText = <Text style = { styles.subHeading }>My name is {name}</Text>;

    return ( 
        <View>
            {started}
            {nameText}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeading: {
        fontSize: 20
    }
});

export default ComponentsScreen;