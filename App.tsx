import { Text, View } from "react-native"
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppNavigation from "./components/navigation/app.navigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import { OPEN_SANS_FONT } from "./utils/const";

SplashScreen.preventAutoHideAsync();
const App = () => {
     const [loaded, error] = useFonts({
    [OPEN_SANS_FONT]: require('./assets/fonts/Open_Sans-20251227T124558Z-3-001/Open_Sans/static/OpenSans_Condensed-Regular.ttf'),
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
      // ensure safe area for different devices with SafeAreaView
      // use flex:1 to make it full screen
        <SafeAreaView style={{ flex: 1 }}> 
            <NavigationContainer>
                <AppNavigation />
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default App;

