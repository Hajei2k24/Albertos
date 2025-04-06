import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ProfilePage = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => router.push("/a_Login")}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      {/* Profile Content */}
      <View style={styles.content}>
        <View style={styles.profileHeader}>
          <Image 
            source={require('../../assets/images/carolin.png')} 
            style={styles.profileImage}
          />
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>
        
        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Tasks</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>28</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>
        
        {/* Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.option}>
            <FontAwesome name="cog" size={20} color="#333" />
            <Text style={styles.optionText}>Settings</Text>
            <FontAwesome name="chevron-right" size={16} color="#aaa" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <FontAwesome name="bell" size={20} color="#333" />
            <Text style={styles.optionText}>Notifications</Text>
            <FontAwesome name="chevron-right" size={16} color="#aaa" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.option}>
            <FontAwesome name="question-circle" size={20} color="#333" />
            <Text style={styles.optionText}>Help & Support</Text>
            <FontAwesome name="chevron-right" size={16} color="#aaa" />
          </TouchableOpacity>
        </View>
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
          onPress={() => router.push("/d_AddtoDoPage")}
        >
          <FontAwesome name="edit" size={24} color="#888" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.footerTab, styles.activeTab]}>
          <FontAwesome name="user" size={24} color="#F2722B" />
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
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2722B',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutText: {
    color: '#F2722B',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100, 
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 24,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2722B',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  optionsContainer: {
    marginTop: 16,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
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
  },
  activeTab: {
    borderTopWidth: 2,
    borderTopColor: '#F2722B',
  }
});

export default ProfilePage;