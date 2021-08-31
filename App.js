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
const itemHeight = ScreenHeight * 0.3;
const itemWidth = ScreenWidth * 0.76;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
  {
    id: 'bd7acbea-c1b1-46cd2-aed5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aefd5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
  },
];

const Item = ({image, hotel, apartment, address, cost}) => (
  <View style={styles.itemContainer}>
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textHotel}>{hotel}</Text>
        <Text style={styles.textApartment}>{apartment}</Text>
        <Text style={styles.textAddress}>{address}</Text>
        <Text style={styles.textCost}>{cost}</Text>
      </View>
    </View>
  </View>
);

const renderItem = ({item}) => (
  <Item
    image={item.image}
    hotel={item.hotel}
    apartment={item.apartment}
    address={item.address}
    cost={item.cost}
  />
);

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.navigationBar}>RENTNYC</Text>
      <FlatList
        pagingEnabled
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  navigationBar: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  image: {
    width: itemWidth,
    height: itemHeight,
  },
  itemContainer: {
    alignItems: 'center',
    width: ScreenWidth,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'grey',
  },
  textContainer: {
    padding: 20,
  },
  textHotel: {
    color: 'grey',
    fontWeight: 'bold',
  },
  textApartment: {
    color: 'black',
    fontSize: 16,
  },
  textAddress: {
    color: '#B6840E',
  },
  textCost: {
    fontSize: 14,
  },
});
