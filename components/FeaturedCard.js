import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const FeaturedCard = ({ item }) => {


    
    const navigation = useNavigation();
    const renderStars = (rating) => {
        const starIcons = [];
        for (let i = 0; i < rating; i++) {
          starIcons.push(
            <FontAwesomeIcon key={i} name="star" size={16} color="gold" />
          );
        }
        return starIcons;
      };
  return (
    <View style={styles.card}>
        <View style = {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {foodItem: item  })}>
        <Image style={styles.cardImage} source = {require('../assets/dish1.png')}
        onError={()=> console.log("Error")}
        />
        </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>${item.price}</Text>
      <View style={styles.starRating}>
        {renderStars(item.rating)}
        <Text style={styles.starRatingText}>{item.rating.toFixed(1)}</Text>
      </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 240,
    height: 290,
    marginTop: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop:8,

  },
  cardDescription: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 8,

    paddingHorizontal: 10,
    // marginBottom: 65,
    
  },

  starRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginLeft: 10,
  },
  starRatingText: {
    marginLeft: 4,
    fontSize: 14,
    color: 'gold',
  },


});

export default FeaturedCard;
