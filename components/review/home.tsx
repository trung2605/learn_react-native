import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // 1. Import Hook
interface Review {
  id: number;
  title: string;
  star: number;
}

const HomeScreen = () => {

  // Initialize navigation -> use react hook 
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = React.useState<Review[]>([
    { id: 1, title: 'Review 1', star: 5 },
    { id: 2, title: 'Review 2', star: 4 },
    { id: 3, title: 'Review 3', star: 3 },
  ]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Review List</Text>

        <View>
          <FlatList
            data={reviews}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
              // Navigate to Detail screen with parameters (move to route.d.ts to define parameter types)
                onPress={() => navigation.navigate('review-detail', { id: item.id, title: item.title, star: item.star })}
              >
                <View style={styles.reviewItem}>
                  <Text style={styles.reviewTitle}>{item.title}</Text>
                  <Text>Rating: {item.star} stars</Text>
                </View>
              </TouchableOpacity>
            )}
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
    }, 
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    reviewTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;