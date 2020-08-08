import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

import * as utils from '../../../utils';

const { width, height } = Dimensions.get('screen');

const FeaturedTrack: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.cover}
        source={require('../../../assets/covers/JonasBrothers.png')}
      />

      <Text style={styles.disk}>Sucker</Text>
      <Text style={styles.artist}>Jonas Brothers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.29866,
    marginRight: width * 0.053,
  },
  cover: {
    height: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 112,
    }),
    width: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 112,
    }),
  },
  disk: {
    fontSize: height * 0.018495,
    fontWeight: '500',
    color: '#0F1E36',
    marginTop: height * 0.009864,
    marginBottom: height * 0.004932,
  },
  artist: {
    fontSize: height * 0.014796,
    fontWeight: '500',
    color: '#0F1E36',
  },
});

export default FeaturedTrack;
