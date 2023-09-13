import { Platform } from "react-native";
import MobileHomeScreen from "./mobile/MobileHomeScreen";
import WebHomeScreen from "./web/WebHomeScreen";

const HomeScreen = () => {
  if (Platform.OS === "web") {
    return <WebHomeScreen />;
  } else {
    return <MobileHomeScreen />;
  }
};

export default HomeScreen;
