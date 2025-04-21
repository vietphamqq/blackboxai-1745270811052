import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Chat from './components/Chat';
import TaskManager from './components/TaskManager';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chatContainer}>
        <Chat messages={chatMessages} setMessages={setChatMessages} />
      </View>
      <View style={styles.taskContainer}>
        <TaskManager tasks={tasks} setTasks={setTasks} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e6f6',
  },
  chatContainer: {
    flex: 3,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskContainer: {
    flex: 2,
  },
});
