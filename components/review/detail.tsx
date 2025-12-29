import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { OPEN_SANS_FONT } from '../../util/const';

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: OPEN_SANS_FONT,
  }
});

const DetailScreen = () => {
  return (
    <View>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to the Review Detail Screen</Text>
        <Text style={styles.review}>This is where users can see the details of their review.</Text>
    </View>
  );
}

export default DetailScreen;