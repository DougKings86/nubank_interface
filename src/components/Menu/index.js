import React from 'react';

import QRCode from 'react-native-qrcode';
import { Container, Code , Nav , NavItem, NavText , SignOutButton , SigOutBUttonText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu(){
    return  (
        <Container>
            <Code>
                <QRCode
                    value="https://rocketseat.com.br"
                    size={100}
                    bgColor="#FFF"
                    fgColor="#8810AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF" />
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=>{}}>
                <SigOutBUttonText>Sair do APP</SigOutBUttonText>
            </SignOutButton>
         </Container> 
    );
}