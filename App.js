import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';

export default class App extends Component {
    render() {
        return (
            <View>
                <Toolbar title={'Restaurantes'} />
            </View>
        );
    }
}
