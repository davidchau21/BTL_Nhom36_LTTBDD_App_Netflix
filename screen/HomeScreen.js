import { View,Text } from "react-native";
import React from "react" ;
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen(){
    return(
        <SafeAreaView className="flex-1 bg-neutral-800">
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}