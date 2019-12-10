import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Button, Text } from 'native-base';
import Count from '../../pures/Counter';
import {BASE_API_URL} from '../../../constants/URLS'
import {connect} from 'react-redux'
import * as carritoActions from '../../../redux/actions/carritoComprasActions'

const getHeight = () =>
  Layout.window.height <= 667
    ? Layout.window.height / 2.8
    : Layout.window.height / 2.3;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ScrollView = styled.ScrollView``;

const Image = styled.Image`
  width: ${Layout.window.width};
  height: ${getHeight()};
  position: relative;
`;

const DataContainer = styled.View`
  padding-horizontal: 20px;
`;

const TimeLocation = styled.Text`
  color: ${Colors.greyColor};
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const NamePrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PriceSection = styled.View`
  flex-direction: row
  margin-bottom: 20px;
`

const NamePriceText = styled.Text`
  font-size: 24px;
  color: ${Colors.blackColor};
  font-weight: 600;
`;

const NamePriceTextLineThrough = styled.Text`
  font-size: 24px;
  color: #B40404;
  font-weight: 600;
  text-decoration-line: line-through;
`;


const Divider = styled.View`
  width: 100%;
  height: 2px;
  background-color: rgba(151, 151, 151, 0.1);
  margin-bottom: 25px;
`;

const Description = styled.Text`
  margin-bottom: 25px;
  color: ${Colors.greyColor};
`;

class ProducDetail extends React.Component{

  constructor(props){
    super(props)

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.renderImages = this.renderImages.bind(this)
    this.renderPrice = this.renderPrice.bind(this)
    this.agregarProducto = this.agregarProducto.bind(this)

    this.state = {
      count: 1,
    }

  }

  increment(){
      let c = this.state.count;

      c = c+1;
      this.setState({
          count: c
      })
  }

  decrement(){
      let c = this.state.count;

      if(c == 1){ return }

      c = c - 1;
      this.setState({
          count: c
      })
  }

  renderImages(){
    return this.props.detalles.image.map((image, i) => {
      return <Image key = {i} resizeMode = 'cover' source = {{
          uri: `${BASE_API_URL}${image.LARGE}`
      }} />
    })
  }

  renderPrice(){

  }

  agregarProducto(){
    let producto = {
      id: this.props.detalles.id,
      name: this.props.detalles.name,
      price: Number(this.props.detalles.basePrice),
      count: this.state.count,
      img: `${BASE_API_URL}${this.props.detalles.image[0].SMALL}`
    }

    this.props.agregarProductoCarrito(producto)
  }



  render(){
    return(
      <Container>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }} bounces={false}>
          <Swiper
            style={{ height: getHeight(), marginBottom: 20 }}
            activeDotColor="white"
            dotColor="rgba(255, 255, 255, 0.3)"
          >
            {this.renderImages()}
          </Swiper>
          <DataContainer>
            <NamePrice>
                <NamePriceText>{this.props.detalles.name}</NamePriceText>
            </NamePrice>
            <PriceSection>
                {/* <NamePriceTextLineThrough>$75</NamePriceTextLineThrough> */}
                <NamePriceText>{this.props.detalles.basePrice}</NamePriceText>
            </PriceSection>
            <Divider />
            <Description>
              {this.props.detalles.descrption}
            </Description>
          </DataContainer>
          <View style = {styles.CompraSection}>
            <View style = {styles.CountProductSection}>
              <Count increment = {this.increment} decrement = {this.decrement} count = {this.state.count} />
            </View>
            <View style = {styles.BuyButtonSection}>
              <Button rounded style={{backgroundColor: Colors.tintColor, alignItems: 'center', justifyContent: 'center'}}
                onPress = {this.agregarProducto}
              >
                <Text style={{fontSize: 12}}>Agregar al carrito</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  CompraSection:{
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  CountProductSection:{
    flex: 0.5,
  },
  BuyButtonSection:{
    flex: 0.5,
    paddingLeft: 15,
  }
})

const mapStateToProps = state => ({
  cantidadProductos: state.carritoComprasData.carrito
});

const mapDispatchToProps = dispatch => {
  return{
      agregarProductoCarrito(producto){
        dispatch(carritoActions.addProductoCarrito(producto))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProducDetail);
