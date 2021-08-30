import React from 'react';
import {
  Image,
  Dimensions,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    background:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
];

const Item = ({background, hotel, apartment, address, cost}) => (
  <>
    <Image
      style={styles.background}
      source={{
        uri: background,
      }}
    />

    <View>
      <Text>{hotel}</Text>
      <Text>{apartment}</Text>
      <Text>{address}</Text>
      <Text>{cost}</Text>
    </View>
  </>
);

const renderItem = ({item}) => (
  <Item
    background={item.background}
    hotel={item.hotel}
    apartment={item.apartment}
    address={item.address}
    cost={item.cost}
  />
);

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: ScreenWidth,
    height: ScreenHeight / 4,
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 3,
  },
});
