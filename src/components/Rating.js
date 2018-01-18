import React from 'react';
import { Text } from 'react-native';

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
        <Text style={[styles.rating, { backgroundColor: getRatingColor() }]}>
            {props.rating.toFixed(1)}
        </Text>
    );
};

const styles = {
    rating: {
        color: '#FFF',
        borderRadius: 10,
        padding: 5,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontFamily: 'Roboto'
    }
};

export default Rating;
