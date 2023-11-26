import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Headers3 from '../components/Headers3'
import MovieRows from '../components/MoviesRows'
import Headers from '../components/Headers'
const MovieScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}
    stickyHeaderIndices={[0]}>  
      <Headers3/>

      <Headers/>
      
      <MovieRows/>
    </ScrollView>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})