import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import MyLists from '../components/MyLists';
import { useNavigation } from '@react-navigation/native';

const MyListScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#000' }}  stickyHeaderIndices={[0]}>
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
        <View style={{ marginRight: 5, flexDirection:'row' }}>
          <Text style={{ color: 'white', fontSize: 19, marginRight:10 }}>My List</Text>
          <Ionicons name="caret-down" size={24} color="white" />
        </View>
      </View>
      <MyLists/>
    </ScrollView>
  )
}

export default MyListScreen

const styles = StyleSheet.create({})