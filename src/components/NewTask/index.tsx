import { Container } from "./styles";
import logo from "../../assets/logo.svg";
import { FiPlusCircle } from "react-icons/fi";

function NewTask() {
  return (
    <Container>
      <input placeholder="Adicionar nova tarefa" />
      <button>
        Criar
        <FiPlusCircle />
      </button>
    </Container>
  );
}

export default NewTask;
