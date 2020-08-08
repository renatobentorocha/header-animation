import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text } from 'react-native';
import * as utils from '../../../utils';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 54.41,
    }),
    width: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 323.17,
    }),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 12.76,
    }),
    height: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 65,
    }),
    width: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 65,
    }),
  },
  description: {},
  album: {
    fontSize: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 14,
    }),
    color: '#0F1E36',
  },
  track: {
    fontSize: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 12,
    }),
    color: '#545663',
  },
  time: {
    fontSize: utils.scale({
      origin_size: 811,
      destination_size: height,
      size: 12,
    }),
    color: '#545663',
  },
});

const TopTrack: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          resizeMode="stretch"
          style={[styles.image]}
          source={require('../../../assets/covers/closer.png')}
        />

        <View style={styles.description}>
          <Text style={styles.album}>Closer (feat. Halsey)</Text>
          <Text style={styles.track}>The Chainsmokers feat. Halsey</Text>
        </View>
      </View>
      <Text style={styles.time}>3:13</Text>
    </View>
  );
};

export default TopTrack;
