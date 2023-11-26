import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import dataMovies from "../data/dataMovies";
import MoviesRows from "../components/MoviesRows";

export default function ComingSoonScreen() {
  const navigation = useNavigation();
  const [selectedVideo, setSelectedVideo] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [posterUrl, setPosterUrl] = useState({});
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [imgs, setImgs] = useState([]);
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
    // Select multiple random videos on each render
    const randomIndices = Array.from({ length: 2 }, () =>
      Math.floor(Math.random() * dataMovies.length)
    );
    const randomVideos = randomIndices.map((index) => dataMovies[index]);

    setSelectedVideos(randomVideos);
    setImgs(randomVideos.map((video) => video?.thumb));
  }, []);
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
  const renderImageAndText = (img, title, time) => (
      <View style={{ flexDirection: "row" }}>
        <Image
          source={img}
          style={{
            width: 100,
            height: 100,
            marginLeft: 15,
            marginTop: 5,
            marginBottom: 5,
          }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "white",
              marginLeft: 15,
            }}
          >
            {title}
          </Text>
          <Text style={{ fontSize: 15, color: "white", marginLeft: 15 }}>
            {time}
          </Text>
        </View>
      </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop:10 }}>
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
      <ScrollView style={{ flex: 1, backgroundColor: "black"}}>
      <View style={{ flexDirection: "column", backgroundColor: "gray", marginTop:15, marginBottom:20 }}>
        {selectedVideos.map((video, index) => (
          <React.Fragment key={index}>
            {renderImageAndText(imgs[index], video?.title, video?.time)}
          </React.Fragment>
        ))}
      </View>
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
        <View style={styles.progressContainer}>
          <Text style={{ fontSize: 15, color: "white" }}>{description}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 15,
          }}
        >
          <View style={{marginLeft:20}}>
            <AntDesign
              style={{ textAlign: "center", }}
              name="bells"
              size={24}
              color="white"
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "white",
                marginTop: 3,
               
              }}
            >
              Remind Me
            </Text>
          </View>

          <View>
            <AntDesign
              style={{ textAlign: "center" }}
              name="sharealt"
              size={24}
              color="white"
            />
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                color: "white",
                marginTop: 3,
                marginLeft: 10,
              }}
            >
              Share
            </Text>
          </View>
        </View>

        <Pressable
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.navigate("PlayVideo");
          }}
        >
          <MoviesRows />
        </Pressable>
      </ScrollView>
    </View>
  );
}

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
