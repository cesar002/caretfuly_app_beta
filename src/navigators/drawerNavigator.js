import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import MenuComponent from '../components/pures/MenuDrawer'

import Home from './tabNavigatorMain'


const drawerNavigation = createDrawerNavigator({
    Home
},{
    initialRouteName: 'Home',
    drawerWidth: 275,
    contentComponent: props => <MenuComponent />
})


export default createAppContainer(drawerNavigation)