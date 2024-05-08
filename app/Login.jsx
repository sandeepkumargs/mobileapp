import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import LoginComponents from "../components/LoginComponents";

var { width, height } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.LoginComponents}>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginComponents /> 
    </View>
  );
}

const styles = StyleSheet.create({
  LoginComponents: {
    backgroundColor: "#EFEFEF",
    marginTop: height * 0.048,
    flex: 1,
  },
});
