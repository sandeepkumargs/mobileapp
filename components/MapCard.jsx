import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MapCard() {
  return (
    <View style={styles.MapCard}>
      {/* <Text>{name}</Text> */}
      <Text>hi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MapCard: {
    bottom: 50,
    position: "absolute",
    backgroundColor: "red",
    left: 10,
    right: 10,
  },
});
