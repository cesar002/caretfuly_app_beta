import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, StatusBar } from 'react-native'
import { withNavigation } from 'react-navigation'

class MenuDrawer extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text> MENU </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        ...Platform.select({
            android:{
                marginTop: StatusBar.currentHeight
            }
        })
    }
})


export default withNavigation(MenuDrawer)