// src/components/DeliveryModal/index.tsx
import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';
import * as S from './styles';
import { InputField } from './styles';
import { DeliveryData } from '../../types'

interface DeliveryModalProps {
  onClose: () => void;
  onBackToCart: () => void; // Nova prop para voltar ao carrinho
  onSubmit: (data: DeliveryData) => void; // Renomeado para onSubmit
}

export const DeliveryModal = ({ onClose, onBackToCart, onSubmit }: DeliveryModalProps) => {
  const initialValues: DeliveryData = {
    name: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    address: Yup.string().required('Endereço é obrigatório'),
    city: Yup.string().required('Cidade é obrigatória'),
    zipCode: Yup.string()
      .length(8, 'CEP deve ter 8 dígitos')
      .required('CEP é obrigatório'),
    number: Yup.string().required('Número é obrigatório')
  });

  return (
    <S.DeliveryModalOverlay onClick={onClose}>
      <S.DeliveryModalContent onClick={(e) => e.stopPropagation()}>
        {/* <S.CloseButton onClick={onClose}>&times;</S.CloseButton> */}

        <S.DeliveryModalHeader>
          <h2>Entrega</h2>
        </S.DeliveryModalHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values); // Agora chama a função para abrir o modal de pagamento
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <S.FormGroup>
                <S.InputLabel htmlFor="name">Quem irá receber</S.InputLabel>
                <Field
                  as={InputField}
                  id="name"
                  name="name"
                  // placeholder="Seu nome completo"
                />
                {errors.name && touched.name && (
                  <S.ErrorMessage>{errors.name}</S.ErrorMessage>
                )}
              </S.FormGroup>

              <S.FormGroup>
                <S.InputLabel htmlFor="address">Endereço</S.InputLabel>
                <Field
                  as={InputField}
                  id="address"
                  name="address"
                  // placeholder="Rua, avenida, etc."
                />
                {errors.address && touched.address && (
                  <S.ErrorMessage>{errors.address}</S.ErrorMessage>
                )}
              </S.FormGroup>

              <S.FormGroup>
                <S.InputLabel htmlFor="city">Cidade</S.InputLabel>
                <Field
                  as={InputField}
                  id="city"
                  name="city"
                  // placeholder="Sua cidade"
                />
                {errors.city && touched.city && (
                  <S.ErrorMessage>{errors.city}</S.ErrorMessage>
                )}
              </S.FormGroup>

              <div style={{ display: 'flex', gap: '16px' }}>
                <S.FormGroup style={{ flex: 1 }}>
                  <S.InputLabel htmlFor="zipCode">CEP</S.InputLabel>
                  <Field
                    as={InputField}
                    id="zipCode"
                    name="zipCode"
                    // placeholder="00000-000"
                    mask="99999-999"
                  />
                  {errors.zipCode && touched.zipCode && (
                    <S.ErrorMessage>{errors.zipCode}</S.ErrorMessage>
                  )}
                </S.FormGroup>

                <S.FormGroup style={{ flex: 1 }}>
                  <S.InputLabel htmlFor="number">Número</S.InputLabel>
                  <Field
                    as={InputField}
                    id="number"
                    name="number"
                    // placeholder="Nº"
                  />
                  {errors.number && touched.number && (
                    <S.ErrorMessage>{errors.number}</S.ErrorMessage>
                  )}
                </S.FormGroup>
              </div>

              <S.FormGroup>
                <S.InputLabel htmlFor="complement">Complemento (opcional)</S.InputLabel>
                <Field
                  as={InputField}
                  id="complement"
                  name="complement"
                  // placeholder="Apto, bloco, etc."
                />
              </S.FormGroup>

              <S.ActionButtonsContainer>

                <S.SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Carregando...' : 'Continuar com o pagamento'}
                </S.SubmitButton>
                <S.BackButton
                  type="button"
                  onClick={onBackToCart} // Fecha DeliveryModal e abre CartModal
                >
                  Voltar para o carrinho
                </S.BackButton>
              </S.ActionButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.DeliveryModalContent>
    </S.DeliveryModalOverlay>
  );
};
