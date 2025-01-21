
import React, {useEffect,useState} from 'react';
import { FlatList,View } from 'react-native';
import Card from '../Component/cardComponent';
import { getProducts } from '../Services/Api';


export default function HomeScreen({navigation}){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return(
        <View style={{flex:1}}>
            <FlatList data={products}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => (

            <Card product={item}
            onPress={() => navigation.navigate('Detail', { id: item.id })} />
               
            )}/>
            
        </View>
    );
}
