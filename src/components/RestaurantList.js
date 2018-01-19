import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import RestaurantItem from './RestaurantItem';

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        };
    }

    componentWillMount() {
        this.setState({ restaurants: this.props.restaurants });
    }

    renderRestaurant({ item }) {
        return <RestaurantItem restaurant={item} />;
    }

    renderSeparator() {
        return (<View
            style={{
                height: 1,
                width: '100%',
                backgroundColor: '#E0E0E0'
            }} 
        />);
    }

    render() {
        return (
            <FlatList
                data={this.state.restaurants}
                keyExtractor={item => item.image}
                renderItem={this.renderRestaurant}
                ListHeaderComponent={this.renderSeparator}
                ItemSeparatorComponent={this.renderSeparator}
                ListFooterComponent={this.renderSeparator}
            />
        );
    }
}
