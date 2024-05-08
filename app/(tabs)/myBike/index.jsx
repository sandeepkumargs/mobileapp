import { StyleSheet, Text, View } from "react-native";
import React from "react";
import YourBikeComponent from "./../../../components/YourBikeComponent";
import { s, vs, ms, mvs } from "react-native-size-matters";

export default function two() {
  return (
    <View style={styles.YourBikeContainer}>
      <YourBikeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  YourBikeContainer: {
    flex: 1,
    paddingTop: ms(20),
  },
});
