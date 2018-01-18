import React from 'react';
import { View, Text } from 'react-native';

const PriceIndicator = (props) => {
    const renderPrice = () => {
        const maxValue = props.maxValue;
        const price = props.price;
        const indicator = [];
        let color = '';

        for (let i = 0; i < maxValue; i++) {
            if (i < price) {
                color = '#717171';
            } else {
                color = '#A0A0A0';
            }

            indicator.push(<Text style={[styles.price, { color }]} key={i}>$</Text>);
        }

        return indicator;
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            {renderPrice()}
        </View>
    );
};

const styles = {
    price: {
        fontSize: 10,
        fontFamily: 'Roboto',
        padding: 0.25
    }
};

export default PriceIndicator;
