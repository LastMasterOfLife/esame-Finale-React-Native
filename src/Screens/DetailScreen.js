import {Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState,useEffect } from 'react';

export default function DetailScreen() {
  const route = useRoute();
  const { id } = route.params || {};
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false)
      } catch (error) {
        console.error(error);
        setLoading(false)
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="rgba(76, 168, 133, 0.88)" />;
  }

  return (
    <View>
        <Image source={{uri: product.image}} style={{width: '100%',height: 500,resizeMode: 'contain',}}/>
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
    </View>
  );
}