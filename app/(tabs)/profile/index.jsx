import { Text, View, StyleSheet } from "react-native";
import ProfileComponent from "../../../components/ProfileComponent";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ProfileComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    paddingTop: hp("5%"),
  },
});
