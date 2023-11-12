import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'

const HomeScreen = () => {
  console.log('Rendering HomeScreen');
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"black"}}>
      <Headers/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})