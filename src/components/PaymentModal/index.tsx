// src/components/PaymentModal/index.tsx
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import * as S from './styles';
import { formatCurrency } from '../../utils/formatCurrency';

interface PaymentData {
  cardName: string;
  cardNumber: string;
  cardCVV: string;
  expiryMonth: string;
  expiryYear: string;
}

interface PaymentModalProps {
  totalAmount: number;
  onClose: () => void;
  onBack: () => void;
  onConfirm: () => void;
}

export const PaymentModal = ({ totalAmount, onBack, onClose, onConfirm }: PaymentModalProps) => {
  const initialValues: PaymentData = {
    cardName: '',
    cardNumber: '',
    cardCVV: '',
    expiryMonth: '',
    expiryYear: ''
  };

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
          onSubmit={(values) => {
            console.log('Dados do cartão:', values);
            onConfirm();
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <S.FormGroup>
                <S.InputLabel>Nome no cartão</S.InputLabel>
                <Field
                  as={S.InputField}
                  name="cardName"
                  placeholder="João Paulo de Souza"
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
                    placeholder="0000 0000 0000 0000"
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
                    placeholder="000"
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
                    placeholder="MM"
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
                    placeholder="AA"
                  />
                  {errors.expiryYear && touched.expiryYear && (
                    <S.ErrorMessage>{errors.expiryYear}</S.ErrorMessage>
                  )}
                </S.FormGroup>

              </div>

              <S.ActionButtonsContainer>
                <S.SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processando...' : 'Finalizar pagamento'}
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
