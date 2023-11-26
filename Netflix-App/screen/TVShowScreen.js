import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Headers from '../components/Headers'
import TrendingComponent from '../components/TrendingComponent';
import MoviesRows from '../components/MoviesRows';

const TVShow = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>
      
      <Headers/>

      <TrendingComponent/>

      <MoviesRows/>
    </ScrollView>
  )
}

export default TVShow

const styles = StyleSheet.create({})