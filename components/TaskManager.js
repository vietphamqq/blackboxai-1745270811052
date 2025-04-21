import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TaskManager({ tasks, setTasks }) {
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now().toString(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.taskContainer}>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.text}
      </Text>
      <Icon
        name={item.completed ? 'check-circle' : 'circle-thin'}
        size={20}
        color={item.completed ? '#6b46c1' : '#999'}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={addTask}
          returnKeyType="done"
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f7fd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6b46c1',
    marginBottom: 10,
  },
  taskList: {
    flexGrow: 0,
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#e9e6f7',
    borderRadius: 10,
    marginBottom: 5,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#f0e6f6',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#6b46c1',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
