import React from 'react';
import { View, StyleSheet } from 'react-native'
import { BallIndicator } from 'react-native-indicators'
import { withNavigation } from 'react-navigation'

import firebase from '../../../services/Firebase'

class PreAuthLoading extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.props.navigation.navigate('App')
            }else{
                this.props.navigation.navigate('Auth')
            }
        })
    }

    render(){
        return(
            <View style = {styles.container}>
                <BallIndicator size = {20} color = '#848484' />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})

export default withNavigation(PreAuthLoading)