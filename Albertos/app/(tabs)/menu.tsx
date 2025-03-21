import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const pizzaItems = [
    {
      name: 'All Cheese Pizza',
      price: '$18',
      image: require('../../assets/images/pizza1.png'),
    },
    {
      name: 'Pepperoni Pizza',
      price: '$20',
      image: require('../../assets/images/pizza2.avif'),
    },
    {
      name: 'Veggie Supreme Pizza',
      price: '$22',
      image: require('../../assets/images/pizza3.png'),
    },
    {
      name: 'Meat Lovers Pizza',
      price: '$25',
      image: require('../../assets/images/pizza4.png'),
    },
    {
      name: 'BBQ Chicken Pizza',
      price: '$22',
      image: require('../../assets/images/pizza1.png'),
    },
    {
      name: 'Hawaiian Pizza',
      price: '$20',
      image: require('../../assets/images/pizza2.avif'),
    },
    {
      name: 'Margarita Pizza',
      price: '$19',
      image: require('../../assets/images/pizza3.png'),
    },
    {
      name: 'Buffalo Chicken Pizza',
      price: '$23',
      image: require('../../assets/images/pizza4.png'),
    },
  ];

  const filteredPizzas = pizzaItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>👤</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for pizza..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.pizzaGrid}>
          {filteredPizzas.map((item, index) => (
            <TouchableOpacity key={index} style={styles.pizzaItem}>
              <Image
                source={item.image}
                style={styles.pizzaImage}
              />
              <Text style={styles.pizzaName}>{item.name}</Text>
              <Text style={styles.pizzaPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {filteredPizzas.length === 0 && (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No pizzas found matching "{searchQuery}"</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIconText: {
    fontSize: 18,
  },
  scrollView: {
    flex: 1,
  },
  pizzaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  pizzaItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 230, // Increased height for taller boxes
  },
  pizzaImage: {
    width: '100%',
    height: 120, // Keeping image proportionate to the taller box
    borderRadius: 10,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  pizzaName: {
    marginTop: 15, // Increased margin for better spacing in taller box
    fontSize: 16, // Slightly larger font for better proportion
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },
  pizzaPrice: {
    marginTop: 5, // Increased margin for better spacing
    fontSize: 15, // Slightly larger font for better proportion
    color: '#888',
    textAlign: 'left',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  searchInput: {
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 15,
    backgroundColor: '#f0f0f0',
  },
  noResultsContainer: {
    padding: 20,
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#888',
  },
});

export default Menu;