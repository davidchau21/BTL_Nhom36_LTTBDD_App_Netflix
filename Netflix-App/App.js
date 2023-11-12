import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { ProfileContext } from "./Context";
// import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <>
      <ProfileContext>
        {/* <StripeProvider publishableKey='pk_test_51O9NOIF0aMzA361sT3T4aJveffQH38RrAo1wOL1P3gSEo1n3kh1bwbyKCAyBeVxG9fa6YAa1bF0V9u0B0SSQta3Z002FXWdRE3'> */}
        <StackNavigator />
        <StatusBar style="light" />
        {/* </StripeProvider> */}
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
