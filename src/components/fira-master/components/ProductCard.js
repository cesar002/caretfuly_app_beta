import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import {BASE_API_URL} from '../../../constants/URLS'
import {connect} from 'react-redux'
import {setProductosDetalles} from '../../../redux/actions/productosActions'
import {getDetallesProducto} from '../../../services/walmartApi'

const Container = styled.View`
  margin-bottom: 20px;
`;

const ImageContainer = styled.View`
  box-shadow: 0px 10px 15px rgba(60, 60, 60, 0.4);
  width: ${Layout.window.width / 2 - 30};
  border-radius: 15px;
  elevation: 4;
  margin-bottom: 15px;
  min-height: 150px;
`;

const Name = styled.Text`
  color: ${Colors.greyColor};
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Price = styled.Text`
  font-weight: 600;
  margin-left: 10px;
  color: ${Colors.blackColor};
`;

const ProductCard = (props) => (
  <TouchableWithoutFeedback onPress={async () => {
      let detalles = await getDetallesProducto(props.idProduct)
      props._setProductoDetalles(detalles)
      props.navigation.navigate("ProductosDetalle")
  }}>
    <Container>
      <ImageContainer>
        <AutoHeightImage
          width={Layout.window.width / 2 - 30}
          source={{ uri: `${BASE_API_URL}${props.imgSrc}` }}
          style={{
            borderRadius: 15
          }}
        />
      </ImageContainer>
      <Name>{props.name}</Name>
      <Price>{`$${props.price.toFixed(2)}`}</Price>
    </Container>
  </TouchableWithoutFeedback>
);

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.string.isRequired,
  idProduct: PropTypes.string.isRequired,
};

ProductCard.defaultProps = {
  name: ''
}

const mapStateToProps = state => {
  return{

  }
}

const mapDispatchToProps = dispatch => {
  return{
    _setProductoDetalles(detalles){
      dispatch(setProductosDetalles(detalles))
    }
  }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(ProductCard));
