import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
var { width, height } = Dimensions.get("window");

export default function DocumentsComponents() {
  const navigation = useNavigation();

  return (
    <View style={styles.DocumentsComponentsContainer}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={styles.DocumentsComponentsHeading}>Documents</Text>
      </View>
      <View style={styles.DocumentsComponentsLayout}>
        <View style={styles.DocumentsComponentsWarning}>
          <Text style={styles.DocumentsComponentsText1}>
            Documents added here will be displayed on your scooter dashboard
          </Text>
          <Text style={styles.DocumentsComponentsText1}>
            Images should be in JPG or PNG format only
          </Text>
        </View>
        <View style={styles.DocumentsComponentsContent}>
          <View>
            <Text
              style={{
                color: "#484848",
                fontWeight: "600",
                fontSize: 20,
                lineHeight: 32,
              }}
            >
              Driving License
            </Text>
            <View style={styles.DocumentsComponentsImage}>
              <Image source={require("./../assets/images/Documents.png")} />
              <Image source={require("./../assets/images/Documents.png")} />
              <View style={styles.DocumentsComponentsPlus}>
                <Image source={require("./../assets/images/Plus.png")} />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#484848",
                fontWeight: "600",
                fontSize: 20,
                lineHeight: 32,
              }}
            >
              Registration certificate
            </Text>
            <View style={styles.DocumentsComponentsImage}>
              <Image source={require("./../assets/images/Documents.png")} />
              <Image source={require("./../assets/images/Documents.png")} />
              <View style={styles.DocumentsComponentsPlus}>
                <Image source={require("./../assets/images/Plus.png")} />
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                color: "#484848",
                fontWeight: "600",
                fontSize: 20,
                lineHeight: 32,
              }}
            >
              Insurance
            </Text>
            <View style={styles.DocumentsComponentsImage}>
              <Image source={require("./../assets/images/Documents.png")} />
              <Image source={require("./../assets/images/Documents.png")} />
              <View style={styles.DocumentsComponentsPlus}>
                <Image source={require("./../assets/images/Plus.png")} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DocumentsComponentsContainer: {
    marginHorizontal: width * 0.06,
    backgroundColor: "#EFEFEF",
    flex: 1,
  },
  DocumentsComponentsHeading: {
    color: "#484848",
    fontSize: height * 0.027,
  },
  DocumentsComponentsLayout: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flex: 1,
    marginVertical: height * 0.03,
  },
  DocumentsComponentsWarning: {
    height: height * 0.17,
    backgroundColor: "#5754ED0D",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: 20,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    // alignItems: "center",
    justifyContent: "space-around",
  },
  DocumentsComponentsText1: {
    color: "#0000005E",
    fontSize: 17,
    fontWeight: "800",
    lineHeight: 22,
  },
  DocumentsComponentsContent: {
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.06,
    flex: 1,
    gap: 20,
  },
  DocumentsComponentsImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.02,
  },
  DocumentsComponentsPlus: {
    width: width * 0.1,
    height: height * 0.05,
    borderColor: "#5754EDB2",
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
