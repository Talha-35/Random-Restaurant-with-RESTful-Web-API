import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

// "id": 5673,
// "uid": "76e944b6-5527-4b07-be18-7a6b0a28491f",
// "name": "Salty Curry",
// "type": "Caribbean",
// "description": "SVIs mission is to deliver quality products at affordable prices to our independent retailers, wholesalers and food service partners around the world by providing international procurement, distribution, marketing and supply chain management.",
// "review": "This particular location like the many other restaurants down the block has ample seating and a second floor.",
// "logo": "https://loremflickr.com/500/500/restaurant",
// "phone_number": "1-779-732-4390",
// "address": "2864 Stephan Land, Charissahaven, DE 76494-1459",


const RestaurantCard = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>{props.item.name}</Text>
            </View>

            <Text style={styles.typeText}>{props.item.type}</Text>

            <Image
                style={styles.logo}
                source={{ uri: props.item.logo }}
            />

            <Text numberOfLines={5} style={styles.description}>{props.item.description}</Text>
            <Text numberOfLines={5} style={styles.review}>{props.item.review}</Text>

        </View>
    )
}

export { RestaurantCard }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#c51162',
    },
    headerText: {
        color : '#ff6d00',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    },
    typeText: {
        fontStyle: 'italic',
        padding: 10,
        fontSize: 18,
        textAlign: 'center'
    },
    logo: {
        height: Dimensions.get('window').height / 3
    },
    description: {
        marginVertical : 15,
        margin: 5,
        fontWeight: 'bold' ,
        textAlign : "justify" ,
        marginHorizontal : 5 ,
        color : '#455a64',
        fontSize: 17,
        
    },
    review: {
        color : '#455a64',
        margin: 5,
        fontSize: 17,
        fontStyle: 'italic',
        textAlign : "justify" ,
        marginHorizontal : 5
    }
})
