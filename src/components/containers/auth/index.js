import React from "react";
import styled from "styled-components";
import StatusBar  from "../../pures/StatusBar";
import Layout from "../../fira-master/constants/Layout";
import SocialLogin from "../../fira-master/components/SocialLogin";
import AuthText from "../../fira-master/components/AuthText";
import AuthInput from "../../fira-master/components/AuthInput";
import AuthButton from "../../fira-master/components/AuthButton";

const Container = styled.View`
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const ImageBg = styled.Image`
    position: absolute;
    bottom: 0;
    height: ${Layout.window.height};
    width: ${Layout.window.width};
`;

const ButtonsContainer = styled.View`
    justify-content: flex-end;
    flex: 1;
    width: 80%;
`;

const Divider = styled.Text`
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    margin-bottom: 25px;
`;

const AuthTextContainer = styled.View`
    margin: 30px 0px;
`;

const EmailAuth = styled.KeyboardAvoidingView`
    align-items: center;
    width: 100%;
`;

const EmailAuthForm = styled.View`
    width: 100%;
    margin-bottom: 25px;
`;

const Auth = ({
    navigation
    }) => (
    <Container>
        <ImageBg
        source={require("../../../../assets/images/authBackground.jpg")}
        resizeMode="cover"
        />
        <StatusBar barStyle="light-content" />
        <ButtonsContainer>
        <SocialLogin />
        </ButtonsContainer>
    </Container>
);



export default Auth
