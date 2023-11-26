import React, { useState, useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Animated,
  Text,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import dataMovies from "../data/dataMovies";

export default function ComingSoonScreen({ navigation }) {
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    // Select multiple random videos on each render
    const randomIndices = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * dataMovies.length)
    );
    const randomVideos = randomIndices.map((index) => dataMovies[index]);

    setSelectedVideos(randomVideos);
    setImgs(randomVideos.map((video) => video?.thumb));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <View style={{ marginLeft: 5 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={{ marginRight: 5 }}>
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="notifications-circle-outline"
          size={30}
          color="red"
          style={{ marginLeft: 15 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginLeft: 10,
          }}
        >
          Notifications
        </Text>
      </View>

      <View style={{ flexDirection: "row", backgroundColor:'gray'}}>
        
        <View style={{ flexDirection: "column" }}>
          {imgs.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={{ width: 100, height: 100, marginLeft: 15, marginTop: 5, marginBottom: 5 }}
            />
          ))}
        </View>

        <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            marginLeft: 15,
          }}
        >
            {selectedVideos.map((video) => video?.title).join(", ")}
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: "white",
            marginLeft: 15,
          }}
        >
            {selectedVideos.map((video) => video?.time).join(", ")}
        </Text>
        </View>
        

      </View>
    </View>
  );
}
