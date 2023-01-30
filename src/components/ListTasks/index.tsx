import { Container } from "./styles";

import InfoLabel from "../InfoLabel";

function ListTasks() {
  return (
    <Container>
        <InfoLabel text="Tarefas criadas" quant="32"/>
        <InfoLabel text="Concluídas" quant="10"/>
    </Container>
  );
}

export default ListTasks;
