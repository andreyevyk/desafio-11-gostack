import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Container, ConfirmedText } from './styles';

const OrderCreated: React.FC = () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    const redirect = setInterval(() => {
      navigate('Orders');
    }, 2000);

    return () => {
      clearInterval(redirect);
    };
  }, [navigate]);
  return (
    <Container>
      <Icon name="thumbs-up" size={64} color="#39B100" />
      <ConfirmedText>Pedido Confirmado!</ConfirmedText>
    </Container>
  );
};

export default OrderCreated;
