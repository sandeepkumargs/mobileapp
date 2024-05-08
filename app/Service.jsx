import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ServiceComponents from "../components/ServiceComponents";

var { width, height } = Dimensions.get("window");

export default function Service() {
  return (
    <View style={styles.ServiceComponents}>
      <Stack.Screen options={{ headerShown: false }} />
      <ServiceComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceComponents: {
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.048,
    flex: 1,
    // height:"auto"
  },
});
