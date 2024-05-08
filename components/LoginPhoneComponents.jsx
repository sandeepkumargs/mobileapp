import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

var { width, height } = Dimensions.get("window");

export default function LoginPhoneComponents() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.LoginPhoneComponents}>
      <View style={styles.LoginPhoneHead}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.LoginPhoneBackBtn}
        >
          <Image source={require("./../assets/images/chevronLeft.png")} />
        </Pressable>

        <Image source={require("./../assets/images/Claysol.png")} />
      </View>
      <View style={styles.LoginPhoneHeading}>
        <Text style={styles.LoginPhoneText1}>Log In</Text>
        <Text style={styles.LoginPhoneText2}>
          Please enter your phone number
        </Text>
      </View>
      <View style={styles.LoginPhoneInputFLex}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Text LoginPhoneText3>+91</Text>
          <View style={styles.LoginPhonedivider} />
        </View>

        <TextInput
          style={[styles.LoginPhoneTextInput]}
          // placeholder="+91"
          placeholderTextColor="#00000047"
          value={phoneNumber}
          keyboardType="numeric"
          onChangeText={setPhoneNumber}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginOtp");
        }}
      >
        <View style={styles.LoginPhoneBtn}>
          <Text style={styles.LoginPhoneBtnText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginPhoneComponents: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
  },
  LoginPhoneHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LoginPhoneBackBtn: {
    borderColor: "#D8DADC",
    borderWidth: 1,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  LoginPhoneHeading: {
    marginTop: height * 0.05,
  },
  LoginPhoneText1: {
    color: "#000000",
    fontWeight: "800",
    fontSize: 30,
    lineHeight: 39,
  },
  LoginPhoneText2: {
    color: "#000000B2",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  LoginPhoneTextInput: {
    // borderColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderWidth: 1,
    flex: 1,
    fontSize: 17,
    color: "#00000080",
    fontWeight: "400",
    lineHeight: 22,
  },
  LoginPhonedivider: {
    width: 1,
    backgroundColor: "#D8DADC",
    height: height * 0.03,
  },
  LoginPhoneInputFLex: {
    marginTop: height * 0.04,
    flexDirection: "row",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#D8DADC",
    borderWidth: 1,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    alignItems: "center",
    gap: 15,
  },
  LoginPhoneBtn: {
    backgroundColor: "#5754ED",
    borderRadius: 10,
    height: height * 0.06,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.08,
  },
  LoginPhoneBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  LoginPhoneText3: {
    color: "#000000",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
  },
});
