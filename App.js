import React, {useRef, useEffect} from 'react';
import {
  Image,
  View,
  Animated,
  FlatList,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on',
  },
  {
    id: 'bdd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on',
  },
  {
    id: 'bdsd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    url: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2?imbypass=on',
  },
];

const Item = ({url, animation}) => (
  <ImageBackground style={styles.item} source={{uri: url}} blurRadius={80}>
    <Animated.View style={[styles.image, {transform: [{scale: animation}]}]}>
      <Image source={{uri: url}} style={styles.image} />
    </Animated.View>
  </ImageBackground>
);
export const App = () => {
  const scaleAnimation = useRef(new Animated.Value(0.2)).current;
  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 1999,
      useNativeDriver: true,
    }).start();
  });

  const renderItem = ({item}) => (
    <Item url={item.url} animation={scaleAnimation} />
  );

  return (
    <View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  image: {
    width: width - 150,
    height: height - 300,
    borderRadius: 20,
  },
});

export default App;
