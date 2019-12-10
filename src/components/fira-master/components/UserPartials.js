import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../constants/Colors";
import SmallButton from "./SmallButton";
import { Button, Text } from 'native-base'
import { View } from 'react-native';


const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DataContainer = styled.View`
  margin-left: 10px;
`;

const Name = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const Rating = styled.Text`
  color: ${Colors.greyColor};
`;

const FirstButtonContainer = styled.View`
  margin-right: 2.5%;
`;

const UserPartials = ({ avatarUrl, rating, name }) => (
  <Container>
    <Column>
      <FirstButtonContainer>
        <SmallButton text="Message" />
      </FirstButtonContainer>
      {/* <SmallButton text="Buy Now" accent /> */}
      <View
        style = {{backgroundColor: 'pink'}}
      >
        <Button rounded style = {{backgroundColor: Colors.tintColor}}>
          <Text>Comprar</Text>
        </Button>
      </View>
    </Column>
  </Container>
);

export default UserPartials;
