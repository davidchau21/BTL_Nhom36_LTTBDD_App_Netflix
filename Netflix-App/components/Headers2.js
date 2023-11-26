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

const Headers2 = () => {
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
          marginTop: 13,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "500",
              marginLeft: 6,
              paddingLeft: 5,
            }}
          >
            TV Show
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
        </View>
      </View>
    </Animated.View>
  );
};

export default Headers2;

const styles = StyleSheet.create({});
