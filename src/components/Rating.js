import React from 'react';
import { View, Text } from 'react-native';

const Rating = (props) => {
    const getRatingColor = () => {
        const rating = props.rating;

        if (rating >= 9.0) {
            return '#3CCD36';
        } else if (rating >= 8.0) {
            return '#93CD36';
        } else if (rating >= 7.0) {
            return '#CBCD36';
        }

        return '#CD6136';
    };

    return (
        <View style={[styles.container, { backgroundColor: getRatingColor() }]}>
            <Text style={styles.rating}>
                {props.rating.toFixed(1).toString().replace('.', ',')}
            </Text>
        </View>
    );
};

const styles = {
    container: {
        borderRadius: 10,
        padding: 5,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rating: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#FFF',
    },
};

export default Rating;
