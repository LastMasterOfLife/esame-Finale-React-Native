
import React, {useEffect,useState} from 'react';
import { FlatList, Text,View } from 'react-native';
import Card from '../Component/cardComponent';
import { getProducts } from '../Services/Api';


export default function HomeScreen(){

    const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts().then(setProducts);
  }, []);

    return(
        <view>
            <FlatList data={products}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => (
                <Card product={item} />
            )}/>
        </view>
    );
}
