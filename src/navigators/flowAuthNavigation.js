import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Auth from '../views/authView'
import App from './drawerNavigator'
import PreLoadAuth from '../views/preAuthView'

const flowAuth = createSwitchNavigator({
    PreLoadAuth,
    App,
    Auth,
},{
    headerMode: 'none',
    initialRouteName: 'PreLoadAuth'
})

export default createAppContainer(flowAuth)