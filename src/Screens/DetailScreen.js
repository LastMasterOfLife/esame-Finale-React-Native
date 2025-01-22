import { Text, Image, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getProductDetail } from '../Services/Api';
import { Ionicons } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 90,
    backgroundColor: '#fff',
  },
  image: {
    width: '90%',
    height: 550,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  texttitle: {
    textAlign: 'left',
    fontSize: 30,
    color: 'rgba(44, 46, 46, 0.88)',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    marginStart: 10
  },
  textcomun: {
    fontSize: 20,
    marginStart: 10
  },
  textprice: {
    marginTop: 30,
    textAlign: 'left',
    fontSize: 30,
    color: 'black',
    marginStart: 10
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  textpricevalue: {
    fontSize: 40,
    color: 'rgba(23, 118, 81, 0.88)',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd: 20
  },
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(23, 118, 81, 0.88)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
