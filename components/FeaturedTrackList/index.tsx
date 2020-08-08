import React from 'react';
import { FlatList, View, Text, Dimensions, StyleSheet } from 'react-native';
import FeaturedTrack from './FeaturedTrack';
import * as utils from '../../utils';
const { height } = Dimensions.get('screen');

const FeaturedTrackList: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Featured Tracks</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(_, index) => `${index}`}
        data={[0, 1, 2, 3]}
        renderItem={() => <FeaturedTrack />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 13,
    }),
    fontSize: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 18,
    }),
    fontWeight: 'bold',
    color: '#0F1E36',
  },
});

export default FeaturedTrackList;
