// src/components/PaymentModal/index.tsx
import { useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import * as S from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { useCheckoutMutation } from '../../services/checkoutApi' // Adicionado
import { useCart } from '../../hooks/useCart' // Import para acessar items
import { PaymentMethodType } from '../../types';
import { RootState } from '../../store';

interface PaymentModalProps {
  totalAmount: number;
  onClose: () => void;
  onBack: () => void;
  onConfirm: (paymentData: PaymentMethodType) => void; // Atualizado para receber dados
}

export const PaymentModal = ({ totalAmount, onBack, onClose, onConfirm }: PaymentModalProps) => {
  const { items } = useCart() // Obtenha os items do carrinho
  const deliveryData = useSelector((state: RootState) => state.checkout.delivery)
  const [submitOrder, { isLoading }] = useCheckoutMutation()

  const initialValues: PaymentMethodType = {
    cardName: '',
    cardNumber: '',
    cardCVV: '',
    expiryMonth: '',
    expiryYear: ''
  };

  const onSubmit = async (values: PaymentMethodType) => {
    if (!deliveryData) return

    try {
      // Transformar os dados para o formato da API
      const orderData = {
        products: items.map(item => ({
          id: item.id,
          price: item.price
        })),
        delivery: {
          receiver: deliveryData.name,
          address: {
            description: deliveryData.address,
            city: deliveryData.city,
            zipCode: deliveryData.zipCode,
            number: Number(deliveryData.number),
            complement: deliveryData.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCVV),
            expires: {
              month: Number(values.expiryMonth),
              year: Number(values.expiryYear)
            }
          }
        }
      }

      await submitOrder(orderData).unwrap()
      onConfirm(values)
    } catch (error) {
      console.error('Erro no checkout:', error)
    }
  }

  const validationSchema = Yup.object().shape({
    cardName: Yup.string().required('Nome é obrigatório'),
    cardNumber: Yup.string()
      .length(16, 'Número deve ter 16 dígitos')
      .required('Número do cartão é obrigatório'),
    cardCVV: Yup.string()
      .length(3, 'CVV deve ter 3 dígitos')
      .required('CVV é obrigatório'),
    expiryMonth: Yup.string()
      .length(2, 'MM')
      .required('Mês é obrigatório'),
    expiryYear: Yup.string()
      .length(2, 'AA')
      .required('Ano é obrigatório')
  });

  return (
    <S.PaymentModalOverlay onClick={onClose}>
      <S.PaymentModalContent onClick={(e) => e.stopPropagation()}>
        {/* <S.CloseButton onClick={onClose}>&times;</S.CloseButton> */}

        <S.PaymentModalHeader>
          <span>Pagamento - Valor a pagar {formatCurrency(totalAmount)}</span>
        </S.PaymentModalHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <S.FormGroup>
                <S.InputLabel>Nome no cartão</S.InputLabel>
                <Field
                  as={S.InputField}
                  name="cardName"
                  // placeholder="João Paulo de Souza"
                />
                {errors.cardName && touched.cardName && (
                  <S.ErrorMessage>{errors.cardName}</S.ErrorMessage>
                )}
              </S.FormGroup>

              <div style={{ display: 'flex', justifyContent:'space-between' }}>
                <S.FormGroup style={{width: '228px'}}>
                  <S.InputLabel>Número do cartão</S.InputLabel>
                  <Field
                    as={S.InputField}
                    name="cardNumber"
                    // placeholder="0000 0000 0000 0000"
                    mask="9999 9999 9999 9999"
                  />
                  {errors.cardNumber && touched.cardNumber && (
                    <S.ErrorMessage>{errors.cardNumber}</S.ErrorMessage>
                  )}
                </S.FormGroup>
                <S.FormGroup style={{ width: '87px' }}>
                  <S.InputLabel>CVV</S.InputLabel>
                  <Field
                    as={S.InputField}
                    name="cardCVV"
                    // placeholder="000"
                  />
                  {errors.cardCVV && touched.cardCVV && (
                    <S.ErrorMessage>{errors.cardCVV}</S.ErrorMessage>
                  )}
                </S.FormGroup>
              </div>

              <div style={{ display: 'flex', gap: '34px' }}>
                <S.FormGroup style={{ flex: 1 }}>
                  <S.InputLabel>Mês de vencimento</S.InputLabel>
                  <Field
                    as={S.InputField}
                    name="expiryMonth"
                    // placeholder="MM"
                  />
                  {errors.expiryMonth && touched.expiryMonth && (
                    <S.ErrorMessage>{errors.expiryMonth}</S.ErrorMessage>
                  )}
                </S.FormGroup>

                <S.FormGroup style={{ flex: 1 }}>
                  <S.InputLabel>Ano de vencimento</S.InputLabel>
                  <Field
                    as={S.InputField}
                    name="expiryYear"
                    // placeholder="AA"
                  />
                  {errors.expiryYear && touched.expiryYear && (
                    <S.ErrorMessage>{errors.expiryYear}</S.ErrorMessage>
                  )}
                </S.FormGroup>

              </div>

              <S.ActionButtonsContainer>
                <S.SubmitButton type="submit" disabled={isLoading}>
                  {isLoading ? 'Processando...' : 'Finalizar pagamento'}
                </S.SubmitButton>

                <S.BackButton type="button" onClick={onBack}>
                  Voltar para a edição de endereço
                </S.BackButton>
              </S.ActionButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.PaymentModalContent>
    </S.PaymentModalOverlay>
  );
};
