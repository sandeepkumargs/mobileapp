import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Calendar from "react-native-calendars";

export default function CalenderService() {
  return (
    <Calendar
    // onDayPress={(day) => {
    //   console.log("selected day", day);
    // }}
    />
  );
}

const styles = StyleSheet.create({});
