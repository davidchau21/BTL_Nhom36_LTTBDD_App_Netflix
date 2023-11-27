import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const TopSearch = () => {
  const navigation = useNavigation();
  const API_KEY = 'b93a64480573ce5248c28b200d79d029';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => {
          // Shuffle the movies array
          const shuffledMovies = data.results.sort(() => Math.random() - 0.5);
          setMovies(shuffledMovies);
        });
    };
    movieData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      {movies.slice(0, 20).map((movie, index) => (
        <Pressable
          key={index}
          style={styles.movieContainer}
          onPress={() => {
            navigation.navigate('PlayVideo');
          }}
        >
          <Image
            style={styles.movieImage}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
            }}
          />
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{movie?.title}</Text>
            <Ionicons name="play-circle" size={30} color="white" style={{ marginLeft: 15 }}/>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    backgroundColor: '#424242',
  },
  movieContainer: {
    flexDirection: 'row',
    marginBottom: 2
  },
  movieImage: {
    width: 105,
    height: 152,
    resizeMode: 'cover',
  },
  movieInfo: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#424242',
    padding: 10,
    borderRadius: 6,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  movieTitle: {
    color: 'white',
    fontSize: 16,
  },
});

export default TopSearch;
