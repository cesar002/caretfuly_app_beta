import React from 'react';
import PropTypes from 'prop-types'
import Constants  from 'expo-constants'

import { StyleSheet, Platform, View } from 'react-native'

const StatusBar = props => {
    return Platform.OS === 'ios' ? <React.Fragment/> : <View style = {[styles.statusBar, {backgroundColor: props.backgroundColor}]}/>
}

StatusBar.propTypes = {
    backgroundColor: PropTypes.string
}

StatusBar.defaultProps = {
    backgroundColor: '#BDBDBD',
}

const styles = StyleSheet.create({
    statusBar:{
        height: Constants.statusBarHeight,
    }
})

export default StatusBar;