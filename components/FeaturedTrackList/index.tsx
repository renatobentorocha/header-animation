import React from 'react';
import { FlatList, View, Text, Dimensions, StyleSheet } from 'react-native';
import FeaturedTrack from './FeaturedTrack';

const { height } = Dimensions.get('screen');

const FeaturedTrackList: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Featured Tracks</Text>
      <FlatList
        horizontal
        keyExtractor={(_, index) => `${index}`}
        data={[0, 1, 2, 3]}
        renderItem={() => <FeaturedTrack />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: height * 0.016029,
    color: '#0F1E36',
    fontSize: height * 0.019728,
    fontWeight: 'bold',
  },
});

export default FeaturedTrackList;
