import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import PlansScreen from './screen/PlansScreen';
import ProfileScreen from './screen/ProfileScreen';

const  Stack = createNativeStackNavigator();
const StackNavigator = () => {
  
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Plan" component={PlansScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})