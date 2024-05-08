import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

export default function YourBikeComponent() {
  const navigation = useNavigation();
  return (
    <View style={styles.YourBikeComponent}>
      <View style={styles.YourBikeLayout}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#484848" }}>
            My Bike
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "800",
              color: "#3939394F",
              fontStyle: "italic",
              paddingLeft: s(2),
            }}
          >
            KA 05 M 4500
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Alarms</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("tpms")}>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>TPMS</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("keySharing")}>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Key Sharing</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Anti Theft</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Your Rides</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Service")}>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Service</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("about")}>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>About Bike</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.YourBikeComponentTextFlex}>
              <Text style={styles.YourBikeComponentText}>Help</Text>
              <Image
                source={require("./../assets/images/RightArrow.png")}
                style={styles.YourBikeComponentImage}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Image
          source={require("./../assets/images/YourBike_BikePreview.png")}
          style={styles.YourBikeComponentImage2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  YourBikeComponent: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingTop: ms(15),
  },
  YourBikeLayout: {
    margin: ms(25),
    backgroundColor: "#FFFFFF",
    flex: 1,
    borderRadius: 20,
    padding: ms(20),
  },
  YourBikeComponentTextFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: vs(20),
    alignItems: "center",
  },
  YourBikeComponentText: {
    fontSize: 20,
    color: "#484848",
    fontWeight: "500",
    lineHeight: 32,
  },
  YourBikeComponentImage: {
    marginRight: s(20),
  },
  YourBikeComponentImage2: {
    position: "absolute",
    marginTop: vs(470),
    marginLeft: s(153),
  },
});
