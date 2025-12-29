import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { OPEN_SANS_FONT } from '../../util/const';
import { globalStyles } from '../../util/const';

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: OPEN_SANS_FONT,
  }
});

const AboutScreen = () => {
  return (
    <View>
      <Text style={[styles.review, globalStyles.globalFontFamily, { color: globalStyles.colorPrimary }]}>Welcome to the Review About Screen</Text>
      <Text>This is where users can learn more about the review process.</Text>
    </View>
  );
}

export default AboutScreen;