import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'

import TabComponent from '../components/pures/TabFooterHome'
import Inicio from '../views/app/Home/Inicio'
import Favoritos from '../views/app/Home/favoritos'
import Carrito from '../views/app/Home/carrito'


const TabNavigatorMain = createBottomTabNavigator({
    Inicio,
    Favoritos,
    Carrito,
},{
    initialRouteName: 'Inicio',
    tabBarComponent: props => <TabComponent />
})

export default createAppContainer(TabNavigatorMain)