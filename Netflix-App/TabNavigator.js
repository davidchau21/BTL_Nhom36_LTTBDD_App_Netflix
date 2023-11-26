import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import ComingSoonScreen from './screen/ComingSoonScreen';
import DownloadScreen from './screen/DownloadScreen';
import MoreScreen from './screen/MoreScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeName = "Home";
const searchName = "Search";
const comingSoonName = "ComingSoon";
const downloadName = "Download";
const moreName = "More";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === homeName) {
            iconName = 'home-outline';
          } else if (route.name === searchName) {
            iconName = 'search-outline';
          } else if (route.name === comingSoonName) {
            iconName = 'film-outline';
          } else if (route.name === downloadName) {
            iconName = 'download-outline';
          } else if (route.name === moreName) {
            iconName = 'menu-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
    })}
    tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#8C8787',
        activeBackgroundColor: '#000',
        inactiveBackgroundColor: '#000',
        labelStyle: { paddingBottom: 3, fontSize: 10 },
        tabStyle: {
            margin: -1,
            marginTop: -3,
          },      
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="ComingSoon" component={ComingSoonScreen} />
      <Tab.Screen name="Download" component={DownloadScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
