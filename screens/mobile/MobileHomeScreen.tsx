import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
// import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const MobileHomeScreen = () => {
  const API_KEY = process.env.API_KEY;
  return (
    <SafeAreaView>
      <GooglePlacesAutocomplete
        placeholder="Where to?"
        styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
        query={{
          key: "AIzaSyCgO6-lmZK2k7lpWIsmUlx__lOxIutWVxc",
          language: "en",
        }}
        enablePoweredByContainer={false}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        fetchDetails={true}
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details?.geometry);
        }}
      />
      {/* <NavOptions /> */}
    </SafeAreaView>
  );
};

export default MobileHomeScreen;

const styles = StyleSheet.create({});
