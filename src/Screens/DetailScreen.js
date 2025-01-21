import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetailScreen() {
  const route = useRoute();
  const { id } = route.params || {};

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {id ? <Text>{`ID ricevuto: ${id}`}</Text> : <Text>Nessun parametro ricevuto</Text>}
    </View>
  );
}
