import Header from "../components/Header";
import ListTasks from "../components/ListTasks";
import Search from "../components/NewTask";
import { Container, Content } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Search />
        <ListTasks />
      </Content>
    </Container>
  );
}

export default Home;
