import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import AddRiderComponent from "../components/AddRiderComponent";

var { width, height } = Dimensions.get("window");

export default function addRider() {
  return (
    <View style={styles.addRiderContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <AddRiderComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  addRiderContainer: {
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
