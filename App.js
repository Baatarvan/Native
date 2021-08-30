import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'this is title',
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    image:
      'https://content.ikon.mn/news/2021/8/30/1frajx_241041022_1127070227702385_3368701010442681018_n_x974.jpg',
  },
];
const Item = ({title, image}) => (
  <View style={styles.item}>
    <Image source={{uri: image}} stlye={styles.image} />
    <Text>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} image={item.image} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    width: 200,
    height: 100,
  },
});
