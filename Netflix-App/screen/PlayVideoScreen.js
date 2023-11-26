import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import dataMovies from "../data/dataMovies";
import MoviesRows from "../components/MoviesRows";

const PlayVideoScreen = () => {
  const navigation = useNavigation();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [posterUrl, setPosterUrl] = useState({});


  const _handleVideoRef = (component) => {
    // ... your implementation
  };

  const downloadVideo = () => {
    // ... your implementation
  };

  const playVideo = () => {
    // ... your implementation
  };

  useEffect(() => {
    // Select a random video on each render
    const randomIndex = Math.floor(Math.random() * dataMovies.length);
    const randomVideo = dataMovies[randomIndex];

    setSelectedVideo(randomVideo);
    setVideoUrl(randomVideo?.sources[0]);
    setDescription(randomVideo?.description);
    setTitle(randomVideo?.title);
    setTime(randomVideo?.time);
    setPosterUrl(randomVideo?.thumb);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
      }}>
        <View style={{ marginLeft: 5 }}>
          <AntDesign name="arrowleft" size={24} color="white" onPress={() => { navigation.goBack() }} />
        </View>
        <View style={{ marginRight: 5 }}>
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: videoUrl }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            shouldPlay={true}
            isLooping={false}
            useNativeControls
            videoStyle={{ width: "100%", height: "100%" }}
            ref={_handleVideoRef}
            style={styles.video}
            usePoster={true}
            posterStyle={{ resizeMode: "contain" }}
            posterSource={{ uri: posterUrl }}

          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {title}
          </Text>
          <Text style={{ fontSize: 15, color: "white" }}>{time}</Text>
        </View>
        <View style={styles.controls}>
          <Pressable
            style={{
              backgroundColor: "white",
              padding: 8,
              width: 380,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
            onPress={playVideo}
          >
            <Entypo name="controller-play" size={24} color="black" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
                marginLeft: 10,
              }}
            >
              Play
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "gray",
              padding: 8,
              width: 380,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
            onPress={downloadVideo}
          >
            <Entypo name="download" size={24} color="white" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Download
            </Text>
          </Pressable>

        </View>
        <View style={styles.progressContainer}>
          <Text style={{ fontSize: 15, color: "white" }}>{description}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 15,
          }}
        >
          <View>
            <AntDesign
              style={{ textAlign: "center" }}
              name="plus"
              size={24}
              color="white"
            />
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white", marginTop: 3 }}>
              My List
            </Text>
          </View>

          <Pressable
            style={{
              textAlign: "center",
            }}
            // onPress={() => navigation.navigate("PlayVideo")}
          >
            <AntDesign name="like2" size={24} color="white" />
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Like
            </Text>
          </Pressable>

          <View>
            <AntDesign
              style={{ textAlign: "center" }}
              name="sharealt"
              size={24}
              color="white"
            />
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white", marginTop: 3 }}>
              Share
            </Text>
          </View>
        </View>

        <Pressable style={{marginTop:10}} onPress={() => { navigation.navigate('PlayVideo') }}>
          <MoviesRows />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default PlayVideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  videoContainer: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
  video: {
    flex: 1,
  },
  controls: {
    alignItems: "center",
    marginTop: 10,
  },
  progressContainer: {
    marginTop: 5,
  },
});
