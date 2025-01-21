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
    <ScrollView style={styles.container}>
        <Image source={{uri: product.image}} style={styles.image}/>
        <Text style={styles.texttitle}>{product.title}</Text>
        <Text style={styles.textcomun}>{product.description}</Text>
        <Text style={styles.textprice}>${product.price}</Text>
    </ScrollView>
        
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: 550,
        resizeMode: 'contain',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    texttitle: {
        textAlign: 'center',
        fontSize : 30,
        color: 'rgba(39, 125, 151, 0.88)',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20
    },
    textcomun: {
        fontSize: 25,
        margin: 15
    },
    textprice: {
        textAlign: 'center',
        fontSize: 40,
        color: 'rgba(23, 118, 81, 0.88)',
        fontWeight: 'bold',
        marginBottom: 250
    }
});