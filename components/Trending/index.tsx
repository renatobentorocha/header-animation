import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import PlayButton from '../PlayButton';
import ShareButton from '../ShareButton';
import * as utils from '../../utils';
import Animated, { debug, useCode, sub } from 'react-native-reanimated';

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground
);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width,
  },
  image: {
    width,
  },
  hero_content: {
    marginTop: height * 0.0869565,
    marginLeft: width * 0.08266,
    flex: 1,
  },
  button_menu: {
    width: width * 0.05866,
    height: height * 0.0224,
  },
  trending: {
    fontSize: height * 0.0209895,
    color: '#fff',
    marginTop: height * 0.057031,
    marginBottom: height * 0.010494,
  },
  music_name: {
    width: width * 0.6026,
    fontSize: height * 0.041979,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: height * 0.010494,
  },
  artist: {
    fontSize: height * 0.023988,
    color: '#fff',
    marginBottom: height * 0.06446,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type Props = {
  translateY: Animated.Value<number>;
};

const Trending: React.FC<Props> = ({ translateY }) => {
  useCode(() => debug('translateY', translateY), []);

  const headerHeight = utils.scale({
    origin_size: 811,
    destination_size: height,
    size: 373.278860569714975,
  });

  const animatedHeaderHeight = sub(headerHeight, translateY);

  return (
    <Animated.View style={[styles.container, { height: animatedHeaderHeight }]}>
      <AnimatedImageBackground
        resizeMode="cover"
        source={require('../../assets/trending.png')}
        style={[styles.image, { height: animatedHeaderHeight }]}
      >
        <Animated.View style={[styles.hero_content]}>
          <Image
            resizeMode="contain"
            source={require('../../assets/Menu.png')}
            style={styles.button_menu}
          />

          <Text style={styles.trending}>{`// TRENDING`}</Text>
          <Text style={styles.music_name} numberOfLines={2}>
            Akcent feat Lidia Buble...
          </Text>
          <Text style={styles.artist}>- Kamelia </Text>
          <View style={styles.actions}>
            <PlayButton />
            <ShareButton />
          </View>
        </Animated.View>
      </AnimatedImageBackground>
    </Animated.View>
  );
};

export default Trending;
