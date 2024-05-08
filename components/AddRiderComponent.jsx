import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "expo-router";

var { width, height } = Dimensions.get("window");

export default function AddRiderComponent() {
  const navigation = useNavigation();
  const [isInviteSent, setIsInviteSent] = useState(false);
  const [riderName, setRiderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendInvite = () => {
    // Your logic to send invite goes here
    // For demonstration, I'm just setting a flag to simulate success
    setIsInviteSent(true);
  };

  return (
    <View style={styles.AddRiderComponentsContainer}>
      <View style={{ flexDirection: "row", gap: 25, alignItems: "center" }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>

        <Text style={{ color: "#484848", fontSize: 20, fontWeight: "500" }}>
          Key Sharing
        </Text>
      </View>

      <View style={styles.AddRiderComponentsLayout}>
        {isInviteSent ? (
          <View style={styles.successMessage}>
            <Image source={require("./../assets/images/Success.png")} />
            <Text style={styles.successMessageText}>
              Invite sent to Medhansh
            </Text>
          </View>
        ) : (
          <View>
            <Text
              style={{
                color: "#484848",
                fontWeight: "600",
                fontSize: 24,
                lineHeight: 32,
              }}
            >
              Rider Details
            </Text>
            <Text
              style={{
                color: "#00000078",
                fontWeight: "500",
                fontSize: 18,
                lineHeight: 32,
              }}
            >
              Please enter the rider's details to send invite
            </Text>
            <TextInput
              style={[styles.AddRiderTextInput, { marginTop: height * 0.07 }]}
              placeholder="Name"
              placeholderTextColor="#00000047"
              value={riderName}
              onChangeText={setRiderName}
            />
            <TextInput
              style={[styles.AddRiderTextInput, { marginTop: height * 0.07 }]}
              placeholder="Phone number"
              placeholderTextColor="#00000047"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="numeric"
            />
            <Pressable onPress={handleSendInvite}>
              <View style={styles.AddRiderButton}>
                <Text
                  style={{ color: "#FFFFFF", fontSize: 20, fontWeight: "500" }}
                >
                  Send Invite
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  AddRiderComponentsContainer: {
    // backgroundColor: "red",
    marginHorizontal: width * 0.06,
    backgroundColor: "#EFEFEF",
    flex: 1,
  },
  AddRiderComponentsLayout: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flex: 1,
    marginVertical: height * 0.03,
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  AddRiderTextInput: {
    // borderColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#000000DE",
    borderWidth: 1,
  },
  AddRiderButton: {
    backgroundColor: "#5754ED",
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.07,
    borderRadius: 10,
    marginTop: height * 0.1,
    elevation: 4,
  },
  successMessage: {
    flex: 1,
    alignItems: "center",
    marginTop: height * 0.03,
  },
  successMessageText: {
    alignItems: "center",
    color: "#00000078",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 32,
    marginTop: height * 0.03,
  },
});
