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
        style={styles.imageStyle}
        source={IMAGES[props.name]}
    >
        <Text style={styles.textStyle}>
            {props.name}
        </Text>
    </ImageBackground>
);

const styles = {
    imageStyle: {
        height: 85,
        width: 85,
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 4,
    },
    textStyle: {
        color: '#FFF',
        fontSize: 10,
        marginBottom: 10,
        fontFamily: 'Roboto',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    }
};

export default CategoryItem;
