import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import LoginPhoneComponents from "../components/LoginPhoneComponents";

var { width, height } = Dimensions.get("window");

export default function LoginPhone() {
  return (
    <View style={styles.LoginPhone}>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginPhoneComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  LoginPhone: {
    backgroundColor: "#FFFFFF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
