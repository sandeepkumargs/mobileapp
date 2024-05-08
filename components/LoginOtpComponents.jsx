import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import { Stack, useNavigation } from "expo-router";
import LoginPhoneComponents from "../components/LoginPhoneComponents";
// import OtpInputs from "react-native-otp-inputs";

var { width, height } = Dimensions.get("window");

export default function LoginPhoneCoponents() {
  const navigation = useNavigation();

  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState("");
  const [f6, setF6] = useState("");

  const [focusedInput, setFocusedInput] = useState(null);
  const [otpNotMatched, setOtpNotMatched] = useState(false);

  const handleFocus = (refName) => {
    setFocusedInput(refName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const otpValidate = () => {
    let otp = "123456";
    let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6;
    if (enteredOtp == otp) {
      navigation.navigate("home");
    } else {
      setOtpNotMatched(true);
    }
  };

  return (
    <View style={styles.LoginOtpCoponents}>
      <View style={styles.LoginOtpHead}>
        <Pressable
          style={styles.LoginOtpBackBtn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("./../assets/images/chevronLeft.png")} />
        </Pressable>
        <Image source={require("./../assets/images/Claysol.png")} />
      </View>
      <View style={styles.LoginOtpHeading}>
        <View>
          <Text style={styles.LoginOtpText3}>Enter code</Text>
          <Text style={styles.LoginOtpText4}>
            We've sent an SMS with an activation code to your phone{"  "}
            <Text style={{ color: "#000000", fontWeight: "400" }}>
              +91 9876543221
            </Text>
          </Text>
        </View>

        <View style={styles.LoginOtpInputFlex}>
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et1" && styles.FocusedInput,
              ,
            ]}
            ref={et1}
            keyboardType="number-pad"
            caretHidden={true}
            maxLength={1}
            value={f1}
            onChangeText={(txt) => {
              setF1(txt);
              if (txt.length >= 1) {
                et2.current.focus();
              }
            }}
            onFocus={() => handleFocus("et1")}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et2" && styles.FocusedInput,
              ,
            ]}
            ref={et2}
            keyboardType="number-pad"
            maxLength={1}
            caretHidden={true}
            value={f2}
            onChangeText={(txt) => {
              setF2(txt);
              if (txt.length >= 1) {
                et3.current.focus();
              } else if (txt.length < 1) {
                et1.current.focus();
              }
            }}
            onFocus={() => handleFocus("et2")}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et3" && styles.FocusedInput,
              ,
            ]}
            ref={et3}
            keyboardType="number-pad"
            caretHidden={true}
            maxLength={1}
            value={f3}
            onChangeText={(txt) => {
              setF3(txt);
              if (txt.length >= 1) {
                et4.current.focus();
              } else if (txt.length < 1) {
                et2.current.focus();
              }
            }}
            onFocus={() => handleFocus("et3")}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et4" && styles.FocusedInput,
              ,
            ]}
            ref={et4}
            keyboardType="number-pad"
            caretHidden={true}
            value={f4}
            maxLength={1}
            onChangeText={(txt) => {
              setF4(txt);
              if (txt.length >= 1) {
                et5.current.focus();
              } else if (txt.length < 1) {
                et3.current.focus();
              }
            }}
            onFocus={() => handleFocus("et4")}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et5" && styles.FocusedInput,
              ,
            ]}
            ref={et5}
            keyboardType="number-pad"
            caretHidden={true}
            value={f5}
            maxLength={1}
            onChangeText={(txt) => {
              setF5(txt);
              if (txt.length >= 1) {
                et6.current.focus();
              } else if (txt.length < 1) {
                et4.current.focus();
              }
            }}
            onFocus={() => handleFocus("et5")}
            onBlur={handleBlur}
          />
          <TextInput
            style={[
              styles.LoginOtpInput,
              otpNotMatched
                ? { borderColor: otpNotMatched ? "#F54135" : focusedInput }
                : focusedInput === "et6" && styles.FocusedInput,
              ,
            ]}
            caretHidden={true}
            ref={et6}
            keyboardType="number-pad"
            value={f6}
            maxLength={1}
            onChangeText={(txt) => {
              setF6(txt);
              if (txt.length < 1) {
                et5.current.focus();
              }
            }}
            onFocus={() => handleFocus("et6")}
            onBlur={handleBlur}
          />
        </View>
        <View style={styles.OtpWarningContainer}>
          {otpNotMatched && (
            <View>
              <Text style={styles.OtpWarningText}>
                Wrong code, please try again
              </Text>
            </View>
          )}
        </View>

        <View style={styles.countdown}>
          {count !== 0 && (
            <View style={styles.countdownFlex}>
              <Text style={styles.LoginOtpText1}>Send code again in</Text>
              <Text style={styles.LoginOtpText2}>00:{count}</Text>
            </View>
          )}

          {count == 0 && (
            <View style={styles.countdownFlex}>
              <Text style={styles.LoginOtpText2}>I didn't receive a code</Text>
              <Text
                style={styles.LoginOtpText1}
                onPress={() => {
                  setCount(60);
                }}
              >
                Resend
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          disabled={
            f1 !== "" &&
            f2 !== "" &&
            f3 !== "" &&
            f4 !== "" &&
            f5 !== "" &&
            f6 !== ""
              ? false
              : true
          }
          onPress={() => otpValidate()}
        >
          <View
            style={[
              styles.verifyBtn,
              {
                backgroundColor:
                  f1 !== "" &&
                  f2 !== "" &&
                  f3 !== "" &&
                  f4 !== "" &&
                  f5 !== "" &&
                  f6 !== ""
                    ? "#5754ED"
                    : "#80808033",
              },
            ]}
          >
            <Text style={styles.verifyBtnTxt}>Verify</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginOtpCoponents: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.03,
  },
  LoginOtpBackBtn: {
    borderColor: "#D8DADC",
    borderWidth: 1,
    width: width * 0.1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  LoginOtpHead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LoginOtpHeading: {
    marginTop: height * 0.06,
  },
  LoginOtpInputFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.05,
  },
  LoginOtpInput: {
    width: width * 0.13,
    height: height * 0.08,
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    borderColor: "#D8DADC",
    color: "#000000",
    fontWeight: "500",
    fontSize: 28,
    lineHeight: 35,
  },
  LoginOtpText3: {
    color: "#000000",
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 40,
  },
  LoginOtpText4: {
    color: "#000000B2",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
  },
  FocusedInput: {
    borderColor: "#000000", // Change background color for focused input
  },
  verifyBtn: {
    height: height * 0.07,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: height * 0.04,
  },
  verifyBtnTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },

  countdown: {
    marginTop: height * 0.04,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // gap: 20,
  },
  LoginOtpText1: {
    color: "#000000B2",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  LoginOtpText2: {
    color: "#000000B2",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 20,
  },
  countdownFlex: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  OtpWarningContainer: {
    marginTop: height * 0.03,
    alignItems: "center",
    height: height * 0.04,
  },
  OtpWarningText: {
    color: "#F54135",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
  },
});
