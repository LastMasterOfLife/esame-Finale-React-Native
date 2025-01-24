import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet ,Image} from 'react-native';
import { getFavorites } from '../Services/storage';
import { styles } from '../Styles/FavouritesStyle';

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

