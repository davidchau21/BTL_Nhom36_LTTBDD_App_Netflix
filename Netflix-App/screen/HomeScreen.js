import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import React from "react";
import Headers from "../components/Headers";
import TrendingComponent from "../components/TrendingComponent";
import MoviesRows from "../components/MoviesRows";
import Headers1 from "../components/Headers1";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      stickyHeaderIndices={[0]}
    >
      <Headers1 />

      <Headers />

      <TrendingComponent />

      <MoviesRows />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
