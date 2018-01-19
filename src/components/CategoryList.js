import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';

export default class CategoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };
    }

    componentWillMount() {
        this.setState({ categories: this.props.categories });
    }

    renderCategory({ item }) {
        return <CategoryItem name={item.name} image={item.image} />;
    }

    render() {
        return (
            <FlatList
                style={styles.containerStyle}
                data={this.state.categories}
                keyExtractor={item => item.name}
                renderItem={this.renderCategory}
                horizontal
            />
        );
    }
}

const styles = {
    containerStyle: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 15
    }
};
