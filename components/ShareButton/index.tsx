import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.064,
    height: height * 0.03298,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.02133,
  },
});

const PlayButton: React.FC = () => {
  return (
    <View style={styles.container}>
      <EvilIcons
        name="share-google"
        size={height * 0.0224887}
        color="#E6152B"
      />
    </View>
  );
};

export default PlayButton;
