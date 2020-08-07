import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import TopTrack from './TopTrack';
const styles = StyleSheet.create({
  container: {},
  title: {},
});

const TopTrackList: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <FlatList
        keyExtractor={(_, index) => `${index}`}
        data={[0, 1, 2, 3]}
        renderItem={() => <TopTrack />}
      />
    </View>
  );
};

export default TopTrackList;
