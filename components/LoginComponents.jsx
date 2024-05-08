// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   CheckBox,
//   TouchableOpacity,
//   Pressable,
// } from "react-native";
// import React, { useState } from "react";
// import Checkbox from "expo-checkbox";
// import FloorAndBuilding from "./../assets/svg/FloorAndBuilding";

// import { StatusBar } from "expo-status-bar";
// var { width, height } = Dimensions.get("window");

// export default function LoginComponents() {
//   const [isChecked, setChecked] = useState(false);

//   return (
//     <View style={styles.LoginComponentsContainer}>
//       {/* <StatusBar backgroundColor="#5955F1" /> */}
//       <View style={{ height: height * 0.6 }}>
//         <View
//           style={{
//             backgroundColor: "#5955F1",
//             height: height * 0.49,
//           }}
//         >
//           <View style={{ padding: 20 }}>
//             <Image
//               source={require("./../assets/images/ClaysolLogo.png")}
//               style={{ height: height * 0.07, width: width * 0.4 }}
//             />
//           </View>
//           <View style={styles.LoginImage}>
//             <View style={{ marginTop: height * 0.1 }}>
//               <Image source={require("./../assets/images/power.gif")} />
//             </View>
//             <View>
//               <Image
//                 source={require("./../assets/images/electric_bike.png")}
//                 style={{ height: height * 0.27, width: width * 0.65 }}
//               />
//             </View>
//           </View>
//           <View
//             style={{
//               marginTop: height * 0.41,
//               position: "absolute",
//             }}
//           >
//             <Image source={require("./../assets/images/floor.png")} />
//           </View>
//         </View>
//       </View>
//       <View
//         style={{ marginHorizontal: width * 0.05, marginTop: height * 0.01 }}
//       >
//         <Text style={styles.LoginText1}>
//           Feel the power with your electric ride!
//         </Text>
//         <View
//           style={{
//             flexDirection: "column",
//             justifyContent: "space-between",
//             height: height * 0.22,
//           }}
//         >
//           <Pressable>
//             <View style={[styles.LoginBtn, { marginTop: height * 0.04 }]}>
//               <View
//                 style={{
//                   width: "20%",
//                   // backgroundColor: "red",
//                   alignItems: "center",
//                 }}
//               >
//                 <Image source={require("./../assets/images/Japan.png")} />
//               </View>
//               <Text
//                 style={{
//                   color: "#FFFFFF",
//                   fontSize: 20,
//                   fontWeight: "500",
//                   width: "80%",
//                   // backgroundColor: "green",
//                   textAlign: "left",
//                 }}
//               >
//                 Login with phone number
//               </Text>
//             </View>
//           </Pressable>
//           <View style={{ width: "100%", alignItems: "center" }}>
//             <Text style={{ color: "#3C3C3C", fontWeight: "400", fontSize: 20 }}>
//               OR
//             </Text>
//           </View>
//           <View
//             style={[
//               styles.LoginBtn,
//               {
//                 backgroundColor: "#FFFFFF",
//                 borderWidth: 1,
//                 borderColor: "#A3A3A3",
//               },
//             ]}
//           >
//             <View
//               style={{
//                 width: "20%",
//                 // backgroundColor: "red",
//                 alignItems: "center",
//               }}
//             >
//               <Image source={require("./../assets/images/Google.png")} />
//             </View>
//             <Text
//               style={{
//                 color: "#3C3C3C",
//                 fontSize: 20,
//                 fontWeight: "500",
//                 width: "80%",
//                 // backgroundColor: "green",
//                 textAlign: "left",
//               }}
//             >
//               Continue with Google
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             marginTop: height * 0.035,
//             marginHorizontal: width * 0.02,
//             flexDirection: "row",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <Checkbox
//             style={styles.Logincheckbox}
//             value={isChecked}
//             onValueChange={setChecked}
//             color={isChecked ? "#4630EB" : "#969696"}
//           />
//           <View style={{ alignItems: "center", flexDirection: "row" }}>
//             <Text style={styles.LoginText}>I agree to</Text>
//             <TouchableOpacity
//               onPress={() => console.log("Terms & Conditions clicked")}
//               style={{ alignItems: "center" }}
//             >
//               <Text style={[styles.LoginText, { color: "#4630EB" }]}>
//                 {" "}
//                 Terms & Conditions{" "}
//               </Text>
//             </TouchableOpacity>
//             <Text style={styles.LoginText}>and</Text>
//             <TouchableOpacity
//               onPress={() => console.log("Privacy Policy clicked")}
//             >
//               <Text style={[(styles.LoginText, { color: "#4630EB" })]}>
//                 {" "}
//                 Privacy Policy
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   LoginComponentsContainer: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   Logincheckbox: {
//     borderRadius: 5,
//   },
//   LoginBtn: {
//     flexDirection: "row",
//     backgroundColor: "#5754ED",
//     height: height * 0.055,
//     alignItems: "center",
//     borderRadius: 10,
//     elevation: 4,
//     // marginTop: height * 0.04,
//     // justifyContent: "center",
//   },
//   LoginImage: {
//     marginTop: height * 0.3,
//     zIndex: 1,
//     alignItems: "center",
//     flexDirection: "row",
//     marginLeft: width * 0.1,
//     position: "absolute",
//   },
//   LoginText1: {
//     color: "#4D4D4D",
//     fontSize: 28,
//     fontWeight: "600",
//     lineHeight: 32,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   LoginText: {
//     fontSize: 12,
//     color: "#3C3C3C",
//     fontWeight: "500",
//   },
// });

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  CheckBox,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
// import FloorAndBuilding from "./../assets/svg/FloorAndBuilding";

import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
var { width, height } = Dimensions.get("window");

export default function LoginComponents() {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.LoginComponentsContainer}>
      {/* <StatusBar backgroundColor="#5955F1" /> */}
      <View style={{ height: height * 0.6 }}>
        <View
          style={{
            backgroundColor: "#5955F1",
            height: height * 0.41,
          }}
        >
          <View style={{ padding: 20 }}>
            <Image
              source={require("./../assets/images/ClaysolLogo.png")}
              style={{ height: height * 0.07, width: width * 0.4 }}
            />
          </View>
          <View style={{ marginTop: height * 0.05 }}>
            <Image
              source={require("./../assets/images/FloorandBuilding.png")}
            />
          </View>
          <View
            style={{
              position: "absolute",
              marginTop: height * 0.23,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                justifyContent: "flex-end",
                marginBottom: height * 0.035,
              }}
            >
              <Image source={require("./../assets/images/power.gif")} />
            </View>
            <Image source={require("./../assets/images/electric_bike.png")} />
          </View>
        </View>
      </View>
      <View
        style={{ marginHorizontal: width * 0.05, marginTop: height * 0.01 }}
      >
        <Text style={styles.LoginText1}>
          Feel the power with your electric ride!
        </Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: height * 0.22,
          }}
        >
          <Pressable onPress={() => navigation.navigate("LoginPhone")}>
            <View style={[styles.LoginBtn, { marginTop: height * 0.04 }]}>
              <View
                style={{
                  width: "20%",
                  // backgroundColor: "red",
                  alignItems: "center",
                }}
              >
                <Image source={require("./../assets/images/Japan.png")} />
              </View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "500",
                  width: "80%",
                  // backgroundColor: "green",
                  textAlign: "left",
                }}
              >
                Login with phone number
              </Text>
            </View>
          </Pressable>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Text style={{ color: "#3C3C3C", fontWeight: "400", fontSize: 20 }}>
              OR
            </Text>
          </View>
          <View
            style={[
              styles.LoginBtn,
              {
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#A3A3A3",
              },
            ]}
          >
            <View
              style={{
                width: "20%",
                // backgroundColor: "red",
                alignItems: "center",
              }}
            >
              <Image source={require("./../assets/images/Google.png")} />
            </View>
            <Text
              style={{
                color: "#3C3C3C",
                fontSize: 20,
                fontWeight: "500",
                width: "80%",
                // backgroundColor: "green",
                textAlign: "left",
              }}
            >
              Continue with Google
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: height * 0.035,
            marginHorizontal: width * 0.02,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Checkbox
            style={styles.Logincheckbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : "#969696"}
          />
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Text style={styles.LoginText}>I agree to</Text>
            <TouchableOpacity
              // onPress={() => console.log("Terms & Conditions clicked")}
              style={{ alignItems: "center" }}
            >
              <Text style={[styles.LoginText, { color: "#4630EB" }]}>
                {" "}
                Terms & Conditions{" "}
              </Text>
            </TouchableOpacity>
            <Text style={styles.LoginText}>and</Text>
            <TouchableOpacity
            // onPress={() => console.log("Privacy Policy clicked")}
            >
              <Text style={[(styles.LoginText, { color: "#4630EB" })]}>
                {" "}
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginComponentsContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  Logincheckbox: {
    borderRadius: 5,
  },
  LoginBtn: {
    flexDirection: "row",
    backgroundColor: "#5754ED",
    height: height * 0.055,
    alignItems: "center",
    borderRadius: 10,
    elevation: 4,
    // marginTop: height * 0.04,
    // justifyContent: "center",
  },
  LoginImage: {
    marginTop: height * 0.3,
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: width * 0.1,
    position: "absolute",
  },
  LoginText1: {
    color: "#4D4D4D",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  LoginText: {
    fontSize: 12,
    color: "#3C3C3C",
    fontWeight: "500",
  },
});
