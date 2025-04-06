import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const CompletedToDoPage = () => {
  const router = useRouter();
  // Sample completed tasks data
  const completedTasks = [
    { id: '1', text: 'Completed 1' },
    { id: '2', text: 'Completed 2' },
    { id: '3', text: 'Completed 3' },
    { id: '4', text: 'Completed 4' },
    { id: '5', text: 'Completed 5' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="trash-outline" size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Completed Tasks</Text>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <FlatList
          data={completedTasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
      
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/c_ToDo")}
        >
          <FontAwesome name="list" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => console.log('Create tab pressed')}
        >
          <FontAwesome name="edit" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.footerTab} 
          onPress={() => router.push("/a_Login")}
        >
          <FontAwesome name="user" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F2722B',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  list: {
    flex: 1,
    marginTop: 12,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  iconButton: {
    padding: 4,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#F2722B',
  },
  footerTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default CompletedToDoPage;