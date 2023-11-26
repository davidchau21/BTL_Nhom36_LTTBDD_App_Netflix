import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import MoviesRows from '../components/MoviesRows';
import Headers2 from '../components/Headers2';

const TVShow = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>  
      <Headers2/>
      <MoviesRows/>
    </ScrollView>
  )
}

export default TVShow

const styles = StyleSheet.create({})