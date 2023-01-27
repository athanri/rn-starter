import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
        <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}
      />
    {password.length <= 5 ? <Text>Password MUST be greater than 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
  },
});

export default TextScreen;
