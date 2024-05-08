import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import DocumentsComponents from "../components/DocumentsComponents";

var { width, height } = Dimensions.get("window");

export default function Documents() {
  return (
    <View style={styles.DocumentsComponents}>
      <Stack.Screen options={{ headerShown: false }} />
      <DocumentsComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  DocumentsComponents: {
    backgroundColor: "#EFEFEF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
