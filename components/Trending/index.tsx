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
import Animated, {
  debug,
  useCode,
  sub,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

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

const Trending: React.FC<Props> = ({ translateY }: Props) => {
  const headerHeight = utils.scale({
    origin_size: 811,
    destination_size: height,
    size: 373.278860569714975,
  });

  const animatedHeaderHeight = sub(headerHeight, translateY);

  const opacityPlay = interpolate(translateY, {
    inputRange: [
      0,
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 25,
      }),
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacityArtist = interpolate(translateY, {
    inputRange: [
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 46,
      }),
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 117,
      }),
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacityMusic = interpolate(translateY, {
    inputRange: [
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 99,
      }),
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 171,
      }),
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacityTrending = interpolate(translateY, {
    inputRange: [
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 175,
      }),
      utils.scale({
        origin_size: 811,
        destination_size: height,
        size: 205,
      }),
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View style={[styles.container, { height: animatedHeaderHeight }]}>
      <AnimatedImageBackground
        resizeMode="cover"
        source={require('../../assets/trending.png')}
        style={[styles.image, { height: animatedHeaderHeight }]}
      >
        <Animated.View style={[styles.hero_content]}>
          <Animated.Image
            resizeMode="contain"
            source={require('../../assets/Menu.png')}
            style={[styles.button_menu, {}]}
          />

          <Animated.Text
            style={[styles.trending, { opacity: opacityTrending }]}
          >{`// TRENDING`}</Animated.Text>
          <Animated.Text
            style={[styles.music_name, { opacity: opacityMusic }]}
            numberOfLines={2}
          >
            Akcent feat Lidia Buble...
          </Animated.Text>
          <Animated.Text style={[styles.artist, { opacity: opacityArtist }]}>
            - Kamelia{' '}
          </Animated.Text>
          <Animated.View style={[styles.actions, { opacity: opacityPlay }]}>
            <PlayButton />
            <ShareButton />
          </Animated.View>
        </Animated.View>
      </AnimatedImageBackground>
    </Animated.View>
  );
};

export default Trending;
