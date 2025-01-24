import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 80,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  card: {
    height: 300,
    padding: 10,
    marginBottom: 30,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#233727',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  noFavorites: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  ratingContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 15,
    right: 10,
    backgroundColor: 'rgba(240, 237, 237, 0.75)',
    borderRadius: 5
  },
  ratingText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5
  }
});
