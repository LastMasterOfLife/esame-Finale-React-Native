import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet ,Image} from 'react-native';
import { getFavorites } from '../Services/storage';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);

  // Recupera i preferiti quando la schermata viene caricata
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavorites();
        const validData = data.filter((item) => item && item.id); // Filtra i dati validi
        setFavorites(validData);
      } catch (error) {
        console.error('Errore nel recuperare i preferiti:', error);
      }
    };

    fetchFavorites();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image}/>
      
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {item.rating.rate} ({item.rating.count})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={(item, index) => item?.id?.toString() || index.toString()} // Usa una chiave di fallback
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noFavorites}>Non ci sono elementi nei preferiti.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 80,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  card: {
    height: 300,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#233727',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  noFavorites: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  ratingContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 15,
    right: 10,
    backgroundColor: 'rgba(240, 237, 237, 0.75)',
    borderRadius: 5
  },
  ratingText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5
  }
});
