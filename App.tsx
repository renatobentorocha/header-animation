import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View, FlatList } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import * as utils from './utils';

import Trending from './components/Trending';
import Discover from './Discover';
import Home from './Home';
import TV from './TV';
import Radio from './Radio';
import Bell from './Bell';
import FeaturedTrackList from './components/FeaturedTrackList';
import TopTrackList from './components/TopTrackList';

const { height, width } = Dimensions.get('screen');

const MY = height - height * 0.119;

function c(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x: number,
  y: number
) {
  const _x1 = x1 * width;
  const _y1 = y1 * height;
  const _x2 = x2 * width;
  const _y2 = y2 * height;
  const _x = x * width;
  const _y = y * height;

  return `C${_x1},${_y1} ${_x2},${_y2} ${_x},${_y} `;
}

const d = `
    M0 ${height * 0.06}
    H${width * 0.34}
    ${c(0.36, 0.06, 0.38, 0.069, 0.39, 0.081)}
    ${c(0.41, 0.098, 0.43, 0.12, 0.45, 0.128)}
    ${c(0.47, 0.134, 0.52, 0.143, 0.56, 0.124)}
    ${c(0.578, 0.117, 0.597, 0.0952, 0.611, 0.0791)}
    ${c(0.619, 0.0677, 0.639, 0.06, 0.662, 0.06)}
    H${width}
    V${0.179 * height}
    H0
    V ${height * 0.06}
    Z`;

const DATA = [() => <FeaturedTrackList />, () => <TopTrackList />];
export default function App() {
  return (
    <View style={styles.container}>
      <Trending />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: utils.scale({
            origin_size: 887,
            destination_size: height,
            size: 36,
          }),
        }}
        style={styles.featured_track_list}
        data={DATA}
        renderItem={({ item }) => item()}
        keyExtractor={(_, index) => `${index}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Svg
        style={{
          transform: [
            { translateY: height - (height * 0.119 + height * 0.06) },
          ],
        }}
      >
        <Path fill="white" stroke="none" d={d} />
      </Svg>

      <View style={styles.bottom_bar}>
        <View style={styles.box_bottom_bar}>
          <View>
            <Home
              barHeight={styles.bottom_bar.height}
              barWidth={styles.bottom_bar.width}
            />
          </View>
          <View>
            <TV
              barHeight={styles.bottom_bar.height}
              barWidth={styles.bottom_bar.width}
            />
          </View>
        </View>

        <View style={styles.box_bottom_bar}>
          <View>
            <Radio
              barHeight={styles.bottom_bar.height}
              barWidth={styles.bottom_bar.width}
            />
          </View>
          <View>
            <Bell
              barHeight={styles.bottom_bar.height}
              barWidth={styles.bottom_bar.width}
            />
          </View>
        </View>
      </View>

      <View style={styles.rounded_button}>
        <Discover />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featured_track_list: {
    position: 'absolute',
    top: height * 0.460269865067466,
    marginLeft: width * 0.1066,
    maxHeight: utils.scale({
      origin_size: 887,
      destination_size: height,
      size: 372,
    }),
  },
  separator: {
    width: '100%',
    height: utils.scale({
      origin_size: 887,
      destination_size: height,
      size: 21,
    }),
  },
  rounded_button: {
    backgroundColor: '#3E2AD1',
    height: width * 0.165,
    width: width * 0.165,
    borderRadius: (width * 0.165) / 2,
    position: 'absolute',
    top: MY - (width * 0.165) / 2,
    left: width / 2 - (width * 0.165) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_bar: {
    paddingHorizontal: 32,
    position: 'absolute',
    bottom: 0,
    height: height * 0.119,
    backgroundColor: 'transparent',
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box_bottom_bar: {
    width: '30%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
