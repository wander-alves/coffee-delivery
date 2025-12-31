import { useForm } from 'react-hook-form';
import { MapPinIcon } from '@phosphor-icons/react';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  CheckoutContainer,
  CheckoutFormContainer,
  CheckoutFormFieldContainer,
  CheckoutInputAddressContainer,
  CheckoutInputAddressFields,
  CheckoutInputAddressWrapper,
  CheckoutInputsContainer,
  CheckoutInputTitle,
} from './styles';

const checkoutFormSchema = z.object({
  zipcode: z.string().min(3),
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
  const { handleSubmit, register } = useForm<CheckoutFormData>({
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

  function handleAddItemToCart(data: CheckoutFormData) {
    console.log(data);
  }
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
                  <input type="text" id="zipcode" placeholder="CEP" {...register('zipcode')} />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input type="text" id="address" placeholder="Rua" {...register('address')} />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    type="number"
                    id="address-number"
                    placeholder="Número"
                    min={0}
                    {...register('addressNumber', { valueAsNumber: true })}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    type="text"
                    id="address-info"
                    placeholder="Complemento"
                    {...register('addressInfo')}
                  />
                  <em>Opcional</em>
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input
                    type="text"
                    id="neighborhood"
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input type="text" id="city" placeholder="Cidade" {...register('city')} />
                </CheckoutInputAddressWrapper>
                <CheckoutInputAddressWrapper>
                  <input type="text" id="state" placeholder="UF" {...register('state')} />
                </CheckoutInputAddressWrapper>
              </CheckoutInputAddressFields>
            </CheckoutInputAddressContainer>
          </CheckoutInputsContainer>
        </CheckoutFormFieldContainer>
      </CheckoutFormContainer>
    </CheckoutContainer>
  );
}
