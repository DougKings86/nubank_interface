import React from 'react';

import Header  from '~/components/Header';
import Menu  from '~/components/Menu';
import Tabs  from '~/components/Tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler , State } from 'react-native-gesture-handler';
import { 
  Container ,
  Content ,
  Card ,
  CardHeader ,
  CardContent ,
  CardFooter,
  CardAnotation,
  Title ,
  Description
   } from './styles'



export default function Main(){
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      { 
        nativeEvent : {
          translateY: translateY
        }
      }
    ],
    { useNativeDrive: true },
  );
  function onHandlerStateChanged(event){

  }

  return (   
    <Container>
       <Header />
       <Content>
         <Menu />
         <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
         >
          <Card style={{
            transform: [{
              translateY
            }]
          }}
            
          >
            <CardHeader>
              <Icon name="attach-money" size={28}color="#666" />
              <Icon name="visibility-off" size={28}color="#666" />
            </CardHeader>
            <CardContent>
              <Title>Slado Disponível</Title>
              <Description>R$ 2000,65</Description>
            </CardContent>
            <CardFooter>
              <CardAnotation>
                Transferência de  R$20,00 recebida por Douglas Vinicius
              </CardAnotation>
            </CardFooter>
          </Card>
         </PanGestureHandler>
       </Content>
       <Tabs/>
    </Container>
  )
}
