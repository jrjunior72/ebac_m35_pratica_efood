import * as S from './styles'

export function DeliveryForm() {
  return (
    <S.FormContainer>
      <S.FormTitle>Entrega</S.FormTitle>
      <S.InputGroup>
        <label htmlFor="name">Quem irá receber</label>
        <input type="text" id="name" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="address">Endereço</label>
        <input type="text" id="address" />
      </S.InputGroup>
      <S.InputGroup>
        <label htmlFor="city">Cidade</label>
        <input type="text" id="city" />
      </S.InputGroup>
      <S.Row>
        <S.InputGroup>
          <label htmlFor="zipcode">CEP</label>
          <input type="text" id="zipcode" />
        </S.InputGroup>
        <S.InputGroup>
          <label htmlFor="number">Número</label>
          <input type="text" id="number" />
        </S.InputGroup>
      </S.Row>
      <S.InputGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <input type="text" id="complement" />
      </S.InputGroup>
    </S.FormContainer>
  )
}
