import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Image
            style={{
              width: 100,
              height: 120,
              marginTop: -30,
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={{
              uri: "https://brademar.com/wp-content/uploads/2022/05/Netflix-Logo-PNG.png",
            }}
          />
        </View>
        <View style={{ width: 370, marginTop: 50 }}>
          <Input
            value={input}
            onChangeText={(text) => setInput(text)}
            type="email"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
            placeholderTextColor="white"
            style={{
              width: 330,
              padding: 20,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
          <Input
            value={password}
            onChangeText={(text) => setPassword(text)}
            type="password"
            secureTextEntry="true"
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
            placeholderTextColor="white"
            style={{
              width: 330,
              padding: 20,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />
        </View>

        <Pressable
        onPress={() => navigation.navigate("Plan", {
          email: input,
          password: password,
        })}
          style={
            password.length > 4
              ? {
                  backgroundColor: "red",
                  width: 350,
                  marginLeft: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }
              : {
                  width: 350,
                  marginLeft: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "white",
                  borderWidth: 2,
                  padding: 20,
                }
          }
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "white",
            }}
          >
            Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
