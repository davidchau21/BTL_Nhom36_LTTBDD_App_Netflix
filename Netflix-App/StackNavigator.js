import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
<<<<<<< HEAD
import { Ionicons, AntDesign } from '@expo/vector-icons';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import PlansScreen from './screen/PlansScreen';
import ProfileScreen from './screen/ProfileScreen';
import LoadingScreen from './screen/LoadingScreen';
import HomeScreen from './screen/HomeScreen';
import PlayVideoScreen from './screen/PlayVideoScreen';
import TVShowScreen from './screen/TVShowScreen';
=======
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import PlansScreen from "./screen/PlansScreen";
import ProfileScreen from "./screen/ProfileScreen";
import LoadingScreen from "./screen/LoadingScreen";
import TabNavigator from "./TabNavigator";
import SearchScreen from "./screen/SearchScreen";
>>>>>>> 96405c542f078f9e0a0000302a4bf878e5bc3263

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< HEAD
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Plan" component={PlansScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PlayVideo" component={PlayVideoScreen} options={{ headerShown: false}} />
        <Stack.Screen name="TVShow" component={TVShowScreen} options={{ headerShown: false}} />
=======
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Plan"
          component={PlansScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchHome"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
>>>>>>> 96405c542f078f9e0a0000302a4bf878e5bc3263
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
