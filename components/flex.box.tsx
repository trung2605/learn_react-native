import React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBlockColor: 'black',
        borderWidth: 2,
    },
    item1: {
        backgroundColor: 'powderblue',
        padding: 50,
        flex: 1,
    },
    item2: {
        backgroundColor: 'skyblue',
        padding: 50,
    },
    item3: {
        backgroundColor: 'steelblue',
        padding: 50,
    },
});

function FlexBox() {
    return (
        <View style={styles.container}>

                <View style={styles.item1}><Text>item1</Text></View>
                <View style={styles.item2}><Text>item2</Text></View>
                <View style={styles.item3}><Text>item3</Text></View>
        </View>
    );
}

export default FlexBox;