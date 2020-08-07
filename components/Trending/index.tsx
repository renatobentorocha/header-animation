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

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: height * 0.3785,
    width,
  },
  image: {
    height: height * 0.460269865067466,
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

const Trending: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../assets/trending.png')}
        style={styles.image}
      >
        <View style={styles.hero_content}>
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
        </View>
      </ImageBackground>
    </View>
  );
};

export default Trending;
