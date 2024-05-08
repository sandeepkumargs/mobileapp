import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

var { width, height } = Dimensions.get("window");

export default function KeySharingComponents() {
  const navigation = useNavigation();
  return (
    <View style={styles.KeySharingComponentsContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={styles.KeySharingComponentsHeading}>Key Sharing</Text>
      </View>
      <View style={styles.KeySharingComponentsLayout}>
        <View>
          <Text style={styles.KeySharingComponentsText1}>Medhansh</Text>
          <Text style={styles.KeySharingComponentsText2}>Invite sent</Text>
        </View>
        <View style={styles.horizontalDivider} />
        <View style={{ marginTop: height * 0.01 }}>
          <Text style={styles.KeySharingComponentsText1}>Mehul</Text>
          <Text style={styles.KeySharingComponentsText2}>
            Active since Jan 20, 2022
          </Text>
        </View>
        <View style={{ marginTop: height * 0.03 }}>
          <Text style={styles.KeySharingComponentsText1}>Vishal</Text>
          <Text style={styles.KeySharingComponentsText2}>
            Active since feb 20, 2023
          </Text>
        </View>
        <View style={{ marginTop: height * 0.03 }}>
          <Text style={styles.KeySharingComponentsText1}>Priyanka</Text>
          <Text style={styles.KeySharingComponentsText2}>
            Active since march 12, 2024
          </Text>
        </View>
        <View style={{ marginTop: height * 0.18 }}>
          <Text
            style={[styles.KeySharingComponentsText2, { textAlign: "center" }]}
          >
            Share the access with other riders
          </Text>
          <Pressable onPress={() => navigation.navigate("addRider")}>
            <View style={styles.KSButton}>
              <Text
                style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "500" }}
              >
                Add another rider
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  KeySharingComponentsContainer: {
    marginHorizontal: width * 0.06,
    backgroundColor: "#EFEFEF",
    flex: 1,
  },
  KeySharingComponentsHeading: {
    color: "#484848",
    fontSize: height * 0.027,
  },
  KeySharingComponentsLayout: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flex: 1,
    marginVertical: height * 0.03,
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.06,
  },
  KeySharingComponentsText1: {
    color: "#484848",
    fontSize: height * 0.027,
    fontWeight: "600",
    lineHeight: 32,
  },
  KeySharingComponentsText2: {
    color: "#00000054",
    fontSize: height * 0.023,
    fontWeight: "500",
    lineHeight: 32,
  },
  horizontalDivider: {
    backgroundColor: "#00000026",
    width: "100%",
    marginTop: height * 0.03,
    height: 1.5,
    marginVertical: 5, // Adjust as needed
  },
  KSButton: {
    backgroundColor: "#5754ED",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.07,
    borderRadius: 10,
    elevation: 4,
  },
});
