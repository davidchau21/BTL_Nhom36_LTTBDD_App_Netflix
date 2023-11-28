import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MovieItems } from "../Context";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Headers1 = () => {
  const { profile, setProfile } = useContext(MovieItems);
  const navigation = useNavigation();
  return (
    <Animated.View
      style={{
        height: 50,
        backgroundColor: 'rgba(85,85,85,0.4)',  
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ height: 50, width: 120 }}
          source={{
            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={() => navigation.navigate("SearchHome")}>
          <AntDesign
            style={{ marginRight: 10 }}
            name="search1"
            size={24}
            color="white"
          />
          </Pressable>
          
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                borderRadius: 5,
              }}
              source={{ uri: profile.image }}
            />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  );
};

export default Headers1;
