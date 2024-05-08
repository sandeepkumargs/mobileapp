import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import MapComponents from "../components/MapComponents";

var { width, height } = Dimensions.get("window");
export default function Map() {
  return (
    <View style={styles.MapConatiner}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  MapConatiner: {
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
