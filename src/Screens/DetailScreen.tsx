import { Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getProductDetail } from '../Services/Api';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../Styles/DetailStyle';

export default function DetailScreen() {
  const route = useRoute();
  const { id } = route.params || {};
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductDetail(id).then((r) => {
      setProduct(r);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="rgba(76, 168, 133, 0.88)" />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.texttitle}>{product.title}</Text>
      <Text style={styles.textcomun}>{product.description}</Text>
      <Text style={styles.textprice}>Price</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.textpricevalue}>${product.price}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.circleButton}>
            <Ionicons name="heart-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleButton}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
