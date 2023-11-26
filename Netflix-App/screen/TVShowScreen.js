import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import MoviesRows from "../components/MoviesRows";
import Headers2 from "../components/Headers2";
import Headers from "../components/Headers";

const TVShow = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      stickyHeaderIndices={[0]}
    >
      <Headers2 />
      
      <Headers />
      
      <MoviesRows />
    </ScrollView>
  );
};

export default TVShow;

const styles = StyleSheet.create({});
