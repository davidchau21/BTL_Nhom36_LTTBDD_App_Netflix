import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
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
    signOut(auth).then(() => {
      navigation.replace("Login");
    }).catch(err => {
      console.log(err);
    })
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginLeft: 6,
          }}
        >
          Profiles and more
        </Text>
      </Pressable>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{
            width: 100,
            height: 120,
            marginTop: 20,
            resizeMode: "contain",
            alignSelf: "center",
          }}
          source={{
            uri:
              "https://brademar.com/wp-content/uploads/2022/05/Netflix-Logo-PNG.png",
          }}
        />
      </View>

      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Who's watching?
        </Text>
        <FlatList
          data={profiles}
          numColumns={2} // Đặt số cột thành 2
          renderItem={({ item }) => (
            <Pressable style={{ margin: 10, padding: 20, flex: 1 }}>
              <Image
                style={{
                  width: 110,
                  height: 110,
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
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <Pressable onPress={signOutUser}>
        <Text style={{fontSize:16, textAlign:"center", color:"gray", marginTop:15}}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
