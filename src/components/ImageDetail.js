import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource}/>
      <Text style={styles.text}>{ title }</Text>
      <Text style={styles.text}>Image core - { imageScore }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
  
export default ImageDetail;