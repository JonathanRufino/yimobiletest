import React from 'react';
import { Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Toolbar = (props) => {
    const toolbarTopPadding = Platform.select({
        ios: styles.iOSPadding,
        android: styles.androidPadding,
    });

    return (
        <LinearGradient
            style={[styles.toolbarStyle, toolbarTopPadding]}
            colors={['#D06600', '#E69A09']}
        >
            <Icon style={styles.iconStyle} name='menu' size={24} color='#FFF' />
            <Text style={styles.titleStyle}>
                {props.title}
            </Text>
            <Icon style={styles.iconStyle} name='tune' size={24} color='#FFF' />
        </LinearGradient>
    );
};

const styles = {
    toolbarStyle: {
        height: 56,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iOSToolbarPadding: {
        paddingTop: 20
    },
    androidToolbarPadding: {
        paddingTop: 0
    },
    titleStyle: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#FFF'
    },
    iconStyle: {
        padding: 12,
        margin: 4
    }
};

export default Toolbar;
