import React from 'react'
import { NavigationBar, Title, Icon, ImageBackground, Overlay } from '@shoutem/ui'
import {withNavigation} from 'react-navigation'
import PropTypes from 'prop-types';
import StatusBar from '../pures/StatusBar'

const Header = ({titulo = '', toBack = false, backgroundImageURL='', navigation}) => {
    if(backgroundImageURL !== ''){
        return(
            <React.Fragment>
                <StatusBar />
                <ImageBackground
                    source = {{uri: backgroundImageURL}}
                    style={{ width: 375, height: 70 }}
                >
                    <Overlay styleName="fill-parent image-overlay">
                        <NavigationBar 
                            styleName = 'clear'
                            hasHistory = {toBack}
                            leftComponent = { toBack? <Icon name='' /> : <React.Fragment/> }
                            centerComponent = {<Title>{titulo}</Title>}
                        />
                    </Overlay>
                </ImageBackground>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <StatusBar />
            <NavigationBar
                styleName="inline"
                hasHistory                
                centerComponent = {<Title>{titulo}</Title>}
            />
        </React.Fragment>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
    toBack: PropTypes.bool,
    backgroundImageURL: PropTypes.string
}

export default withNavigation(Header)