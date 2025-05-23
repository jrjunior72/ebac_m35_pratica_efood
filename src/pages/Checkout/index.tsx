import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <S.CheckoutContent>
        <S.FormsContainer>
          <S.SectionTitle>Complete seu pedido</S.SectionTitle>
          {/* <DeliveryForm />
          <PaymentForm /> */}
        </S.FormsContainer>
        <div>
          <S.SectionTitle>Carrinho de compras</S.SectionTitle>
        </div>
      </S.CheckoutContent>
    </S.CheckoutContainer>
  )
}
