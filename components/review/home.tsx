import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 1. Import Hook

const HomeScreen = () => {

  // Initialize navigation -> use react hook 
  const navigation = useNavigation<any>(); 

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Review Home Screen</Text>
        <Text style={styles.subtitle}>Start your review process below.</Text>
        
        <View style={styles.buttonContainer}>
            <Button 
                title="Go to Details" 
                onPress={() => navigation.navigate('Detail')} 
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button 
                title="About Us" 
                onPress={() => navigation.navigate('About')} 
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24, 
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 30,
        textAlign: 'center',
        color: '#666'
    },
    buttonContainer: {
        width: '100%',
        marginVertical: 10, 
    }
});

export default HomeScreen;