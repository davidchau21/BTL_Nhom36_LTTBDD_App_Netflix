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
<<<<<<< HEAD
        {/* <StripeProvider publishableKey='sk_test_51O9NOIF0aMzA361sP5z9zmYptXEqYa3RG0xPSXlw26Yfb6K1oJw4vUaHh66e3fi8YdyugJGIIKHqU4cQMdzaff5Q00zDYlpBPv'> */}
=======
>>>>>>> 96405c542f078f9e0a0000302a4bf878e5bc3263
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
