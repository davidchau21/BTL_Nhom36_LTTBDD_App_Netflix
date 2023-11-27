import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import movieUrl from '../data/movieUrl';
import MyList from './MyList';

const MyLists = () => {
    const data = movieUrl;
  return (
    <View>
        {data.map((movie) => (
            <MyList url={movie.url}/>
        ))}
      <Text>MyListColunm</Text>
    </View>
  )
}

export default MyLists

const styles = StyleSheet.create({})