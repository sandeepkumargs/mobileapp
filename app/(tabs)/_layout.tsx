import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, Image } from "react-native";



// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {


  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("./../../assets/images/HomeIcon.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myBike"
        options={{
          title: "My Bike",

          tabBarIcon: ({ color }) => (
            // <FontAwesome name="motorcycle" size={28} />
            <Image
              source={require("./../../assets/images/BikeIcon.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            // <FontAwesome name="motorcycle" size={28} />
            <Image
              source={require("./../../assets/images/ProfileIcon.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
