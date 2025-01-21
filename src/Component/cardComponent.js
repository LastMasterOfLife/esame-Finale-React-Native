import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ product, onPress }) {
    return (
      <TouchableOpacity style={styles.card} onPress={onPress}>
        
        <Image source={{ uri: product.image }} style={styles.image} />
  
        
        <View style={styles.infoContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {product.title}
          </Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
  
        
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginVertical: 8,
      marginHorizontal: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    image: {
      width: '100%',
      height: 250,
      borderRadius: 8,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
      marginRight: 10,
    },
    price: {
      fontSize: 16,
      color: 'green',
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
  });
  