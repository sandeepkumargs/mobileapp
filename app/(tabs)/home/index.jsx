import {
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FontAwesome } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeComponents from "./../../../components/HomeComponents";
import { useNavigation } from "expo-router";

export default function TabOneScreen() {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "transparent",
            width: "80%",
            alignItems: "center",
          }}
        >
          <Text style={styles.text}>KA 05 M 4500</Text>
          <Text style={{ color: "grey", fontWeight: "400" }}>
            Last synced 2 hrs ago
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <View
            style={{
              borderRadius: 50,
              height: vs(30),
              width: s(30),
              alignItems: "center",
              justifyContent: "center",
              // marginLeft: s(150),
            }}
          >
            <Image source={require("../../../assets/images/BellIcon.png")} />
          </View>
        </Pressable>
      </View>

      <LinearGradient
        colors={["#C9C6C6", "#F1F2F6"]}
        style={styles.background}
      />

      <Image
        source={require("../../../assets/images/electric_bike.png")} // Replace the path with the actual path to your image
        style={{ width: s(250), height: vs(200), marginTop: vs(50), zIndex: 1 }} // Set the desired width and height for your image
      />

      <View
        style={{
          backgroundColor: "white",
          height: vs(355),
          width: "90%",
          marginTop: vs(-25),
          borderRadius: 15,
          marginHorizontal: s(20),
        }}
      >
        <HomeComponents />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: ms(35),
  },
  text: {
    color: "#484848",
    fontSize: 24,
    fontWeight: "900",
  },
  background: {
    height: vs(290),
    width: s(290),
    borderRadius: 200,
    opacity: 30,
    position: "absolute",
    marginTop: ms(120),
  },
});
