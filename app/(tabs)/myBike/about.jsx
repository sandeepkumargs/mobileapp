import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useLayoutEffect,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { s, vs, ms, mvs } from "react-native-size-matters";

export default function About() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.aboutContainer}>
      <View style={styles.aboutContainerHeading}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../../../assets/images/BackButton.png")} />
        </Pressable>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            lineHeight: 32,
            color: "#484848",
          }}
        >
          About Bike
        </Text>
      </View>
      <View style={styles.aboutContainerLayout}>
        <View style={{ margin: ms(20) }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "800",
              lineHeight: 22,
              color: "#393939BA",
            }}
          >
            KA 05 M 4500
          </Text>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <Image
              source={require("./../../../assets/images/About_BikePreview.png")}
            />
          </View>
          <View style={{ marginTop: 25, gap: vs(15) }}>
            <View>
              <Text style={styles.aboutText1}>Purchased On</Text>
              <Text style={styles.aboutText2}>10 JAN, 2024</Text>
            </View>

            <View>
              <Text style={styles.aboutText1}>Distance Travelled</Text>
              <Text style={styles.aboutText2}>21,000 km</Text>
            </View>

            <View>
              <Text style={styles.aboutText1}>Software Version</Text>
              <Text style={styles.aboutText2}>2.0.0</Text>
            </View>

            <View>
              <Text style={styles.aboutText1}>Application Version</Text>
              <Text style={styles.aboutText2}>2.0.0</Text>
            </View>

            <View>
              <Text style={styles.aboutText1}>Chassis Number</Text>
              <Text style={styles.aboutText2}>RDFR4567TTT32128</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingTop: vs(40),
  },
  aboutContainerHeading: {
    flexDirection: "row",
    gap: 30,
    alignItems: "center",
    marginHorizontal: ms(20),
  },
  aboutContainerLayout: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: ms(20),
    marginVertical: ms(30),
    borderRadius: 20,
  },
  aboutText1: {
    color: "#00000087",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 32,
  },
  aboutText2: {
    color: "#484848DE",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 32,
  },
});
