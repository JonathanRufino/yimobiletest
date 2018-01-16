import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import CategoryList from './src/components/CategoryList';
import Restaurants from './src/assets/restaurants.json';

export default class App extends Component {
    render() {
        return (
            <View>
                <Toolbar title={'Restaurantes'} />
                <CategoryList categories={Restaurants.categories} />
            </View>
        );
    }
}
