import React from 'react';
import { View, StyleSheet, Text, FlatList, Dimensions } from 'react-native';
import TopTrack from './TopTrack';

import * as utils from '../../utils';

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {},
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
  separator: {
    width: '100%',
    height: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 27.94,
    }),
  },
});

const TopTrackList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Text style={styles.title}>Title</Text>}
        keyExtractor={(_, index) => `${index}`}
        data={[0, 1, 2, 3]}
        renderItem={() => <TopTrack />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default TopTrackList;
