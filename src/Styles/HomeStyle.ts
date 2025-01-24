import { StyleSheet
    
 } from "react-native";
export const styles = StyleSheet.create({
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
