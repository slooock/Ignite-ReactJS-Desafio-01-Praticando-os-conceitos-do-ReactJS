import { Container } from "./styles";

interface InfoLabelProps {
  text: string;
  quant: string;
}

function InfoLabel({ text, quant }: InfoLabelProps) {
  return (
    <Container>
      <div>{text}</div>
      <div>{quant}</div>
    </Container>
  );
}

export default InfoLabel;
