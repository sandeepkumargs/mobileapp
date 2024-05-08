// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   Pressable,
//   Image,
//   Switch,
// } from "react-native";
// import { useState } from "react";
// import { useNavigation } from "expo-router";

// var { width, height } = Dimensions.get("window");

// export default function ServiceComponents() {
//   const navigation = useNavigation();
//   const [isEnabled, setIsEnabled] = useState(true);
//   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

//   return (
//     <View View style={styles.ServiceComponents}>
//       <View style={styles.ServiceComponentsHeading}>
//         <Pressable onPress={() => navigation.goBack()}>
//           <Image source={require("./../assets/images/BackButton.png")} />
//         </Pressable>
//         <Text style={styles.ServiceComponentsHeadingText}>Service</Text>
//       </View>
//       <View style={styles.ServiceComponentsContainer}>
//         <Text style={styles.ServiceComponentsText1}>KAO5 M 4500</Text>
//         <View style={styles.ServiceComponentsImageContainer}>
//           <Image
//             source={require("./../assets/images/About_BikePreview.png")}
//             style={styles.ServiceComponentsImage}
//           />
//         </View>
//         <View style={styles.ServiceComponentsSetRemainder}>
//           <View style={{ paddingLeft: width * 0.02 }}>
//             <Text style={styles.ServiceComponentsSetRemainderText2}>
//               Next service
//             </Text>
//             <Text style={styles.ServiceComponentsSetRemainderText3}>
//               14 Jan, 2024
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row", alignItems: "center", gap: 30 }}>
//             <View style={styles.ServiceComponentsSetRemainderContainer}>
//               <Text style={styles.ServiceComponentsSetRemainderText4}>
//                 Set Reminder
//               </Text>
//               <Switch
//                 trackColor={{ false: "#767577", true: "#5754ED" }}
//                 thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
//                 ios_backgroundColor="#5754ED"
//                 onValueChange={toggleSwitch}
//                 value={isEnabled}
//               />
//             </View>
//             <View style={styles.ServiceComponentsEdit}>
//               <Image source={require("./../assets/images/Edit.png")} />
//               <Text style={styles.ServiceComponentsSetRemainderText5}>
//                 Edit
//               </Text>
//             </View>
//           </View>
//         </View>
// <View style={styles.ServiceComponentsSetRemainder}>
//   <View style={{ paddingLeft: width * 0.02 }}>
//     <Text style={styles.ServiceComponentsSetRemainderText2}>
//       Last serviced
//     </Text>
//     <Text style={styles.ServiceComponentsSetRemainderText3}>
//       14 Jan, 2023
//     </Text>
//   </View>
//   <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//     <Text style={styles.ServiceComponentsText6}>
//       View all previous services
//     </Text>
//     <Image
//       source={require("./../assets/images/DownArrow.png")}
//       style={{ marginTop: height * 0.007 }}
//     />
//   </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   ServiceComponents: {
//     flex: 1,
//     backgroundColor: "#EFEFEF",
//     // paddingTop: ms(15),
//   },
//   ServiceComponentsHeading: {
//     flexDirection: "row",
//     marginHorizontal: width * 0.06,
//     gap: 25,
//     alignItems: "center",
//   },
//   ServiceComponentsContainer: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     marginHorizontal: width * 0.06,
//     marginVertical: height * 0.04,
//     borderRadius: 20,
//     // alignItems: "center",
//     // paddingTop: height * 0.01,
//     paddingHorizontal: width * 0.04,
//     paddingVertical: height * 0.025,
//   },
//   ServiceComponentsText1: {
//     color: "#393939BA",
//     fontWeight: "800",
//     fontSize: 24,
//     lineHeight: 32,
//     paddingLeft: width * 0.04,
//   },
//   ServiceComponentsImageContainer: {
//     alignItems: "center",
//     marginTop: height * 0.03,
//   },
//   ServiceComponentsImage: {
//     height: height * 0.2,
//     width: width * 0.45,
//   },
//   ServiceComponentsHeadingText: {
//     fontSize: 20,
//     fontWeight: "500",
//     color: "#484848",
//   },
//   ServiceComponentsSetRemainder: {
//     marginTop: height * 0.03,
//     paddingHorizontal: width * 0.05,
//     paddingVertical: height * 0.02,
//     borderColor: "#00000029",
//     borderWidth: 1.5,
//     borderRadius: 20,
//     // elevation: 1.5,
//     gap: 15,
//   },
//   ServiceComponentsSetRemainderContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderColor: "#0000001F",
//     borderWidth: 1.5,
//     borderRadius: 10,
//     //   elevation: 1,
//     width: "60%",
//     height: height * 0.038,
//     justifyContent: "space-between",
//     paddingHorizontal: width * 0.03,
//   },
//   ServiceComponentsSetRemainderText2: {
//     color: "#393939E0",
//     fontSize: 20,
//     fontWeight: "600",
//   },
//   ServiceComponentsSetRemainderText3: {
//     color: "#39393991",
//     fontSize: 16,
//     fontWeight: "800",
//   },
//   ServiceComponentsSetRemainderText4: {
//     color: "#5754ED",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   ServiceComponentsEdit: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 10,
//   },
//   ServiceComponentsSetRemainderText5: {
//     color: "#5754ED",
//     fontSize: 12,
//     fontWeight: "500",
//   },
//   ServiceComponentsText6: {
//     color: "#5754ED",
//     fontSize: 16,
//     fontWeight: "500",
//   },
// });

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Switch,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import ServiceData from "./../data/ServiceData.json";
import CalenderService from "./../components/CalenderService";
import { Calendar, LocaleConfig } from "react-native-calendars";
var { width, height } = Dimensions.get("window");

export default function ServiceComponents() {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const [showPreviousServices, setShowPreviousServices] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [rotateValue] = useState(new Animated.Value(0));
  const [isRotated, setIsRotated] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const togglePreviousServices = () => {
    const shouldShow = !showPreviousServices;
    setShowPreviousServices(shouldShow);
    const toValue = isRotated ? 0 : 1; // Toggle between 0 and 1
    Animated.timing(rotateValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsRotated(!isRotated);
  };

  const toggleCalendar = () => {
    const shouldShowCalendar = !showCalendar;
    setShowCalendar(shouldShowCalendar);
  };

  const interpolatedRotateAnimation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <View style={styles.ServiceComponents}>
      <View style={styles.ServiceComponentsHeading}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={styles.ServiceComponentsHeadingText}>Service</Text>
      </View>
      <ScrollView style={styles.ServiceComponentsContainer}>
        <Text style={styles.ServiceComponentsText1}>KAO5 M 4500</Text>
        <View style={styles.ServiceComponentsImageContainer}>
          <Image
            source={require("./../assets/images/About_BikePreview.png")}
            style={styles.ServiceComponentsImage}
          />
        </View>
        <View>
          <View style={styles.ServiceComponentsSetRemainder}>
            <View style={{ paddingLeft: width * 0.02 }}>
              <Text style={styles.ServiceComponentsSetRemainderText2}>
                Next service
              </Text>
              <Text style={styles.ServiceComponentsSetRemainderText3}>
                {ServiceData.nextService}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 30,
              }}
            >
              <View style={styles.ServiceComponentsSetRemainderContainer}>
                <Text style={styles.ServiceComponentsSetRemainderText4}>
                  Set Reminder
                </Text>
                <Switch
                  trackColor={{ false: "#767577", true: "#5754ED" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                  ios_backgroundColor="#5754ED"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <Pressable
                style={styles.ServiceComponentsEdit}
                onPress={toggleCalendar}
              >
                <Image source={require("./../assets/images/Edit.png")} />
                <Text style={styles.ServiceComponentsSetRemainderText5}>
                  Edit
                </Text>
              </Pressable>
            </View>

            <View>
              {showCalendar && (
                <Calendar
                  onDayPress={(day) => {
                    // console.log("selected day", day);
                  }}
                  hideExtraDays={true}
                  hideDayNames={false}
                  markedDates={{
                    "2024-05-17": { selected: true, selectedColor: "#5754ED" },
                  }}
                  // initialDate={"2024-04-1"}
                  style={{
                    // borderWidth: 1,
                    // borderColor: "",
                    borderRadius: 10,
                    elevation: 4,
                    // height: 320,
                    // margin: 2,
                    // elevation: ,
                  }}
                />
              )}
            </View>
          </View>

          <View style={styles.ServiceComponentsSetRemainderLayout}>
            <View style={styles.ServiceComponentsPreviousService}>
              <Text style={styles.ServiceComponentsSetRemainderText2}>
                Last serviced
              </Text>
              <Text style={styles.ServiceComponentsSetRemainderText3}>
                {ServiceData.lastService}
              </Text>
              <Pressable onPress={togglePreviousServices}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: height * 0.015,
                  }}
                >
                  <Text style={styles.ServiceComponentsText6}>
                    View all previous services
                  </Text>
                  <Animated.Image
                    source={require("./../assets/images/DownArrow.png")}
                    style={{
                      marginTop: height * 0.007,
                      transform: [{ rotate: interpolatedRotateAnimation }],
                    }}
                  />
                </View>
              </Pressable>
            </View>

            {showPreviousServices && (
              <View style={styles.ServiceComponentsAllService}>
                <View>
                  {ServiceData.previousService.map((service, index) => (
                    <View key={index} style={{ marginBottom: 30 }}>
                      <Text style={styles.ServiceComponentsSetRemainderText6}>
                        {service.date}
                      </Text>
                      <View style={styles.ServiceComponentsBtnFlex}>
                        <Text style={styles.ServiceComponentsSetRemainderText7}>
                          {service.address}, {service.price}
                        </Text>

                        <View style={styles.ServiceComponentsBtn}>
                          <Text style={{ color: "#FFFFFF" }}>Details</Text>
                          <Image
                            source={require("./../assets/images/RightArrowWhite.png")}
                          />
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceComponents: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    // paddingTop: ms(15),
  },
  ServiceComponentsHeading: {
    flexDirection: "row",
    marginHorizontal: width * 0.06,
    gap: 25,
    // flex: 1,
    alignItems: "center",
  },
  ServiceComponentsContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.04,
    borderRadius: 20,
    // alignItems: "center",
    // paddingTop: height * 0.01,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.025,
    height: "auto",
  },
  ServiceComponentsText1: {
    color: "#393939BA",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 32,
    paddingLeft: width * 0.04,
  },
  ServiceComponentsImageContainer: {
    alignItems: "center",
    marginTop: height * 0.03,
  },
  ServiceComponentsImage: {
    height: height * 0.2,
    width: width * 0.45,
  },
  ServiceComponentsHeadingText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#484848",
  },
  ServiceComponentsSetRemainder: {
    marginTop: height * 0.03,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderColor: "#00000029",
    borderWidth: 1.5,
    borderRadius: 20,
    // elevation: 1.5,
    gap: 15,
    backgroundColor: "#00000003",
  },
  ServiceComponentsSetRemainderLayout: {
    marginTop: height * 0.03,
    borderColor: "#00000029",
    borderWidth: 1.5,
    borderRadius: 20,
    // elevation: 1.5,
    gap: 15,
    backgroundColor: "#00000003",
    marginBottom: 40,
  },
  ServiceComponentsPreviousService: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
  },
  ServiceComponentsSetRemainderContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderColor: "#0000001F",
    // borderWidth: 1.5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 3,
    width: "60%",
    height: height * 0.038,
    justifyContent: "space-between",
    paddingHorizontal: width * 0.03,
  },
  ServiceComponentsSetRemainderText2: {
    color: "#393939E0",
    fontSize: 20,
    fontWeight: "600",
  },
  ServiceComponentsSetRemainderText3: {
    color: "#39393991",
    fontSize: 16,
    fontWeight: "800",
  },
  ServiceComponentsSetRemainderText4: {
    color: "#5754ED",
    fontSize: 14,
    fontWeight: "500",
  },
  ServiceComponentsEdit: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ServiceComponentsSetRemainderText5: {
    color: "#5754ED",
    fontSize: 12,
    fontWeight: "500",
  },
  ServiceComponentsText6: {
    color: "#5754ED",
    fontSize: 16,
    fontWeight: "500",
  },
  ServiceComponentsAllService: {
    backgroundColor: "#0000000A",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    borderRadius: 20,
    flex: 1,
  },
  ServiceComponentsSetRemainderText6: {
    color: "#393939E0",
    fontSize: 20,
    fontWeight: "600",
  },
  ServiceComponentsSetRemainderText7: {
    color: "#5754ED91",
    fontWeight: "800",
    fontSize: 16,
  },
  ServiceComponentsBtnFlex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ServiceComponentsBtn: {
    backgroundColor: "#5754ED",
    paddingVertical: height * 0.003,
    paddingHorizontal: width * 0.025,
    width: "30%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
  },
  CalendarLayout: {
    height: height * 0.2,
  },
});
