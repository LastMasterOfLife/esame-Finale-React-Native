import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    height: 650,
    width: 400,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    color: 'lightgreen',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ratingContainer: {
    position: 'absolute',
    zIndex: 10,
    top: 15,
    left: 10,
    backgroundColor: 'rgba(240, 237, 237, 0.75)',
    borderRadius: 5
  },
  ratingText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5
  }
});
