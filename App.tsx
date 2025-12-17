import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { CheckBox } from '@rneui/themed';

interface TodoItem {
  id: number;
  title: string;
}

export default function App() {

  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [completedList, setCompletedList] = useState<TodoItem[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');

  function handleAddTodo() {
    if (!todoInput.trim()) {
      alert('Please enter a valid todo item.');
      return;
    }
    const newTodo: TodoItem = {
      id: todoList.length + 1,
      title: todoInput,
    };
    setTodoList([...todoList, newTodo]);
    setTodoInput('');
  }

  function handleDeleteTodo(id: number) {
    // Giữ lại các phần tử không có id trùng với id được truyền vào
    const updatedTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodoList);
    setCompletedList([...completedList, ...todoList.filter(todo => todo.id === id)]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello React Native</Text>

      {/* Form */}
      <View>
        <Text style={styles.label}>Input item</Text>
        <TextInput style={styles.input} placeholder='Input item' value={todoInput} onChangeText={setTodoInput}></TextInput>
        <Button title='Add'
          onPress={handleAddTodo}
        ></Button>
      </View>

      {/* List to-do */}
      <View>
        <Text style={styles.label}>List-To-do</Text>
        <FlatList
          data={todoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => 
            <TouchableOpacity >  
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItem}>{item.title}</Text>
                <CheckBox
                  title='Delete'
                  checked={false}
                  onPress={() => handleDeleteTodo(item.id)}
                />
              </View>
            </TouchableOpacity>
        }
        ></FlatList>
      </View>

        {/* List completed item */}
      <View style={{marginTop: 20}}>
        <Text style={styles.label}>List-Completed item</Text>
        <FlatList
          data={completedList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => 
            <TouchableOpacity >
              <View style={styles.todoItemContainer}>
                <Text style={styles.todoItem}>{item.title}</Text>
                <CheckBox
                  title={item.title}
                  checked={true}
                />
              </View>
            </TouchableOpacity>
        }
        ></FlatList>
      </View>
    </View>
  );
}

//không có khái niệm css (dành cho website bình thường)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: 'orange',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 10,
  },
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    left: 10,
  },
});

