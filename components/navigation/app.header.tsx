import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingVertical: 10,
        alignItems: "center",
        // paddingTop: 40
    },
    headerText: {
        flex: 1,
        textAlign: "center",
        fontSize: 25,
    }
})
const AppHeader = () => {
    // const navigation: NavigationProp<RootStackParamList> = useNavigation();
    // với cách cũ này thì không dùng được openDrawer 
    // vì NavigationProp không có hàm này mà là StackNavigationProp
    const navigation: any = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialIcons
                name="menu" size={40} // dùng custom icon trong expo 
                color="black"
                onPress={() => { navigation.openDrawer() }}
                // Mở drawer khi nhấn vào icon (đọc trong tài liệu react navigation drawer)
            />
            <Text style={[styles.headerText, globalStyles.globalFontFamily]}>Trung Lê</Text>
        </View>
    )
}

export default AppHeader;
