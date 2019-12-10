import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import BigButton from "./BigButton";
import Firebase from '../../../firebase'
import * as Facebook from 'expo-facebook';
import { withNavigation } from 'react-navigation'
import { Alert } from 'react-native'

import { facebookAuth } from '../../../constants/AUTHKEYS'

const Text = styled.Text`
  margin-left: 10px;
`;

const LoginFacebook = async (navigation) => {
  const data = await Facebook.logInWithReadPermissionsAsync(facebookAuth.AppID, {permissions: ['public_profile']})

  if(data.type === 'success'){

    const credential = Firebase.auth.FacebookAuthProvider.credential(data.token);

    Firebase.auth().signInWithCredential(credential)
    .then(()=>{
      Firebase.auth().onAuthStateChanged(user => {
          if(user !== null){
              navigation.navigate('App')
          }
      })
    })
    .catch(error => {
      Alert.alert('Error', 'Error al iniciar sesión')
    })

  }
}

const FacebookButton = ({navigation}) => (
  <BigButton transparent={false} onPress={() => {LoginFacebook(navigation)}}>
    <Ionicons name="logo-facebook" size={22} color="#3b5998" />
    <Text>Continuar con Facebook</Text>
  </BigButton>
);

export default withNavigation(FacebookButton);
