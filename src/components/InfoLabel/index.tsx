import { Container, PrincipalText, SecondaryText } from './styles'

interface InfoLabelProps {
  text: string
  quant: string
  color?: string
}

function InfoLabel({ text, quant, color }: InfoLabelProps) {
  return (
    <Container>
      <PrincipalText color={color}>{text}</PrincipalText>
      <SecondaryText>{quant}</SecondaryText>
    </Container>
  )
}

export default InfoLabel
