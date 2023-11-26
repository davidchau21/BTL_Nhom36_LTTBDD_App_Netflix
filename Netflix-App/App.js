import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ProfileContext } from "./Context";
// import { StripeProvider } from "@stripe/stripe-react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {
  return (
    <>
      <ProfileContext>
        <StackNavigator />
        <StatusBar style="light" />
      
      </ProfileContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
