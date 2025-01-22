import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet ,ActivityIndicator} from 'react-native';
import Card from '../Component/cardComponent';
import { getProducts } from '../Services/Api';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts().then(setProducts).then(setLoading);
  }, []);

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
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
        {products.length > 0 ? (
            <FlatList
            data={products}
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
            decelerationRate='fast'
          />
        ): (
            <Text>No products available</Text>
        )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  carouselContainer: {
    paddingHorizontal: 10,
    alignItems:'center'
  },
});
