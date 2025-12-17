import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import {useState} from 'react';

export default function App() {
  
  const [students, setStudents] = useState([
    {id: 1, name: 'Nguyen Van A', age: 20},
    {id: 2, name: 'Tran Thi B', age: 21},
    {id: 3, name: 'Le Van C', age: 22},
    {id: 4, name: 'Pham Thi D', age: 23},
    {id: 5, name: 'Hoang Van E', age: 24},
    {id: 6, name: 'Vu Thi F', age: 25},
  ]);
  
  
  //jsx 
  return (
    <View style={styles.container}>
      <Text>Danh sách sinh viên</Text>

      {/* Kiểu truyền data thẳng */}
      <FlatList
        numColumns={2}
        data={students}
        keyExtractor={(item) => item.id.toString()} //nếu không có keyExtractor sẽ bị cảnh báo
        renderItem={(data) => (
          <Text style={{flex: 1}}>{data.item.name} - {data.item.age} tuổi</Text>
        )}
      />

      {/* kiểu truyền data object destructuring */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={{marginTop: 10}}>
            <Text>{item.name} - {item.age} tuổi</Text>
          </View>
        )}
      />
    </View>
  );
}

//không có khái niệm css (dành cho website bình thường)

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});

