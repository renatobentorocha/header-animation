import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const PlayButton: React.FC = () => {
  return (
    <Animated.View style={styles.container}>
      <Text style={styles.play_text}>PLAY</Text>
      <MaterialCommunityIcons
        name="play-outline"
        size={height * 0.0224887}
        color="#E6152B"
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.03298,
    width: width * 0.1653,
  },
  play_text: {
    color: '#E6152B',
    fontSize: height * 0.01499,
  },
});

export default PlayButton;
