import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import LoginOtpComponents from "./../components/LoginOtpComponents";

var { width, height } = Dimensions.get("window");

export default function LoginPhoneCoponents() {
  return (
    <View style={styles.LoginPhoneCoponents}>
      <Stack.Screen options={{ headerShown: false }} />
      <LoginOtpComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  LoginPhoneCoponents: {
    backgroundColor: "#FFFFFF",
    paddingTop: height * 0.048,
    flex: 1,
  },
});
