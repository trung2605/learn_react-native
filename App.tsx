import React from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import {useState} from 'react';

export default function App() {
  //state
  //Tự động đoán kiểu dữ liệu
  //Có thể ép kiểu dữ liệu với useState <type>
  const [title, setTitle] = useState<string>('Hello World! React Native');
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [name,setName] = useState<string>('Alice');
  const [age,setAge] = useState<number>(25);

  const [userInfo, setUserInfo] = useState<{
    name: string;
    age: number;
  }>({
    name: 'John Doe',
    age: 30,
  });

  //jsx
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text>Count: {count}</Text>
      <Text>Loading: {isLoading ? 'Yes' : 'No'}</Text>
      <Text>User Name: {userInfo.name}</Text>
      <Text>User Age: {userInfo.age}</Text>
      <Text>{JSON.stringify(userInfo)}</Text>
      <Text>Name: {name}</Text>
      <TextInput
      // Dùng để tự động xuống hàng
        multiline={true}
        autoCapitalize='characters'
        keyboardType='numeric'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '80%',
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder="Type here to change title"
        onChangeText={text => setName(text)}
        maxLength={2}
      />
      <View>  
        {/* Được thực hiện khi nhấn nút (tab thay vì click) */}
        <Button title="Click Me" onPress={() => setTitle("con cac")}></Button> 

        {/* Trick use arrow function to avoid immediate execution */}
        <Button color={"red"} title="Another Button" onPress={() => alert("Button Pressed")}></Button>
      </View>
    </View>
  );
}

//không có khái niệm css (dành cho website bình thường)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink',
  },
});

