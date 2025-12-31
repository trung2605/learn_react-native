import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { OPEN_SANS_FONT } from '../../util/const';
import { useNavigation, NavigationProp  } from '@react-navigation/native'; // Import Hook

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: OPEN_SANS_FONT,
  }
});

const DetailScreen = () => {
  // Initialize navigation -> use react hook
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Welcome to the Review Detail Screen</Text>
      <Text style={styles.review}>This is where users can see the details of their review.</Text>
      {/* Navigate back to Home screen */}
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default DetailScreen;