import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { MovieItems } from "../Context";
export default function MoreScreen() {
  const navigation = useNavigation();
  const { profile, setProfile } = useContext(MovieItems);
  console.log("selected profile: ", profile);
  const profiles = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
      name: "Pranav",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
      name: "Sujan",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
      name: "Kiran",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
      name: "Samarth",
    },
  ];
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <FlatList
          numColumns={4}
          data={profiles}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                setProfile(item);
                navigation.navigate("Loading");
              }}
              style={{ marginHorizontal: 2, marginTop: 20 }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 7,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 15,
                  fontWeight: "500",
                  marginTop: 10,
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <View style={{ height: 150, backgroundColor: "#1A1A1A", marginTop: 50 }}>
        <View style={{ marginTop: 20, marginLeft: 10 }}>
          <Ionicons name="chatbox-ellipses-outline" size={35} color="white" />
          <Text
            style={{
              position: "absolute",
              fontSize: 25,
              fontWeight: "bold",
              color: "#ffffff",
              paddingLeft: 45,
            }}
          >
            Tell friends about Netflix.
          </Text>
          <Text style={{ fontSize: 11, color: "#ffffff" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam
            dui, vivamus{"\n"}bibendum ut. A morbi mi tortor ut felis non
            accumsan accumsan quis. Massa,
          </Text>
          <Text style={{ fontSize: 12, color: "#ffffff", paddingTop: 30 }}>
            Terms & Conditions
          </Text>
        </View>
      </View>
      <View style={{ height: 100, backgroundColor: "#1A1A1A", marginTop: 50 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 25,
            marginLeft: 10,
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#2CB742",
              borderRadius: 15,
            }}
          >
            <Image
              style={{ width: 45, height: 45, marginLeft: 2, marginTop: 2 }}
              source={require("../assets/img/phone.png")}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#395185",
              borderRadius: 15,
            }}
          >
            <Image
              style={{ width: 45, height: 45, marginLeft: 2, marginTop: 2 }}
              source={require("../assets/img/facebook.png")}
            />
          </View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#ffffff",
              borderRadius: 15,
            }}
          >
            <Image
               style={{ width: 45, height: 45, marginLeft: 2, marginTop: 2 }}
              source={require("../assets/img/gmail.png")}
            />
          </View>
          <View style={{ marginTop: -15 }}>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={40}
              color="white"
            />
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#ffffff", marginLeft: -9}}
            >
              More
            </Text>
          </View>
        </View>
      </View>
      <Pressable onPress={signOutUser}>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "gray",
            marginTop: 25,
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
