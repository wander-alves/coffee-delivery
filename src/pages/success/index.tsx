import { useLocation } from 'react-router-dom';

import { CurrencyDollarIcon, MapPinIcon, TimerIcon } from '@phosphor-icons/react';
import {
  OrderInfo,
  OrderInfoBullet,
  OrderInfoBulletContent,
  OrderInfoBulletIcon,
  OrderInfoBulletList,
  OrderSuccessTitle,
  SuccessContainer,
} from './styles';

import successImg from '../../assets/order_success.png';

export function Success() {
  const { state } = useLocation();

  const availablePaymentMethods: Record<string, string> = {
    debit: 'Cartão de Débito',
    credit: 'Cartão de Crédito',
    cash: 'Em dinheiro',
  };
  const selectedPaymentMethod: string = availablePaymentMethods[state.paymentMethod];

  return (
    <SuccessContainer>
      <OrderSuccessTitle>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </OrderSuccessTitle>
      <OrderInfo>
        <OrderInfoBulletList>
          <OrderInfoBullet>
            <OrderInfoBulletIcon data-variant="purple">
              <MapPinIcon size={16} weight="fill" />
            </OrderInfoBulletIcon>
            <OrderInfoBulletContent>
              <p>
                Entrega em <strong>{state.street}</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </OrderInfoBulletContent>
          </OrderInfoBullet>
          <OrderInfoBullet>
            <OrderInfoBulletIcon data-variant="yellow">
              <TimerIcon size={16} weight="fill" />
            </OrderInfoBulletIcon>
            <OrderInfoBulletContent>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min </strong>
              </p>
            </OrderInfoBulletContent>
          </OrderInfoBullet>
          <OrderInfoBullet>
            <OrderInfoBulletIcon data-variant="yellow-dark">
              <CurrencyDollarIcon size={16} />
            </OrderInfoBulletIcon>
            <OrderInfoBulletContent>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{selectedPaymentMethod}</strong>
              </p>
            </OrderInfoBulletContent>
          </OrderInfoBullet>
        </OrderInfoBulletList>
        <img src={successImg} />
      </OrderInfo>
    </SuccessContainer>
  );
}
