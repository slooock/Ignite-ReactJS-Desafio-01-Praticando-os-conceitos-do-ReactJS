import Header from '../components/Header'
import InfoLabel from '../components/InfoLabel'
import ListTasks from '../components/ListTasks'
import Search from '../components/NewTask'
import { Container, Content } from './styles'

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Search />
        <div className="flexDirection">
          <InfoLabel text="Tarefas criadas" quant="32" />
          <InfoLabel text="Concluídas" quant="10" color="var(--purple)" />
        </div>
        <ListTasks />
      </Content>
    </Container>
  )
}

export default Home
