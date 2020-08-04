import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Discover from './Discover';
import Home from './Home';
import TV from './TV';
import Radio from './Radio';
import Bell from './Bell';

const { height, width } = Dimensions.get('screen');

const MY = height - 80;

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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rounded_button}>
        <Discover />
      </View>

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
            <Home />
          </View>
          <View>
            <TV />
          </View>
        </View>

        <View style={styles.box_bottom_bar}>
          <View>
            <Radio />
          </View>
          <View>
            <Bell />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
  rounded_button: {
    backgroundColor: '#3E2AD1',
    height: 62,
    width: 62,
    borderRadius: 31,
    position: 'absolute',
    top: MY - 31,
    left: width / 2 - 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_bar: {
    paddingHorizontal: 32,
    position: 'absolute',
    bottom: 0,
    height: 80,
    backgroundColor: 'transparent',
    width: '100%',
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
