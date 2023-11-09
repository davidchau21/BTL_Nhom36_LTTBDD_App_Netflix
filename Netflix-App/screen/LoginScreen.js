import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  console.log(input);
  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(!user) {
        setLoading(false); // true thì loading
      }
      if (user) {
        navigation.navigate("Profile");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, input, password).then(
      (userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        console.log("logged in with", user.email);
      }
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black", padding: 10 }}>
      <KeyboardAvoidingView>
        {loading ? (
          <View style={{flex:1, alignItems:"center", backgroundColor:"black", marginTop:"300px"}}>
            <Text style={{textAlign:"center", color:"white", fontSize:15, fontWeight:"500"}}>Loading...</Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ): (
          <>
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
              uri:
                "https://brademar.com/wp-content/uploads/2022/05/Netflix-Logo-PNG.png",
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
          onPress={signIn}
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
            Sign In
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: "500",
              color: "white",
              marginTop: 12,
            }}
          >
            Don't have an account? Sign up now
          </Text>
        </Pressable>
          </>
        )}
        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
