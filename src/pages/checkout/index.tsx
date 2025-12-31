import { useForm } from 'react-hook-form';
import {
  BankIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  MoneyIcon,
} from '@phosphor-icons/react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutFormFieldContainer,
  CheckoutInputAddressContainer,
  CheckoutInputAddressFields,
  CheckoutInputAddressWrapper,
  CheckoutInputPaymentContainer,
  CheckoutInputPaymentMethod,
  CheckoutInputPaymentMethodsContainer,
  CheckoutInputsContainer,
  CheckoutInputTitle,
  CheckoutOrderPriceContainer,
  CheckoutOrdersContainer,
  EmptyCheckoutCart,
} from './styles';
import { Button } from '../../components/button';

import { useContext } from 'react';
import { CartContext } from '../../context/cart-context';
import { CheckoutOrder } from '../../components/checkout-order';
import { priceFormatter } from '../../utils/price-formatter';
import { useNavigate } from 'react-router-dom';

const checkoutFormSchema = z.object({
  zipcode: z.string().min(8).max(9).regex(/\d{5}-?\d{3}/),
  address: z.string().min(3),
  addressNumber: z.number().min(1),
  addressInfo: z.string().min(3),
  neighborhood: z.string().min(3),
  city: z.string().min(3),
  state: z.string().min(2).max(2),
  paymentMethod: z.enum(['credit', 'debit', 'cash']),
});

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      zipcode: '',
      address: '',
      addressNumber: undefined,
      addressInfo: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
  });

  const { handleSubmit, register, watch } = checkoutForm;
  const navigate = useNavigate();

  const { items, deliveryTax } = useContext(CartContext);
  const formattedDeliveryTax = priceFormatter(deliveryTax);
  const totalItemsPrice = items.reduce((prev, curr)=> prev + curr.price, 0.0);
  const formattedTotalItemsPrice = priceFormatter(totalItemsPrice);
  const totalPrice = totalItemsPrice + deliveryTax;
  const formattedTotalPrice = priceFormatter(totalPrice);

  function handleAddItemToCart(data: CheckoutFormData) {
    console.log(data)
    navigate('/success')
  }
  const isButtonDisabled = items.length === 0;

  const selectedPaymentMethod = watch('paymentMethod');
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleAddItemToCart)}>
      <CheckoutFormContainer>
        <CheckoutFormFieldContainer>
          <h2>Complete seu pedido</h2>
          <CheckoutInputsContainer>
            <CheckoutInputAddressContainer>
              <CheckoutInputTitle>
                <MapPinIcon size={22} />
                <div>
                  <legend>Endereço de entrega</legend>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </CheckoutInputTitle>
              <CheckoutInputAddressFields>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="text"
                    id="zipcode"
                    placeholder="CEP"
                    {...register('zipcode')}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="text"
                    id="address"
                    placeholder="Rua"
                    {...register('address')}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="number"
                    id="address-number"
                    placeholder="Número"
                    min={0}
                    {...register('addressNumber', { valueAsNumber: true })}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="text"
                    id="address-info"
                    placeholder="Complemento"
                    {...register('addressInfo')}
                  />
                  <em>Opcional</em>
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="text"
                    id="neighborhood"
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    required
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input required type="text" id="state" placeholder="UF" {...register('state')} />
                </CheckoutInputAddressWrapper>
              </CheckoutInputAddressFields>
            </CheckoutInputAddressContainer>

            <CheckoutInputPaymentContainer>
              <CheckoutInputTitle>
                <CurrencyDollarIcon size={22} />
                <div>
                  <legend>Endereço de entrega</legend>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </CheckoutInputTitle>
              <CheckoutInputPaymentMethodsContainer>
                <CheckoutInputPaymentMethod
                  htmlFor="credit"
                  data-selected={selectedPaymentMethod === 'credit'}
                >
                  <CreditCardIcon size={16} />
                  cartão de crédito
                  <input
                    required
                    type="radio"
                    id="credit"
                    value="credit"
                    {...register('paymentMethod')}
                  />
                </CheckoutInputPaymentMethod>
                <CheckoutInputPaymentMethod
                  htmlFor="debit"
                  data-selected={selectedPaymentMethod === 'debit'}
                >
                  <BankIcon size={16} />
                  cartão de débito
                  <input
                    required
                    type="radio"
                    id="debit"
                    value="debit"
                    {...register('paymentMethod')}
                  />
                </CheckoutInputPaymentMethod>
                <CheckoutInputPaymentMethod
                  htmlFor="cash"
                  data-selected={selectedPaymentMethod === 'cash'}
                >
                  <MoneyIcon size={16} />
                  cartão de crédito
                  <input
                    required
                    type="radio"
                    id="cash"
                    value="cash"
                    {...register('paymentMethod')}
                  />
                </CheckoutInputPaymentMethod>
              </CheckoutInputPaymentMethodsContainer>
            </CheckoutInputPaymentContainer>
          </CheckoutInputsContainer>
        </CheckoutFormFieldContainer>

        <CheckoutFormFieldContainer>
          <h2>Cafés selecionados</h2>
          <CheckoutOrdersContainer>
            {items.length > 0 ? 
            items.map((item)=> (
              <CheckoutOrder 
                key={item.id} id={item.id} title={item.title} price={item.price} imgUrl={item.imgUrl} quantity={item.quantity} />
            )) :
            (<EmptyCheckoutCart><h4>O carrinho está vazio</h4></EmptyCheckoutCart>)
            }
            
            <CheckoutOrderPriceContainer>
              <div>
                Total de itens
                <span>R$ {formattedTotalItemsPrice}</span>
              </div>
              <div>
                Entrega
                <span>R$ {formattedDeliveryTax}</span>
              </div>
              <h3>
                Total <span>R$ {formattedTotalPrice}</span>
              </h3>
            </CheckoutOrderPriceContainer>
            <Button variant="primary" disabled={isButtonDisabled}>enviar</Button>
          </CheckoutOrdersContainer>
        </CheckoutFormFieldContainer>
      </CheckoutFormContainer>
    </CheckoutContainer>
  );
}
