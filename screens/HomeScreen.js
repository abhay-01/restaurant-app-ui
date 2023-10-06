import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import foodData from '../data/foodData.json';
import FeaturedCard from '../components/FeaturedCard';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';
import { TouchableRipple } from 'react-native-paper';




const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HomeScreen = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFoodData, setFilteredFoodData] = useState([]);

    useEffect(() => {
        // Load data from the imported JSON file
        setFilteredFoodData(foodData);
    }, []);

    const handleSearch = () => {
        // Implement search logic
        // You can filter the data based on the searchQuery and update filteredFoodData
    };

    return (
        <View style={styles.container}>

            <View style={styles.header}>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for dishes..."
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => navigation.navigate('Filter')}
                >
                    <Icon name="filter" size={20} color="white" />
                    <Text style={styles.filterButtonText}>Filter</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Popular Dishes</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 20, color: 'gray', textDecorationLine: 'underline' }}>View All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >

                    <View style={styles.featured}>

                        {filteredFoodData.map((item) => (
                            <FeaturedCard key={item.id} item={item} />

                        ))}
                    </View>

                </ScrollView>

<View style = {styles.top}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 15
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Top Items</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 20, color: 'gray', textDecorationLine: 'underline' }}>View All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={filteredFoodData}
                    renderItem={({ item }) => (
                            <View style={styles.foodItem}>
                                
                                <Image style={styles.foodItemImage} source = {require('../assets/dish1.png')}/>
                                <View>
                                <Text style={styles.foodItemTitle}>{item.title}</Text>
                                <Text style={{
                                    fontSize: 16,
                                    color: '#666',
                                }}>{item.specialty}</Text>
                                <Text style={styles.foodItemDescription}>${item.price}</Text>
                                </View>

                                <TouchableRipple style = {styles.detailButton} onPress={() => navigation.navigate('Details', { foodItem:item })}>
                                    <Text style ={{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                    }}>Details</Text>
                                </TouchableRipple>

                            </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        height: '15%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FA8072',
        marginBottom: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    searchInput: {
        flex: 1,
        paddingHorizontal: 12,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        height: 40,
        marginTop: 'auto',
        marginBottom: 12,
        marginLeft: 8,
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF0800',
        borderRadius: 8,
        marginLeft: 8,
        marginTop: 'auto',
        marginRight: 8,
        marginBottom: 12,
        padding: 8,
    },
    filterButtonText: {
        color: 'white',
        marginLeft: 6,
    },
    foodItem: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    foodItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    foodItemDescription: {
        fontSize: 14,
        color: '#666',
    },
    featured: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 0.4 * height,
        backgroundColor: '#fff',
        marginRight: 10,
        width: '30%'
    },
    top:{

    },
    foodItem: {
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        marginHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
       
    },
    foodItemImage: {
        height:70,
        width: 60,
        marginRight: 10,
        backgroundColor: 'red',
        borderRadius: 8,
    },

    detailButton: {
        backgroundColor: '#FA8072',
        borderRadius: 8,
        padding: 8,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 12,
    },
});

export default HomeScreen;
