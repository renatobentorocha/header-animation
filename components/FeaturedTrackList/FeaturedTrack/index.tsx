import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('screen');

const FeaturedTrack: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cover_wrapper}>
        <Image
          resizeMode="stretch"
          style={styles.cover}
          source={require('../../../assets/covers/JonasBrothers.png')}
        />
      </View>
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
  cover_wrapper: {
    width: width * 0.29866,
    height: height * 0.1381,
  },
  cover: {
    width: width * 0.29866,
    height: height * 0.1381,
    position: 'absolute',
    left: 0,
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
