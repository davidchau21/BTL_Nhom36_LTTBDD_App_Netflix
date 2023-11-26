import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Animated,
  Text,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MovieItems } from "../Context";
import { useNavigation } from "@react-navigation/native";

export default function Headers3() {
  const { profile, setProfile } = useContext(MovieItems);
  const navigation = useNavigation();
  return (
    <Animated.View
      style={{
        height: 50,
        backgroundColor: "rgba(85,85,85,0.4)",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{ flexDirection: "row", alignItems: "center" }}
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
            Movies
          </Text>
        </Pressable>

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
}

const styles = StyleSheet.create({});
