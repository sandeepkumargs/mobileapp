import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { s, vs, ms, mvs } from "react-native-size-matters";
import { useNavigation } from "expo-router";

export default function ProfileComponent() {
  navigation = useNavigation();
  return (
    <View style={styles.ProfileComponentContainer}>
      <View style={styles.ProfileComponentLayout}>
        <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
          <Image source={require("./../assets/images/ProfileUser.png")} />
          <Text style={{ color: "#484848", fontWeight: "500", fontSize: 12 }}>
            Saurabh Gupta
          </Text>
        </View>
        <View style={{ marginTop: hp("8%"), gap: 30 }}>
          <TouchableOpacity>
            <View style={styles.ProfileComponentTextFlex}>
              <Text style={styles.ProfileComponentText}>Edit Profile</Text>
              <Image source={require("./../assets/images/RightArrow.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Documents")}>
            <View style={styles.ProfileComponentTextFlex}>
              <Text style={styles.ProfileComponentText}>Documents</Text>
              <Image source={require("./../assets/images/RightArrow.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ProfileComponentTextFlex}>
              <Text style={styles.ProfileComponentText}>Subscription</Text>
              <Image source={require("./../assets/images/RightArrow.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ProfileComponentTextFlex}>
              <Text style={styles.ProfileComponentText}>
                Bluetooth connection
              </Text>
              <Image source={require("./../assets/images/RightArrow.png")} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.ProfileComponentTextFlex}>
              <Text style={styles.ProfileComponentText}>Settings</Text>
              <Image source={require("./../assets/images/RightArrow.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileComponentImage}>
          <Image
            source={require("./../assets/images/YourBike_BikePreview.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileComponentContainer: {
    margin: ms(25),
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  ProfileComponentLayout: {
    margin: ms(25),
  },
  ProfileComponentTextFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProfileComponentText: {
    color: "#484848",
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 32,
  },
  ProfileComponentImage: {
    marginTop: hp("21.5%"),
    paddingLeft: "47%",
  },
});
