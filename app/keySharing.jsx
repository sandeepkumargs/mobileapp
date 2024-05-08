import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import KeySharingComponents from "../components/KeySharingComponents";

var { width, height } = Dimensions.get("window");

export default function keySharing() {
  return (
    <View style={styles.KeySharingComponents}>
      <Stack.Screen options={{ headerShown: false }} />
      <KeySharingComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  KeySharingComponents: {
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
