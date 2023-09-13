import React, { useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const WebHomeScreen = () => {
  // const API_KEY = process.env.API_KEY;
  const [value, setValue] = useState(null);

  const handleAddress = (event: any) => {
    geocodeByAddress(event.value["description"])
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        console.log("Successfully got latitude and longitude", { lat, lng })
      );
  };
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCgO6-lmZK2k7lpWIsmUlx__lOxIutWVxc"
        selectProps={{
          onChange: (event) => {
            console.log(event);
            setValue(event?.value);
            handleAddress(event);
          },
        }}
        autocompletionRequest={{
          componentRestrictions: {
            country: ["us"],
          },
        }}
      />
    </div>
  );
};

export default WebHomeScreen;
