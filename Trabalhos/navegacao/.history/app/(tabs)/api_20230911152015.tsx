import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";

const TMDB_API_KEY = "b191f429c8484b0dcbd6a51fa35463f6"; // Substitua pela sua chave da API TMDB
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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {movies.map((item, index) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.poster}
              key={item.poster_path}
              source={{
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
              }}
            />
            <Text>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Api;
