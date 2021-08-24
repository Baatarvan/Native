import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({title, score, description}) => {
  return (
    <View style={styles.row}>
      <Image
        style={styles.poster}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/en/6/60/The_Tomorrow_War_%282021_film%29_official_theatrical_poster.jpg',
        }}
      />
      <View style={styles.flex2}>
        <View style={styles.insideflex2}>
          <Text style={{textAlignVertical: 'center', textAlign: 'center'}}>
            {title}
          </Text>
          <View style={styles.Description}>
            <Text>{score}</Text>
            <Text>{description}</Text>
          </View>
        </View>
        <View style={styles.insideflex1}>
          <Image
            style={styles.like}
            source={{
              uri: 'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export const Flex = () => {
  return (
    <View style={[styles.container]}>
      <Text>Movies</Text>
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
      <Card
        title="The Tomorrow War"
        score="8.3"
        description="this is description"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: 'grey',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
  },

  flex2: {
    flex: 2,
    flexDirection: 'row',
  },
  insideflex2: {
    flex: 2,
    justifyContent: 'space-around',
  },
  Description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  insideflex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 120,
  },

  like: {
    width: 40,
    height: 40,
  },
});

export default Flex;
