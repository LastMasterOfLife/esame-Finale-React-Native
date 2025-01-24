import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { saveFavorite, getFavorites, removeFavorite } from '../Services/storage';
import { styles } from '../Styles/CardStyle';

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
      
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>⭐ {product.rating.rate} ({product.rating.count})</Text>
      </View>

      <TouchableOpacity style={styles.iconContainer} onPress={handleFavoriteToggle}>
        <MaterialIcons
          name={isFavorite ? 'favorite' : 'favorite-outline'}
          size={28}
          color={isFavorite ? 'red' : 'black'}
        />
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

