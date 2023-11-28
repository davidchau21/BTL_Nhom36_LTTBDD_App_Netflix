import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyLists from "../components/MyLists";
import TopSearch from "../components/TopSearch";

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      stickyHeaderIndices={[0]}
    >
      <View style={{ backgroundColor: "black", height: 99 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10, marginLeft: 10, backgroundColor: "black" }}
        >
          <Ionicons name="arrow-back" size={30} color="#ffffff" />
        </TouchableOpacity>
        <View>
          <View style={{ marginTop: 30 }}>
            <View style={styles.inputContainer}>
              <TextInput
                style={[
                  styles.input,
                  { color: isFocused ? "#ffffff" : "#141414" },
                ]}
                placeholder="Search for a show, movie, genre, e.t.c."
                placeholderTextColor="#141414"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <Ionicons
                name="search"
                size={30}
                color="#ffffff"
                style={{ position: "absolute", left: 10 }}
              />
              <Ionicons
                name="mic-outline"
                size={30}
                color="#ffffff"
                style={{ position: "absolute", paddingRight: 15 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 12 }}>
        <TopSearch />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    width: "100%",
    marginTop: 200,
    marginTop: -25,
    borderColor: "transparent",
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 45,
    fontSize: 17,
    lineHeight: 21.09,
    color: "#141414",
    // fontWeight: "bold",
  },
});
