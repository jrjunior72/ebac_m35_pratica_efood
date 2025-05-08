import * as S from './styles'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  fullWidth?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  onClick,
  fullWidth = false,
  type = 'button'
}: ButtonProps) {
  return (
    <S.ButtonContainer onClick={onClick} fullWidth={fullWidth} type={type}>
      {children}
    </S.ButtonContainer>
  )
}
