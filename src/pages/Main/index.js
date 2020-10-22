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
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      { 
        nativeEvent : {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver : true },
  );

  function onHandlerStateChanged(event){
    if(event.nativeEvent.oldState === State.ACTIVE){
      let opened = false;
      const  {translationY } = event.nativeEvent;
      offset += translationY;

      translateY.setOffset(offset);
      console.log("offset: " , translationY);
      if(translationY >= 100){
        console.log("Passou aqui");
        opened = true;
      } else {
        console.log("Passou aqui então");
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY , {
        toValue: opened? 400 : 0 ,
        duration: 200,
        useNativeDriver: true
    }).start(() =>{
      offset = opened ? 400: 0,
      translateY.setOffset(offset);
      translateY.setValue(0);
    });
    }
  }

  return (   
    <Container>
       <Header />
       <Content>
         <Menu translateY={translateY} />
         <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
         >
          <Card style={{
            transform: [{
              translateY : translateY.interpolate({
                inputRange : [-350, 0 , 400],
                outputRange: [-50 , 0 , 400],
                extrapolate: 'clamp'
              })
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
       <Tabs translateY={translateY}/>
    </Container>
  )
}
