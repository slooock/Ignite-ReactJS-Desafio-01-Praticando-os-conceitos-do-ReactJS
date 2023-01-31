import { useRef, useState } from 'react'
import Header from '../components/Header'
import InfoLabel from '../components/InfoLabel'
import ListTasks, { ListTaskPropsFowardProps } from '../components/ListTasks'
import NewTask from '../components/NewTask'
import { TaskAtributes } from '../components/Task'
import { Container, Content } from './styles'

interface ResumeQuants {
  quantTotal: string
  quantTrue: string
}

function Home() {
  const [resume, setResume] = useState<ResumeQuants>({
    quantTotal: '0',
    quantTrue: '0',
  })
  const ref = useRef<ListTaskPropsFowardProps>(null)
  function onCreateTask(textTask: string) {
    ref.current?.createTask(textTask)
    return textTask
  }
  function onChangeTasks(tasks: TaskAtributes[]) {}

  function calcReduce(info: ResumeQuants) {
    setResume(info)
  }
  return (
    <Container>
      <Header />
      <Content>
        <NewTask createTask={onCreateTask} />
        <div className="flexDirection">
          <InfoLabel text="Tarefas criadas" quant={resume.quantTotal} />
          <InfoLabel
            text="Concluídas"
            quant={`${resume.quantTrue} de ${resume.quantTotal}`}
            color="var(--purple)"
          />
        </div>
        <ListTasks
          changeTasks={onChangeTasks}
          ref={ref}
          calcReduce={calcReduce}
        />
      </Content>
    </Container>
  )
}

export default Home
