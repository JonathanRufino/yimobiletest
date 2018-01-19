import React from 'react';
import { ImageBackground, Text } from 'react-native';

const IMAGES = {
    Pizza: require('../assets/img/pizza_square.png'),
    Cafés: require('../assets/img/cafe_square.png'),
    Japonesa: require('../assets/img/japanese_square.png'),
    Burger: require('../assets/img/burger_square.png'),
    Vegetariano: require('../assets/img/vegetarian_square.png'),
};

const CategoryItem = (props) => (
    <ImageBackground
        style={styles.categoryImage}
        source={IMAGES[props.name]}
    >
        <Text style={styles.categoryName}>
            {props.name}
        </Text>
    </ImageBackground>
);

const styles = {
    categoryImage: {
        height: 85,
        width: 85,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 4,
    },
    categoryName: {
        color: '#FFF',
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'Roboto',
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5
    }
};

export default CategoryItem;
