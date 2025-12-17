import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
  quantity: number;
  categoryName: string;
  shopName: string;
  imageUrl: string;
}

interface ApiResponse {
  total: number;
  data: Book[];
  success: boolean;
  message: string;
}

export default function BookList() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://10.0.2.2:8080/api/books');
      const data: ApiResponse = await response.json();
      
      if (data.success) {
        setBooks(data.data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Không thể tải dữ liệu sách');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderBook = ({ item }: { item: Book }) => (
    <View style={styles.bookCard}>
      <Image 
        source={{ uri: item.imageUrl.trim() }} 
        style={styles.bookImage}
        resizeMode="cover"
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>Tác giả: {item.author}</Text>
        <Text style={styles.bookCategory}>Thể loại: {item.categoryName}</Text>
        <Text style={styles.bookShop}>Cửa hàng: {item.shopName}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.bookPrice}>${item.price.toFixed(2)}</Text>
          <Text style={styles.bookQuantity}>Còn lại: {item.quantity}</Text>
        </View>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.loadingText}>Đang tải...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh sách sách ({books.length})</Text>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listContainer: {
    padding: 10,
  },
  bookCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 5,
    marginRight: 15,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  bookCategory: {
    fontSize: 13,
    color: '#888',
    marginBottom: 3,
  },
  bookShop: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  bookQuantity: {
    fontSize: 12,
    color: '#999',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#cc0000',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
