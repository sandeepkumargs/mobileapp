import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import TpmsData from "./../data/TpmsData.json";
import { StatusBar } from "expo-status-bar";

var { width, height } = Dimensions.get("window");
export default function TpmsComponent() {
  const navigation = useNavigation();
  return (
    <View style={styles.TpmsComponent}>
      <View style={styles.TpmsComponentHeading}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: "500", color: "#484848" }}>
          TPMS
        </Text>
      </View>
      <View style={styles.TpmsComponentContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.TpmsComponentText1}>{TpmsData.vehicleNum}</Text>
          <Text style={styles.TpmsComponentText2}>
            {TpmsData.Date}, {TpmsData.Time}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            height: height * 0.06,
            justifyContent: "center",
          }}
        >
          {(TpmsData.ForntPressure < 25 || TpmsData.BackPressure < 25) &&
          (TpmsData.FrontTemperature > 40 || TpmsData.BackTemperature > 40) ? (
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.TpmsComponentText3, { color: "#E7B60A" }]}>
                Tyre pressure is low
              </Text>
              <Text style={[styles.TpmsComponentText3, { color: "#C1443C" }]}>
                Tyre temperature is high
              </Text>
            </View>
          ) : TpmsData.ForntPressure < 25 || TpmsData.BackPressure < 25 ? (
            <Text style={[styles.TpmsComponentText3, { color: "#E7B60A" }]}>
              Tyre pressure is low
            </Text>
          ) : TpmsData.FrontTemperature > 40 ||
            TpmsData.BackTemperature > 40 ? (
            <Text style={[styles.TpmsComponentText3, { color: "#C1443C" }]}>
              Tyre temperature is high
            </Text>
          ) : (
            <Text style={[styles.TpmsComponentText3, { color: "#0000009E" }]}>
              Tyres are in good condition
            </Text>
          )}
        </View>
        <View
          style={[
            styles.TpmsComponentIconsFlex,
            { height: height * 0.055, paddingTop: height * 0.01 },
          ]}
        >
          <View
            style={{
              width: "50%",
              alignItems: "center",
            }}
          >
            {TpmsData.ForntPressure < 25 ? (
              <View
                style={[
                  styles.TpmsComponentIcons,
                  { backgroundColor: "#E7B60A" },
                ]}
              >
                <Image
                  source={require("./../assets/images/PressureWarning.png")}
                />
              </View>
            ) : null}
          </View>
          <View
            style={{
              width: "50%",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {TpmsData.FrontTemperature > 40 ? (
              <View
                style={[
                  styles.TpmsComponentIcons,
                  { backgroundColor: "#C1443C" },
                ]}
              >
                <Image
                  source={require("./../assets/images/TemperatureWarning.png")}
                />
              </View>
            ) : null}
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "baseline",
            // marginTop: height * 0.02,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 5 }}
          >
            <Text
              style={[
                styles.TpmsComponentText4,
                TpmsData.ForntPressure < 25 && { color: "#E7B60A" },
              ]}
            >
              {TpmsData.ForntPressure}
            </Text>
            <Text
              style={[
                styles.TpmsComponentText5,
                TpmsData.ForntPressure < 25 && { color: "#E7B60A" },
              ]}
            >
              PSI
            </Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.TpmsComponentText4,
                TpmsData.FrontTemperature > 40 && { color: "#C1443C" },
              ]}
            >
              {TpmsData.FrontTemperature}
            </Text>
            <Text
              style={[
                styles.TpmsComponentText5,
                { paddingTop: height * 0.01 },
                TpmsData.FrontTemperature > 40 && { color: "#C1443C" },
              ]}
            >
              o c
            </Text>
          </View>
        </View>

        {/* <Image source={require("./../assets/images/HeadlightShadow.png")} /> */}
        <Image
          source={require("./../assets/images/TpmsBike.png")}
          style={{
            height: height * 0.41,
            width: width * 0.6,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "baseline",
            marginTop: height * 0.02,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 5 }}
          >
            <Text
              style={[
                styles.TpmsComponentText4,
                TpmsData.BackPressure < 25 && { color: "#E7B60A" },
              ]}
            >
              {TpmsData.BackPressure}
            </Text>
            <Text
              style={[
                styles.TpmsComponentText5,
                TpmsData.BackPressure < 25 && { color: "#E7B60A" },
              ]}
            >
              PSI
            </Text>
          </View>

          <View style={styles.verticalDivider} />

          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.TpmsComponentText4,
                TpmsData.BackTemperature > 40 && { color: "#C1443C" },
              ]}
            >
              {TpmsData.BackTemperature}
            </Text>
            <Text
              style={[
                styles.TpmsComponentText5,
                { paddingTop: height * 0.01 },
                TpmsData.BackTemperature > 40 && { color: "#C1443C" },
              ]}
            >
              o c
            </Text>
          </View>
        </View>
        <View style={styles.TpmsComponentIconsFlex}>
          <View
            style={{
              width: "50%",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {TpmsData.BackPressure < 25 ? (
              <View
                style={[
                  styles.TpmsComponentIcons,
                  { backgroundColor: "#E7B60A" },
                ]}
              >
                <Image
                  source={require("./../assets/images/PressureWarning.png")}
                />
              </View>
            ) : null}
          </View>
          <View
            style={{
              width: "50%",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            {TpmsData.BackTemperature > 38 ? (
              <View
                style={[
                  styles.TpmsComponentIcons,
                  { backgroundColor: "#C1443C" },
                ]}
              >
                <Image
                  source={require("./../assets/images/TemperatureWarning.png")}
                />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TpmsComponentHeading: {
    flexDirection: "row",
    marginHorizontal: width * 0.06,
    gap: 25,
    alignItems: "center",
  },
  TpmsComponent: {
    flex: 1,
  },
  TpmsComponentContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.04,
    borderRadius: 20,
    alignItems: "center",
    paddingTop: height * 0.01,
  },
  TpmsComponentText1: {
    color: "#3939399C",
    // lineHeight: 22,
    fontWeight: "500",
    fontSize: height * 0.017,
  },
  TpmsComponentText2: {
    color: "#3939399C",
    fontWeight: "500",
    // lineHeight: 32,
    fontSize: height * 0.018,
  },
  TpmsComponentText3: {
    fontSize: height * 0.023,
    fontWeight: "600",
  },
  verticalDivider: {
    borderLeftWidth: 1,
    borderColor: "#00000042",
    height: "45%",
  },
  TpmsComponentText4: {
    fontSize: height * 0.05,
    fontWeight: "600",
    color: "#000000B0",
  },
  TpmsComponentText5: {
    color: "#000000B0",
    fontSize: 12,
    fontWeight: "500",
  },
  TpmsComponentIconsFlex: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: width * 0.035,
    marginTop: height * 0.01,
    width: "70%",
  },
  TpmsComponentIcons: {
    // backgroundColor: "#E7B60A",
    width: width * 0.1,
    height: height * 0.05,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    elevation: 4,
  },
});
