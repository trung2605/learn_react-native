//App.tsx
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

//navigation imports
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

  //navigation stack definition 
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    screens: {
      Home: {
        name: 'Home', //Internal name of the screen
        screen: HomeScreen, //Component to render as the screen
        options: { title: 'Home Game' }, //Options for the screen name displayed 
      },
      Detail: {
        name: 'Detail',
        screen: DetailScreen,
        options: { title: 'Game Details' },
      },
      About: {
        name: 'About',
        screen: AboutScreen,
        options: { title: 'About Us' },
      },
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return (
    <Navigation />
  );
}



