import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import axios from "axios";

const TMDB_API_KEY = "SUA_API_KEY_AQUI"; // Substitua pela sua chave da API TMDB
const TMDB_API_URL = "https://api.themoviedb.org/3/movie/popular";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Api: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(`${TMDB_API_URL}?api_key=${TMDB_API_KEY}`)
      .then((response) => {
        const data = response.data.results;
        setMovies(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar filmes:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
              }}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  movieContainer: {
    margin: 10,
    alignItems: "center",
  },
  poster: {
    width: 150,
    height: 200,
  },
});

export default Api;
