import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Dimensions, View, StyleSheet, Text, Animated} from 'react-native';

const Stack = createStackNavigator();

const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');
const itemHeight = ScreenHeight * 0.45454545;
const itemWidth = ScreenWidth * 0.76;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://images.unsplash.com/photo-1550136513-548af4445338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1054&q=80',
  },
  {
    id: 'bd7acbea-c1b1-46cd2-aed5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aefd5-3ad53dabb28ba',
    hotel: 'Upper West Side',
    apartment: 'The Belnord Apartment',
    address: '225W 86th St, New York, NY, 10024',
    cost: '$5,250 month',
    image:
      'https://images.unsplash.com/photo-1505515888495-c1897b0b5740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
];

const Home = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const RenderItem = ({item, index}) => {
    const {image, hotel, apartment, address, cost} = item;
    const translateX = scrollX.interpolate({
      inputRange: [
        itemWidth * (index - 1),
        itemWidth * index,
        itemWidth * (index + 1),
      ],
      outputRange: [-itemWidth * 0.7, 0, itemWidth * 0.7],
    });

    return (
      <Animated.View style={styles.itemContainer}>
        <View style={styles.item}>
          <Animated.Image
            style={[styles.image, {transform: [{translateX}]}]}
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
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.navigationBar}>RENTNYC</Text>
      <Animated.FlatList
        pagingEnabled
        horizontal
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        snapToInterval={itemWidth + 20}
      />
    </View>
  );
};
const Dummy = () => {
  return <Text>dummy page</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="dummy" component={Dummy} />
      </Stack.Navigator>
    </NavigationContainer>
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
  itemContainer: {
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  item: {
    marginLeft: 20,
    height: itemHeight,
    width: ScreenWidth * 0.8,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'grey',
  },
  image: {
    width: itemWidth * 1.6,
    height: itemHeight * 0.63,
    resizeMode: 'cover',
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
