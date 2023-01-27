import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button   
        style={styles.margin}
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button 
        style={styles.margin}
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button 
        style={styles.margin} 
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  margin: {
    padding: 5,
    margin: 5,
  }
});

export default HomeScreen;
