import React, { useEffect, useState } from 'react';
import { ScrollView, Pressable, Image, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyList = () => {
  const navigation = useNavigation();
  const API_KEY = 'b93a64480573ce5248c28b200d79d029';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    };
    movieData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
      {movies.map((movie, id) => (
        <Pressable
          key={id}
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
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  movieContainer: {
    width: '30%',
    marginBottom: 20,
  },
  movieImage: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    resizeMode: 'cover',
  },
});

export default MyList;
