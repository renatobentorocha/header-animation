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
    marginBottom: 3,
  },
  image_wrapper: {
    height: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 54.41,
    }),
    width: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 54.41,
    }),
    marginRight: width * 0.0340266,
  },
  image: {
    height: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 54.41,
    }),
    width: utils.scale({
      origin_size: 375,
      destination_size: width,
      size: 54.41,
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
  time: {},
});

const TopTrack: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.image_wrapper}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../../../assets/covers/closer.png')}
          />
        </View>
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
