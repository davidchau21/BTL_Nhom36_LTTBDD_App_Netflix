import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Headers4 from "../components/Headers4";
export default function DownloadScreen({ navigation }) {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "black" }}
      stickyHeaderIndices={[0]}
    >
      <Headers4 />
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 18, color: "#ffffff" }}>Smart Downloads</Text>
        <Text style={{ fontSize: 22, color: "#ffffff", paddingTop: 10 }}>
          Introducing Downloads For You
        </Text>
        <Text style={{ fontSize: 11, color: "#ffffff", paddingTop: 5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui,
          vivamus{"\n"}
          bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis.
          Massa,{"\n"}
          id ut ipsum aliquam enim non posuere pulvinar diam.
        </Text>
      </View>
      <View style={{ marginTop: 30, marginLeft: 65 }}>
        <Image
          source={require("../assets/img/ellipse.png")}
          style={{ width: 260, height: 210 }}
        />
      </View>
      <View style={{marginTop:30}}>
        <TouchableOpacity style={{ height: 50, backgroundColor: "#0071EB", justifyContent:"center",alignItems:"center" }}>
          <Text
            style={{
              fontSize: 16,
              color: "#ffffff",
            }}
          >
            Turn On
          </Text>
        </TouchableOpacity>
        <View style={{width:240,height:40, backgroundColor:"#424242", alignItems:"center", marginTop:30, marginLeft:75}}>
            <Text style={{fontSize:16,color:"#ffffff",paddingTop:5}}>Find Something to Download</Text>
        </View>
      </View>
    </ScrollView>
  );
}
