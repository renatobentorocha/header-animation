import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: height * 0.3785,
    width,
  },
  image: {
    height: height * 0.3785,
    width,
  },
});

const Trending: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={require('../../assets/trending.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Trending;
