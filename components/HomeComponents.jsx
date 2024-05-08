import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { s, vs, ms } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
// import { TouchableOpacity } from "react-native-web";

export default function HomeComponents() {
  const [openModel, setOpenModal] = useState(false);

  const navigation = useNavigation();

  return (
    <View>
      <View
        style={{
          marginTop: vs(40),

          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            width: "42%",
            height: vs(70),
            backgroundColor: "#EEEEEE",
            borderRadius: 25,
            // alignItems: "center",
            borderColor: "grey",
            borderWidth: 0.5,
            justifyContent: "center",
          }}
        >
          <View
            style={{ backgroundColor: "transparent", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "transparent",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require(".././assets/images/Locate.png")} />
              <Text
                style={{ fontSize: 24, fontWeight: "700", color: "#484848" }}
              >
                84.2 km
              </Text>
            </View>
            <Text style={{ fontSize: 12, color: "#484848", fontWeight: "400" }}>
              est. range for{" "}
              <Text
                style={{ fontSize: 14, fontWeight: "bold", color: "#484848" }}
              >
                56%
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "42%",
            height: vs(70),
            backgroundColor: "#C2E9AA",
            borderRadius: 25,
            // alignItems: "center",
            borderColor: "grey",
            borderWidth: 0.5,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <View
              style={{ backgroundColor: "transparent", alignItems: "center" }}
            >
              <View
                style={{
                  backgroundColor: "transparent",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 15,
                }}
              >
                <Image source={require(".././assets/images/ChargeIcon.png")} />
                <Text
                  style={{ fontSize: 24, fontWeight: "700", color: "#484848" }}
                >
                  100%
                </Text>
              </View>
              <Text
                style={{ fontSize: 12, color: "#484848", fontWeight: "400" }}
              >
                Charged
                {/* <Text style={{ fontSize: 14, fontWeight: "bold" }}>56%</Text> */}
              </Text>
            </View>
            <Modal
              visible={openModel}
              animationType="slide"
              style={{ backgroundColor: "green", borderRadius: 50 }}
              onRequestClose={() => setOpenModal(false)}
              presentationStyle="pageSheet"
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: "red",
                  padding: ms(60),
                  height: vs(150),
                  borderRadius: 50,
                }}
              >
                {/* Contents of your modal */}
                <TouchableOpacity onPress={() => setOpenModal(false)}>
                  <Text>Close Modal</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: ms(3),
        }}
      >
        <Pressable
          style={{
            width: "23%",
            height: vs(70),
            backgroundColor: "white",
            borderRadius: 25,
            alignItems: "center",
            borderColor: "grey",
            borderWidth: 0.5,
            justifyContent: "center",
            marginHorizontal: ms(15),
            marginTop: ms(10),
          }}
          onPress={() => {
            navigation.navigate("Map");
          }}
        >
          <Image source={require("../assets/images/trip.png")} />
          <Text style={{ color: "#484848", fontSize: 12 }}>Trip</Text>
        </Pressable>

        <View
          style={{
            width: "30%",
            height: vs(75),
            backgroundColor: "#5754ED",
            borderRadius: 25,
            alignItems: "center",
            borderColor: "grey",
            borderWidth: 0.5,
            justifyContent: "center",
            marginHorizontal: ms(15),
            marginTop: ms(10),
          }}
        >
          <Image source={require("../assets/images/lightning_charge.png")} />
          <Text style={{ color: "#FFFFFF", fontWeight: "400", fontSize: 16 }}>
            Turn ON
          </Text>
        </View>
        <View
          style={{
            width: "23%",
            height: vs(70),
            backgroundColor: "white",
            borderRadius: 25,
            alignItems: "center",
            borderColor: "grey",
            borderWidth: 0.5,
            justifyContent: "center",
            marginHorizontal: ms(15),
            marginTop: ms(10),
          }}
        >
          <Image source={require("../assets/images/SOS.png")} />
          <Text style={{ color: "#484848", fontSize: 12 }}>SOS</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#EFEFEF",
          height: vs(110),
          marginTop: ms(10),
          borderRadius: 25,
          marginHorizontal: ms(13),
          paddingHorizontal: ms(3),
          justifyContent: "space-around",
        }}
      >
        <View
          flexDirection="row"
          justifyContent="space-around"
          style={{
            gap: 25,
            height: vs(60),
            padding: ms(10),
            borderRadius: 25,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "grey",
              borderWidth: 0.5,
              width: "49%",
              borderRadius: 20,
              height: vs(42),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>Total Distance</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#484848" }}>
              21,000 km
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "grey",
              borderWidth: 0.5,
              width: "49%",
              borderRadius: 20,
              height: vs(42),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>Next Service</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#484848" }}>
              22,000 km
            </Text>
          </View>
        </View>
        <View
          flexDirection="row"
          justifyContent="space-around"
          style={{
            gap: 25,
            height: vs(60),
            padding: ms(10),
            borderRadius: 25,
          }}
        >
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 0.5,
              borderColor: "grey",
              width: "31%",
              borderRadius: 20,
              height: vs(42),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>Total Trips</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#484848" }}>
              300
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 0.5,
              borderColor: "grey",
              width: "31%",
              borderRadius: 20,
              height: vs(42),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>Fuel Saved</Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#484848" }}>
              100 ltrs
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              borderWidth: 0.5,
              borderColor: "grey",
              width: "31%",
              borderRadius: 20,
              height: vs(42),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 12 }}>
              CO<Text style={{ fontSize: 8, lineHeight: 12 }}>2 </Text>Avoided
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#484848" }}>
              200 kg
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: ms(13),
          justifyContent: "space-around",
          marginTop: ms(10),
          gap: 30,
        }}
      >
        <Text style={{ fontSize: 16 }}>Your recent ride</Text>
        {/* <Text>See all rides</Text> */}
        <Pressable onPress={() => navigation.navigate("seeAllRides")}>
          <Text
            style={{
              color: "#5754ED",
              textDecorationLine: "underline",
              fontSize: 16,
            }}
          >
            See all rides
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
