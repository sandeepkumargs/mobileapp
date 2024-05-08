// import {
//   Dimensions,
//   Pressable,
//   StyleSheet,
//   View,
//   Image,
//   Text,
// } from "react-native";
// import { useRef, useState } from "react";
// import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import ChargeStationImage from "./../assets/images/ChargeStation.png";
// import MyBikeIcon from "./../assets/images/MyBike.png";
// import serviceIcon from "./../assets/images/Service.png";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { useNavigation } from "expo-router";
// const data = require("../data/MapData.json");

// var { width, height } = Dimensions.get("window");

// export default function MapComponents() {
//   const bikeLocation = data.bikeLocation;
//   const chargeStationCoordinates = data.chargeStations;
//   const serviceStationCoordinates = data.serviceStaions;
//   const mapRef = useRef();
//   const navigation = useNavigation();

//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const handlePlaceSelected = (place) => {
//     // Extract latitude and longitude from the selected place
//     const { description, geometry } = place;
//     const { location } = geometry;

//     // Update the state with the selected location
//     setSelectedLocation({
//       description,
//       latitude: location.lat,
//       longitude: location.lng,
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
//         <Pressable onPress={() => navigation.goBack()}>
//           <Image source={require("./../assets/images/BackButton.png")} />
//         </Pressable>
//         <Text style={styles.MapComponentsHeading}>Trip</Text>
//       </View>
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           paddingHorizontal: width * 0.04,
//           marginTop: 15,
//         }}
//       >
//         <View style={{ flexDirection: "row", gap: 10 }}>
//           <Image source={require("./../assets/images/chargercon.png")} />
//           <Text style={{ color: "#484848", fontSize: 14, fontWeight: "500" }}>
//             Find a charger
//           </Text>
//         </View>
//         <View style={{ flexDirection: "row", gap: 10 }}>
//           <Image source={require("./../assets/images/miniScooterIcon.png")} />
//           <Text style={{ color: "#484848", fontSize: 14, fontWeight: "500" }}>
//             Locate my scooter
//           </Text>
//         </View>
//       </View>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: bikeLocation.latitude,
//           longitude: bikeLocation.longitude,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         ref={mapRef}
//       >
//         <Marker coordinate={bikeLocation} image={MyBikeIcon} />
//         {chargeStationCoordinates.map((coordinate, index) => (
//           <Marker
//             key={index}
//             coordinate={coordinate}
//             image={ChargeStationImage}
//           />
//         ))}
//         {serviceStationCoordinates.map((coordinate, index) => (
//           <Marker key={index} coordinate={coordinate} image={serviceIcon} />
//         ))}
//         {/* Render marker if a location is selected */}
//         {selectedLocation && (
//           <>
//             <MapViewDirections
//               origin={bikeLocation}
//               destination={{
//                 latitude: selectedLocation.latitude,
//                 longitude: selectedLocation.longitude,
//               }}
//               apikey="AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk"
//               strokeWidth={5}
//               strokeColor="#5754ED"
//               optimizeWaypoints={true}
//               onReady={(result) => {
//                 mapRef.current.fitToCoordinates(result.coordinates, {
//                   edgePadding: {
//                     right: 30,
//                     bottom: 150,
//                     left: 30,
//                     top: 100,
//                   },
//                 });
//               }}
//             />
//             <Marker coordinate={selectedLocation} />
//           </>
//         )}
//       </MapView>

//       {/* GooglePlacesAutocomplete component */}
//       <View style={styles.search}>
//         <GooglePlacesAutocomplete
//           placeholder="Search"
//           onPress={(data, details = null) => {
//             // 'details' contains information about the selected place
//             handlePlaceSelected(details);
//           }}
//           query={{
//             key: "AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk",
//             language: "en",
//           }}
//           fetchDetails
//           styles={{
//             textInputContainer: {
//               width: "80%",
//             },
//             textInput: {
//               height: 30,
//               color: "#5d5d5d",
//               fontSize: 14,
//             },
//             // predefinedPlacesDescription: {
//             //   color: "red ",
//             // },
//           }}
//           enablePoweredByContainer={false}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     // justifyContent: "flex-end",
//     // alignItems: "center",
//     marginTop: 50,
//     paddingHorizontal: width * 0.055,

//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//     marginHorizontal: width * 0.055,
//     marginTop: height * 0.1,
//     marginBottom: height * 0.03,
//   },
//   search: {
//     ...StyleSheet.absoluteFillObject,
//     marginTop: height * 0.11,
//     alignItems: "center",
//   },
//   MapComponentsHeading: {
//     color: "#484848",
//     fontSize: 20,
//     fontWeight: "500",
//   },
// });

import {
  Dimensions,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";
import { useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import ChargeStationImage from "./../assets/images/ChargeStation.png";
import MyBikeIcon from "./../assets/images/MyBike.png";
import serviceIcon from "./../assets/images/Service.png";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "expo-router";
import MapCard from "./MapCard";
const data = require("../data/MapData.json");

var { width, height } = Dimensions.get("window");

export default function MapComponents() {
  const bikeLocation = data.bikeLocation;
  const chargeStationCoordinates = data.chargeStations;
  const serviceStationCoordinates = data.serviceStaions;
  const mapRef = useRef();
  const navigation = useNavigation();

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handlePlaceSelected = (place) => {
    // Extract latitude and longitude from the selected place
    const { description, geometry } = place;
    const { location } = geometry;

    // Update the state with the selected location
    setSelectedLocation({
      description,
      latitude: location.lat,
      longitude: location.lng,
    });
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("./../assets/images/BackButton.png")} />
        </Pressable>
        <Text style={styles.MapComponentsHeading}>Trip</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: width * 0.04,
          marginTop: 15,
        }}
      >
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={require("./../assets/images/chargercon.png")} />
          <Text style={{ color: "#484848", fontSize: 14, fontWeight: "500" }}>
            Find a charger
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Image source={require("./../assets/images/miniScooterIcon.png")} />
          <Text style={{ color: "#484848", fontSize: 14, fontWeight: "500" }}>
            Locate my scooter
          </Text>
        </View>
      </View>
      <View style={styles.search}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' contains information about the selected place
            handlePlaceSelected(details);
          }}
          query={{
            key: "AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk",
            language: "en",
          }}
          fetchDetails
          styles={{
            textInputContainer: {
              width: "100%",
              backgroundColor: "#01163866",
              padding: 10,
              borderBottomColor: "#FFFFFF",
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              borderWidth: 2,
            },
            textInput: {
              height: 30,
              color: "#484848",
              fontSize: 14,
              backgroundColor: "#F2F2F2CC",
              borderRadius: 8,
            },
            // predefinedPlacesDescription: {
            //   color: "red ",
            // },
          }}
          enablePoweredByContainer={false}
        />
      </View>
      <View style={styles.map}>
        <MapView
          initialRegion={{
            latitude: bikeLocation.latitude,
            longitude: bikeLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          ref={mapRef}
          style={{ ...StyleSheet.absoluteFillObject }}
        >
          <Marker coordinate={bikeLocation} image={MyBikeIcon} />
          {chargeStationCoordinates.map((coordinate, index) => (
            <Marker
              key={index}
              coordinate={coordinate}
              image={ChargeStationImage}
            />
          ))}
          {serviceStationCoordinates.map((coordinate, index) => (
            <Marker key={index} coordinate={coordinate} image={serviceIcon} />
          ))}
          {/* Render marker if a location is selected */}
          {selectedLocation && (
            <>
              <MapViewDirections
                origin={bikeLocation}
                destination={{
                  latitude: selectedLocation.latitude,
                  longitude: selectedLocation.longitude,
                }}
                apikey="AIzaSyAVS4xGW0ICI3MCwmMWPXFmDydNFr5p0Pk"
                strokeWidth={5}
                strokeColor="#5754ED"
                optimizeWaypoints={true}
                onReady={(result) => {
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 150,
                      left: 30,
                      top: 100,
                    },
                  });
                }}
              />
              <Marker coordinate={selectedLocation} />
            </>
          )}
        </MapView>
        {/* <MapCard /> */}
      </View>

      {/* GooglePlacesAutocomplete component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
    // marginTop: 50,
    paddingHorizontal: width * 0.055,
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    marginHorizontal: width * 0.01,
    marginTop: height * 0.022,
    marginBottom: height * 0.03,
    height: height * 0.87,
    borderRadius: 15,
    overflow: "hidden",
    elevation: 3,
    // backgroundColor: "red",
  },
  search: {
    ...StyleSheet.absoluteFillObject,
    marginTop: height * 0.1,
    alignItems: "center",
    // backgroundColor: "#01163866",
    zIndex: 1,
    overflow: "hidden",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginHorizontal: width * 0.063,
  },
  MapComponentsHeading: {
    color: "#484848",
    fontSize: 20,
    fontWeight: "500",
  },
});
