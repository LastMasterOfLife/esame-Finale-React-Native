import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
