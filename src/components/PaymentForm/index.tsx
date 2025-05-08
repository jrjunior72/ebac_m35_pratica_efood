import * as S from './styles'

export function PaymentForm() {
  return (
    <S.FormContainer>
      <S.FormTitle>Pagamento</S.FormTitle>
      <S.PaymentOptions>
        <S.PaymentOption>
          <input type="radio" id="credit" name="payment" defaultChecked />
          <label htmlFor="credit">Cartão de crédito</label>
        </S.PaymentOption>
        <S.PaymentOption>
          <input type="radio" id="debit" name="payment" />
          <label htmlFor="debit">Cartão de débito</label>
        </S.PaymentOption>
        <S.PaymentOption>
          <input type="radio" id="money" name="payment" />
          <label htmlFor="money">Dinheiro</label>
        </S.PaymentOption>
      </S.PaymentOptions>
      <S.InputGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <input type="text" id="cardName" />
      </S.InputGroup>
      <S.Row>
        <S.InputGroup>
          <label htmlFor="cardNumber">Número do cartão</label>
          <input type="text" id="cardNumber" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="cardCode">CVV</label>
          <input type="text" id="cardCode" />
        </S.InputGroup>
      </S.Row>
      <S.Row>
        <S.InputGroup>
          <label htmlFor="cardMonth">Mês de vencimento</label>
          <input type="text" id="cardMonth" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="cardYear">Ano de vencimento</label>
          <input type="text" id="cardYear" />
        </S.InputGroup>
      </S.Row>
    </S.FormContainer>
  )
}
