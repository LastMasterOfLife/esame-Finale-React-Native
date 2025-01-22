import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = 'favorites';

export const saveFavorite = async (product) => {
  const favorites = await getFavorites();
  favorites.push(product);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const getFavorites = async () => {
  const data = await AsyncStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const removeFavorite = async (id) => {
  let favorites = await getFavorites();
  favorites = favorites.filter((product) => product.id !== id);
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
