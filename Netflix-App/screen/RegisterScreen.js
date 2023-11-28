import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false); // check mail
  const [check2, setCheck2] = useState(false); // check password
  const [check3, setCheck3] = useState(false); // check password confirmation
  const navigation = useNavigation();

  const isEmailValid = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const arePasswordsMatching = () => {
    return password === confirmPassword;
  };

  const signUp = () => {
    // Perform sign-up logic here
    // ...
    // After successful sign-up, navigate to the "Plan" screen
    navigation.navigate("Plan", {
      email: email,
      password: password,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{ height: 50, width: 120, marginTop: 20 }}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>

        <View style={{ width: 320, marginTop: 45 }}>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
            placeholderTextColor={"white"}
            style={styles.input}
          />

          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            type="password"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
            placeholderTextColor={"white"}
            style={styles.input}
          />

          <Input
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            type="password"
            secureTextEntry={true}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Confirm Password"
            placeholderTextColor={"white"}
            style={styles.input}
          />
        </View>

        <Pressable
          disabled={!email || !password || !confirmPassword}
          onPress={() => {
            setCheck(false);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);

            if (
              password.length >= 6 &&
              password.length <= 60 &&
              isEmailValid(email) &&
              arePasswordsMatching()
            ) {
              setCheck(true);
              setCheck1(false);
              setCheck2(false);
              setCheck3(false);
              signUp();
            } else {
              if (!isEmailValid(email)) {
                setCheck1(true);
              } else {
                setCheck1(false);
              }

              if (!(password.length >= 6 && password.length <= 60)) {
                setCheck2(true);
              } else {
                setCheck2(false);
              }

              if (!arePasswordsMatching()) {
                setCheck3(true);
              } else {
                setCheck3(false);
              }

              setCheck(false);
            }
          }}
          style={
            password.length >= 6
              ? styles.registerButtonActive
              : styles.registerButtonInactive
          }
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </Pressable>

        <View style={{ marginTop: 10, alignItems: "center" }}>
          {check1 && (
            <Text style={styles.errorText}>Invalid email format</Text>
          )}
          {check2 && (
            <Text style={styles.errorText}>
              Password must be 6-60 characters
            </Text>
          )}
          {check3 && <Text style={styles.errorText}>Passwords do not match</Text>}
        </View>

        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: "500",
              color: "white",
              marginTop: 12,
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 330,
    padding: 20,
    borderRadius: 5,
    color: "white",
    backgroundColor: "gray",
  },
  registerButtonActive: {
    width: 300,
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  registerButtonInactive: {
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 14,
  },
  registerButtonText: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "700",
    color: "white",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginTop: 5,
  },
});

export default RegisterScreen;
