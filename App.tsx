import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Discover from './Discover';
const { height, width } = Dimensions.get('screen');
const MX = width / 2;
const MY = height - 80;

const CURVE_WIDTH = 100;
const dCurve = `M ${MX - CURVE_WIDTH / 2},${MY} Q ${MX},${MY + 100} ${
  MX + CURVE_WIDTH / 2
},${MY}`;

const dLeft = `M 0,${MY} L ${MX - CURVE_WIDTH / 2},${MY}`;
const dRight = `H ${width}`;
const dDown = `V ${height}`;
const dBottom = `H ${0}`;
const dUp = `V ${MY}`;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.rounded_button}>
        <Discover />
      </View>
      <Svg>
        <Path
          fill="white"
          stroke="white"
          strokeWidth={1}
          d={dLeft + dCurve + dRight + dDown + dBottom + dUp}
        />
      </Svg>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#979797',
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
});
