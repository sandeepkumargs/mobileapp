import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s, vs, ms, mvs } from "react-native-size-matters";
import DataRides from "./../../../data/DataRides.json";

export default function SeeAllRides() {
  const navigation = useNavigation();

  // Use navigation.setOptions to hide the header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View
      style={{
        backgroundColor: "#EFEFEF",
        flex: 1,
        paddingTop: ms(40),
        // paddingHorizontal: ms(20),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 40,
          alignItems: "center",
          // paddingLeft: ms(10),
          paddingHorizontal: ms(20),
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "#484848" }}>
          All Rides
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: ms(20),
          paddingHorizontal: ms(20),
          // paddingTop: ms(15),
          // paddingBottom: ms(15),
        }}
      >
        {DataRides && DataRides.length > 0 ? (
          DataRides.map((ride, index) => (
            <View
              key={index}
              style={{
                height: vs(230),
                backgroundColor: "#FFFFFF",
                marginBottom: ms(15),
                borderRadius: 20,
                paddingVertical: ms(10),
                paddingHorizontal: ms(25),
                elevation: 2,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "600", color: "#3E3E3E" }}
                >
                  {ride.duration} mins, {ride.kiloMeter} km
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "300", color: "#484848" }}
                >
                  {ride.date}, {ride.time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                  marginTop: ms(15),
                }}
              >
                <View
                  style={{
                    backgroundColor: "#A3A3A3",
                    height: vs(15),
                    width: s(15),
                    borderRadius: 25,
                  }}
                />
                <Text
                  style={{ color: "#6D6D6D", fontWeight: "600", fontSize: 16 }}
                >
                  {ride.start}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                  marginTop: ms(15),
                }}
              >
                <View
                  style={{
                    backgroundColor: "#58B5E9",
                    height: vs(15),
                    width: s(15),
                    borderRadius: 25,
                  }}
                />
                <Text
                  style={{ color: "#6D6D6D", fontWeight: "600", fontSize: 16 }}
                >
                  {ride.destination}
                </Text>
              </View>
              <View style={{ marginTop: ms(20), gap: 20, marginLeft: ms(2) }}>
                <View style={{ flexDirection: "row", gap: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#6D6D6DB2",
                      width: "30%",
                    }}
                  >
                    Efficiency
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#6D6D6D",
                      fontWeight: "700",
                    }}
                  >
                    {ride.efficiency} wh/km
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#6D6D6DB2",
                      width: "30%",
                    }}
                  >
                    Top Speed
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#6D6D6D",
                      fontWeight: "700",
                    }}
                  >
                    {ride.topSpeed} km/h
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 30 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      color: "#6D6D6DB2",
                      width: "30%",
                    }}
                  >
                    Avg Speed
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#6D6D6D",
                      fontWeight: "700",
                      width: "45%",
                    }}
                  >
                    {ride.avgSpeed} km/h
                  </Text>
                  <Image
                  // source={require("./../assets/images/carbon_share.png")}
                  />
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text>No rides data available</Text>
        )}
      </ScrollView>
    </View>
  );
}
