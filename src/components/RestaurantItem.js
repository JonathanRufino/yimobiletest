import React from 'react';
import { View, Image, Text } from 'react-native';
import PriceIndicator from './PriceIndicator';
import Rating from './Rating';

const IMAGES = {
    Outback: require('../assets/img/outback.png'),
    Abbraccio: require('../assets/img/abbraccio.png'),
    Gero: require('../assets/img/gero.png'),
    Pobre: require('../assets/img/pobre_juan.png'),
    Divino: require('../assets/img/divinofogao.png'),
};

const RestaurantItem = (props) => {
    const restaurant = props.restaurant;

    const formatDistance = () => {
        let distance = restaurant.distance;

        if (distance > 1000) {
            distance /= 1000.0;
            return `${distance.toString().replace('.', ',')} km`;
        }

        return `${distance} m`;
    };
 
    return (
        <View style={styles.mainContainer}>
            <View style={styles.infoContainer}>
                <Image
                    style={styles.restaurantImage}
                    source={IMAGES[restaurant.name.split(' ')[0]]}
                />
                <View style={{ flexGrow: 1, marginHorizontal: 10 }}>
                    <Text style={styles.restaurantName}>
                        {restaurant.name}
                    </Text>
                    <View style={styles.detailsContainer}>
                        <View style={[styles.column, { flex: 5 }]}>
                            <Text style={styles.detailText}>
                                {restaurant.type}
                            </Text>
                            <Text style={styles.detailText}>
                                {formatDistance()}
                            </Text>
                        </View>
                        <View style={[styles.column, { flex: 7 }]}>
                            <PriceIndicator
                                style={styles.detailText}
                                price={restaurant.price}
                                maxValue={4}
                            />
                            <Text style={styles.detailText}>
                                {restaurant.neigborhood}
                            </Text>
                        </View>
                    </View>
                </View>
                <Rating rating={restaurant.rating} />
            </View>
            <Text style={styles.commentText}>
                "{restaurant.comment}"
            </Text>
        </View>        
    );
};

const styles = {
    mainContainer: {
        flexDirection: 'column',
        margin: 10
    },
    infoContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    restaurantImage: {
        width: 100,
        height: 65
    },
    restaurantName: {
        color: '#D06600',
        fontSize: 19,
        fontFamily: 'Roboto'
    },
    infoStyle: {
        color: '#717171',
        fontFamily: 'Roboto'
    },
    commentText: {
        fontSize: 10,
        marginTop: 5,
        fontFamily: 'Roboto',
        color: '#717171',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    detailText: {
        fontSize: 10,
        padding: 2,
        fontFamily: 'Roboto',
        color: '#717171',
    }
};

export default RestaurantItem;
