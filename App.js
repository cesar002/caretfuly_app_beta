import React from 'react';
import FlowAuth from './src/navigators/flowAuthNavigation'

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isReady: false
    }

  }

  async componentDidMount(){

    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'SpaceMono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'Rubik-Regular': require('@shoutem/ui/fonts/Rubik-Regular.ttf')
      })

      this.setState({ isReady: true });
  }

  render(){

    if(!this.state.isReady){
      return <React.Fragment />
    }

    return (
      <FlowAuth />
    );
  }

}

