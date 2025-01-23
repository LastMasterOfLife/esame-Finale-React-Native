import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { getCategories } from '../Services/Api';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Home', { category: item })}
    >
      <Text style={styles.title}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/Background/sfondo.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.headerTitle}>Welcome!</Text>

        <TouchableOpacity
          style={styles.headerCard}
          onPress={() => navigation.navigate('Home', { category: 'all' })}
        >
          <Text style={styles.headerText}>All products</Text>
        </TouchableOpacity>

        <FlatList
          data={categories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.22)', // Sfondo semi-trasparente per migliorare la leggibilità
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  listContent: {
    padding: 10,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  headerCard: {
    margin: 10,
    height: 180,
    backgroundColor: 'rgba(23, 118, 81, 0.88)',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 44,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: 'rgba(164, 159, 98, 0.88)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 100,
    marginTop: 30,
  },
});
