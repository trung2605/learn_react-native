import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
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
  
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
  //function thêm sinh viên
  const handleAddStudent = () => {
    if (name.trim() === '' || age.trim() === '') {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }
    
    const newStudent = {
      id: students.length + 1, 
      name: name.trim(), 
      age: parseInt(age)
    };
    
    setStudents([...students, newStudent]);
    setName('');
    setAge('');
  };
  
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Danh sach sinh vien</Text>
      {students.map((student) => {
        return (
          <ScrollView key={student.id} style={{marginTop: 20, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5}}>
            <Text style={{fontSize: 18}}>Name: {student.name}</Text>
            <Text style={{fontSize: 18}}>Age: {student.age}</Text>
          </ScrollView>
        );
      })}

      {/* Nhập tên sinh viên */}
      <TextInput 
        placeholder="Nhap ten sinh vien"
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, paddingHorizontal: 10}}
        value={name}
        onChangeText={setName}
      />
      
      {/* Nhập tuổi sinh viên */}
      <TextInput 
        placeholder="Nhap tuoi sinh vien"
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, paddingHorizontal: 10}}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      
      {/* Nút thêm sinh viên */}
      <Button 
        title="Them sinh vien"
        onPress={handleAddStudent}
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

