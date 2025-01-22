import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { saveFavorite, getFavorites, removeFavorite } from '../Services/storage';

export default function Card({ product, onPress }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Controlla se il prodotto è nei preferiti quando il componente viene montato
  useEffect(() => {
    const checkFavorite = async () => {
      const favorites = await getFavorites();
      const isFav = favorites.some((fav) => fav.id === product.id);
      setIsFavorite(isFav);
    };
    checkFavorite();
  }, [product.id]);

  // Gestisce il click sull'icona dei preferiti
  const handleFavoriteToggle = async () => {
    console.log('Icona cliccata!');
    try {
      if (isFavorite) {
        await removeFavorite(product.id);
        Alert.alert('Rimosso', 'Prodotto rimosso dai preferiti!');
        console.log(isFavorite ? 'Rimuovo dai preferiti' : 'Aggiungo ai preferiti');
      } else {
        await saveFavorite(product);
        Alert.alert('Successo', 'Prodotto aggiunto ai preferiti!');
        console.log(isFavorite ? 'Rimuovo dai preferiti' : 'Aggiungo ai preferiti');
      }
      setIsFavorite(!isFavorite);
    } catch (err) {
      Alert.alert('Errore', 'Si è verificato un errore.');
      console.error(err);
    }
  };
  

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleFavoriteToggle}>
        <View>
          <MaterialIcons
            name={isFavorite ? 'favorite' : 'favorite-outline'}
            size={35}
            color={isFavorite ? 'red' : 'black'}
          />
        </View>
      </TouchableOpacity>

      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 650,
    width: 400,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'lightgreen',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
