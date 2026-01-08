import React, { useEffect } from 'react';
import { View } from 'react-native'; // View vẫn cần thiết nếu bạn muốn bọc ngoài, nhưng Navigation thường tự xử lý
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Screen imports
import HomeScreen from './components/review/home';
import AboutScreen from './components/review/about';
import DetailScreen from './components/review/detail';

// Const imports
import { OPEN_SANS_FONT } from './util/const';

// Navigation imports (React Navigation v7)
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Giữ Splash Screen hiển thị cho đến khi tải xong font
SplashScreen.preventAutoHideAsync();

// 1. Tạo Drawer (Menu bên trái) chứa Home và About
const MyDrawer = createDrawerNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: { title: 'Home Game' },
    },
    About: {
      screen: AboutScreen,
      options: { title: 'About Us' },
    },
  },
});

// 2. Tạo Root Stack (Chứa Drawer và màn hình Detail)
// Logic: Drawer là màn hình chính, Detail là màn hình con được push lên
const RootStack = createNativeStackNavigator({
  initialRouteName: 'DrawerRoot',
  screens: {
    DrawerRoot: {
      screen: MyDrawer, // Nhúng Drawer vào đây
      options: { 
        headerShown: false // Ẩn header của Stack để dùng header của Drawer
      },
    },
    Detail: {
      screen: DetailScreen,
      options: { title: 'Game Details' },
    },
  },
});

// 3. Tạo Navigation container từ cấu trúc trên
const Navigation = createStaticNavigation(RootStack);

export default function App() {
  // Load fonts
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

  // Render
  // createStaticNavigation đã tạo ra một Component hoàn chỉnh, bạn chỉ cần render nó
  return <Navigation />;
}