import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { getCategories } from '../Services/Api';
import { styles} from '../Styles/CategoryStyle'

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
      source={require('../../assets/Background/sfondo_alternativo.jpg')}
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