import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';
import AppHeader from './app.header';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{ header: () => <AppHeader /> }}
                // Truyền component AppHeader để tùy chỉnh header
            />
            <Stack.Screen
                name="review-detail"
                component={DetailScreen}
                options={{ title: 'Chi tiết Review' }}
            />
        </Stack.Navigator>
    )
}
const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen name="home1"
            //Đối với trang chủ thì vẫn render header rỗng để không hiển thị header mặc định
                options={{ title: 'Trang chủ', header: () => <></> }}
                component={HomeLayout} />
                
            <Drawer.Screen
                name="about" component={AboutScreen}
                options={{
                    title: 'Thông tin',
                    header: () => <AppHeader />
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppNavigation;
