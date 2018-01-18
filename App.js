import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import CategoryList from './src/components/CategoryList';
import Restaurants from './src/assets/restaurants.json';
import RestaurantsList from './src/components/RestaurantsList';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar title={'Restaurantes'} />
                <CategoryList categories={Restaurants.categories} />
                <RestaurantsList restaurants={Restaurants.list} />
            </View>
        );
    }
}
