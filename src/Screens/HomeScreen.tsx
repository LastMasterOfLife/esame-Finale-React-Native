import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import Card from '../Component/cardComponent';
import { getProducts } from '../Services/Api';
import { styles } from '../Styles/HomeStyle';

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

