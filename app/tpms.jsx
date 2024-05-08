import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import TpmsComponent from "../components/TpmsComponent";

var { width, height } = Dimensions.get("window");

export default function tpms() {
  return (
    <View style={styles.tpmsContainer}>
      <Stack.Screen options={{ headerShown: false }} />
      <TpmsComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  tpmsContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.045,
  },
});
