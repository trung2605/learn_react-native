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

const AboutScreen = ({ navigation }: any) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.review}>Welcome to the Review About Screen</Text>
      <Text>This is where users can learn more about the review process.</Text>
    </View>
  );
}

export default AboutScreen;