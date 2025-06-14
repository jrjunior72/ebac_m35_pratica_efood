// src/components/ConfirmationModal/index.tsx
import * as S from './styles'
import { useCart } from '../../hooks/useCart'
import { OrderData } from '../../types'

interface ConfirmationModalProps {
  orderData: OrderData
  onClose: () => void
  onBackToHome: () => void
}

export const ConfirmationModal = ({ orderData, onClose, onBackToHome }: ConfirmationModalProps) => {
  const { clearCart } = useCart()

  const handleBackToHome = () => {
    clearCart()
    onBackToHome()
  }

  return (
    <S.ConfirmationModalOverlay onClick={onClose}>
      <S.ConfirmationModalContent onClick={(e) => e.stopPropagation()}>
        <S.ConfirmationHeader>
          <h2>Pedido realizado - {orderData.orderId}</h2>
        </S.ConfirmationHeader>
        <S.OrderInfo>
          <S.InfoText>
            Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
          </S.InfoText>

          <S.InfoText>
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
          </S.InfoText>

          <S.InfoText>
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
          </S.InfoText>

          <S.InfoText>
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
          </S.InfoText>
        </S.OrderInfo>

        <S.ActionButtons>
          <S.HomeButton onClick={handleBackToHome}>
            Concluir
          </S.HomeButton>
        </S.ActionButtons>
      </S.ConfirmationModalContent>
    </S.ConfirmationModalOverlay>
  )
}
