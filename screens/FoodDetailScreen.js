import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import foodData from '../data/foodData.json';
import FeaturedCard from '../components/FeaturedCard';

const FoodDetailScreen = ({ route }) => {
  const { foodItem } = route.params;
  const fetchSimilarFoodItems = (similarItemIds) => {
    return foodData.filter((item) => similarItemIds.includes(item.id));
  };

  // Fetch similar food items
  const similarItems = fetchSimilarFoodItems(foodItem.similarItems);

  return (
    <ScrollView style={styles.container}>
      <Image source = {require('../assets/dish1.png')} style={styles.foodImage} /> 

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{foodItem.title}</Text>
        <Text style={styles.description}>{foodItem.description}</Text>

        <View style={styles.ratingContainer}>
          <FontAwesomeIcon name="star" size={20} color="gold" />
          <Text style={styles.rating}>{foodItem.rating.toFixed(1)}</Text>
        </View>

        <Text style={styles.ingredientsTitle}>Ingredients:</Text>
        {foodItem.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>
            {ingredient}
          </Text>
        ))}

        <Text style={styles.price}>Price: ${foodItem.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.similarItemsTitle}>Similar Food Items</Text>

      <View style={styles.similarItemsContainer}>
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.similarItemsScrollView}
  >
    {similarItems.map((item) => (
      <FeaturedCard key={item.id} item={item} />
    ))}
  </ScrollView>
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foodImage: {
    width: '100%',
    height: 290,
    marginTop: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontSize: 20,
    marginLeft: 8,
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0800',
    marginTop: 16,
  },
  similarItemsContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
  similarItemsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 16,
  },
  similarItemsScrollView: {
    flexDirection: 'row',
  },
  similarItemImage: {
    width: 120,
    height: 120,
    marginRight: 12,
    borderRadius: 8,
  },
});

export default FoodDetailScreen;
