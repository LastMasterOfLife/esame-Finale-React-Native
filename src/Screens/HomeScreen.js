import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import Card from '../Component/cardComponent';
import { getProducts } from '../Services/Api';

export default function HomeScreen({ route, navigation }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        const filtered = category === 'all' 
        ? data 
        : data.filter((product) => product.category === category);
        setFilteredProducts(filtered);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              product={item}
              onPress={() => navigation.navigate('Detail', { id: item.id })}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.carouselContainer}
          bounces={true}
          decelerationRate="fast"
          pagingEnabled={true}
        />
      ) : (
        <Text style={styles.noProductsText}>No products available for this category</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
  },
  carouselContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  noProductsText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
