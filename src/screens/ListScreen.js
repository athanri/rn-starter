import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '43' },
        { name: 'Friend #2', age: '70' },
        { name: 'Friend #3', age: '56' },
        { name: 'Friend #4', age: '45' },
        { name: 'Friend #5', age: '25' },
        { name: 'Friend #6', age: '14' },
        { name: 'Friend #7', age: '11' },
        { name: 'Friend #8', age: '24' },
        { name: 'Friend #9', age: '34' }
    ];

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;