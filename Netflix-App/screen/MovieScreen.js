import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Headers3 from '../components/Headers3'
import MovieRows from '../components/MoviesRows'

const MovieScreen = () => {
  return (
    <ScrollView style={{flex:1,backgroundColor:"black"}}>  
      <Headers3/>
      <MovieRows/>
    </ScrollView>
  )
}

export default MovieScreen

const styles = StyleSheet.create({})