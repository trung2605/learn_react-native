import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { OPEN_SANS_FONT } from '../../util/const';
import { useNavigation, NavigationProp, useRoute  } from '@react-navigation/native'; // Import Hook
import { RootStackParamList } from '../../types/route';
import { RouteProp } from '@react-navigation/native';

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: OPEN_SANS_FONT,
  },
  reviewDetail: {
    fontSize: 16,
    marginVertical: 10,
  }

});

const DetailScreen = () => {
  // Initialize navigation -> use react hook
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();

  const {id, title, star} = route.params || {};

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.review}>Review Detail</Text>

      <Text style={styles.reviewDetail}>ID: {id}</Text>
      <Text style={styles.reviewDetail}>Title: {title}</Text>
      <Text style={styles.reviewDetail}>Star: {star}</Text>
      {/* Navigate back to Home screen */}
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailScreen;