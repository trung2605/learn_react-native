import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: 'trungle',
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