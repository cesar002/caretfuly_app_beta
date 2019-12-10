import React from "react";
import styled from "styled-components";
import {Platform} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { withNavigation } from 'react-navigation'
import BigButton from "./BigButton";
import {Firebase} from '../../../firebase'
import { googleAuth } from '../../../constants/AUTHKEYS'
import * as Google from 'expo-google-sign-in'
import { authAsync } from 'expo-app-auth'

const Text = styled.Text`
  margin-left: 10px;
`;

const loginGoogle = async (navigation) =>{
  try{

      await Google.initAsync({
        clientId: Platform.OS === 'ios'? googleAuth.ios : googleAuth.android
      })
      await Google.askForPlayServicesAsync();
      const data = await Google.signInAsync()

      console.log(data)
    // const result = await Google.logInAsync({
    //   androidClientId: googleAuth.android,
    //   iosClientId: googleAuth.ios,
    //   scopes: ["profile", "email"]
    // })

    // if(result.type === "success"){
    //   const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken)

    //   firebase.auth().signInWithCredential(credential)
    //   .then(()=>{
    //       firebase.auth().onAuthStateChanged(user => {
    //         if(user !== null){
    //           navigation.navigate('app')
    //         }
    //       })
    //   })

    

  }catch(error){
    console.log(error)
  }
}

const GoogleButton = ({navigation}) => (
  <BigButton transparent={false} onPress={() => {loginGoogle(navigation)}}>
    <Ionicons name="logo-google" size={22} color="#4287F6" />
    <Text>Continuar con Google</Text>
  </BigButton>
);

export default withNavigation(GoogleButton);
