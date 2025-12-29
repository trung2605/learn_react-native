import React from 'react';
import { View, Text } from 'react-native';


const HomeScreen = () => {
  return (
    <View>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Welcome to the Review Home Screen</Text>
        <Text>This is where users can start their review process.</Text>
    </View>
  );
}

export default HomeScreen;