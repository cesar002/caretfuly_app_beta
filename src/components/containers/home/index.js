import React, { Component } from 'react';
import { Text } from 'react-native';
import {Screen} from '@shoutem/ui'
import Header from '../../pures/Header'

class Home extends Component {

    render() {
        return (
            <Screen>
                <Header titulo = 'HOME' toBack backgroundImageURL = 'https://www.eldiario.es/fotos/Imagen-Cafetin_EDIIMA20170712_0627_4.jpg'/>
                <Text>HOME</Text>
            </Screen>
        );
    }
}

export default Home
