import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import CategoryList from './src/components/CategoryList';
import Restaurants from './src/assets/restaurants.json';
import RestaurantList from './src/components/RestaurantList';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar title={'Restaurantes'} />
                <CategoryList categories={Restaurants.categories} />
                <RestaurantList restaurants={Restaurants.list} />
            </View>
        );
    }
}
