import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../pures/Header'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Header titulo = 'HOME' toBack backgroundImageURL = 'https://www.eldiario.es/fotos/Imagen-Cafetin_EDIIMA20170712_0627_4.jpg'/>
                <View>
                    <Text> HOME </Text>
                </View>
            </React.Fragment>
        );
    }
}

export default Home
