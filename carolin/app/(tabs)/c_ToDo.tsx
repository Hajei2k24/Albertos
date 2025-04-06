import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ToDoScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ToDo</Text>
      </View>
      
      {/* Main Content - Empty State */}
      <View style={styles.content}>
        {/* This area is intentionally left empty as per the screenshot */}
      </View>
      
      {/* Footer Navigation */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerTab} onPress={() => console.log('ToDo tab pressed')}>
          <FontAwesome name="list" size={24} color="#F2722B" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerTab} onPress={() => console.log('Create tab pressed')}>
          <FontAwesome name="edit" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerTab} onPress={() => router.push("/a_Login")}>
          <FontAwesome name="user" size={24} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    // Empty content area
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

export default ToDoScreen;