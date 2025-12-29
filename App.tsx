
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreen from './components/review/home';
import AboutScreen from './components/review/about';
import DetailScreen from './components/review/detail';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';



SplashScreen.preventAutoHideAsync();


export default function App() {
  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
   'trungle': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View>
      <View>
        <HomeScreen />
        <AboutScreen />
        <DetailScreen />
      </View>
    </View>


  );

  
}



