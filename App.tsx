
import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
//screen imports
import HomeScreen from './components/review/home';
import AboutScreen from './components/review/about';
import DetailScreen from './components/review/detail';
//splash screen imports
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { OPEN_SANS_FONT } from './util/const';

SplashScreen.preventAutoHideAsync();


export default function App() {
  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
    [OPEN_SANS_FONT]: require('./assets/fonts/Open_Sans-20251227T124558Z-3-001/Open_Sans/static/OpenSans_Condensed-Regular.ttf'),
    // Add other font variants if needed
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
    <View >
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View> 
  );


}



