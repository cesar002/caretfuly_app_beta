import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base'
import { withNavigation } from 'react-navigation'
import { HEADER_FOOTER, TAB_ACTIVE, TAB_INACTIVE } from '../../constants/Colors'

class TabFooterHome extends Component {

    constructor(props){
        super(props)

        this.toNavigate = this.toNavigate.bind(this)
    }

    toNavigate(navigation){

    }

    render() {
        return (
            <Footer>
                <FooterTab style = {styles.footerColor}>
                    <Button vertical
                        style = {styles.footerColor}
                        onPress = {()=>{this.toNavigate(this.props.navigation)}}
                    >
                        <Icon type = 'Entypo' name = 'home' 
                            style = {{color: TAB_ACTIVE}}
                        />
                    </Button>
                    <Button vertical
                        style = {styles.footerColor}
                    >
                        <Icon type = 'MaterialCommunityIcons' name = 'view-grid' 
                            style = {{color: TAB_INACTIVE}}
                        />
                    </Button>
                    <Button vertical
                        style = {styles.footerColor}
                    >
                        <Icon type = 'MaterialCommunityIcons' name = 'heart' 
                            style = {{color: TAB_INACTIVE}}
                        />
                    </Button>
                    <Button vertical
                        style = {styles.footerColor}
                    >
                        <Icon type = 'MaterialCommunityIcons' name = 'cart' 
                            style = {{color: TAB_INACTIVE}}
                        />
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const styles = StyleSheet.create({
    footerColor: {
        backgroundColor: HEADER_FOOTER,
    }
})

export default withNavigation(TabFooterHome)
