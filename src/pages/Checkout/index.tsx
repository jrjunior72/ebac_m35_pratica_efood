import { DeliveryForm } from '../../components/DeliveryForm'
import { PaymentForm } from '../../components/PaymentForm'
import { Cart } from '../../components/Cart'
import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <S.CheckoutContent>
        <S.FormsContainer>
          <S.SectionTitle>Complete seu pedido</S.SectionTitle>
          <DeliveryForm />
          <PaymentForm />
        </S.FormsContainer>
        <div>
          <S.SectionTitle>Carrinho de compras</S.SectionTitle>
          <Cart />
        </div>
      </S.CheckoutContent>
    </S.CheckoutContainer>
  )
}
