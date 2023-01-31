import { Container, MarginTop } from './styles'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import Task, { TaskAtributes } from '../Task'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { ResumeQuants } from '../../pages'

interface ListTaskProps {
  changeTasks: (task: TaskAtributes[]) => void
  calcReduce: (info: ResumeQuants) => void
}

export interface ListTaskPropsFowardProps {
  createTask: (text: string) => void
}

const ListTask = forwardRef<ListTaskPropsFowardProps, ListTaskProps>(
  function ListTask({ calcReduce }, ref) {
    const [tasks, setTasks] = useState<TaskAtributes[]>([])

    const reduceInfos = (tasksList: TaskAtributes[]) => {
      const valorInicial = { quantTotal: 0, quantTrue: 0 }
      const infosReduce = tasksList.reduce(function (acumulador, valorAtual) {
        if (valorAtual.done) {
          acumulador.quantTrue = acumulador.quantTrue + 1
        }
        return {
          quantTotal: acumulador.quantTotal + 1,
          quantTrue: acumulador.quantTrue,
        }
      }, valorInicial)

      return {
        quantTotal: infosReduce.quantTotal.toString(),
        quantTrue: infosReduce.quantTrue.toString(),
      }
    }

    const createTask = (text: string) => {
      const task: TaskAtributes = { text, done: false }
      setTasks([...tasks, task])
      calcReduce(reduceInfos([...tasks, task]))
    }

    function onCheckboxChange(task: TaskAtributes) {
      const updated = tasks.map((t) => {
        if (t.text === task.text) {
          const newTask: TaskAtributes = {
            text: task.text,
            done: !task.done,
          }
          return newTask
        }
        return t
      })
      setTasks(updated)
      calcReduce(reduceInfos(updated))
    }

    function onDeleteTask(task: TaskAtributes) {
      const updated = tasks.filter((item) => item.text !== task.text)
      setTasks(updated)
      calcReduce(reduceInfos(updated))
    }

    useImperativeHandle(ref, () => {
      return {
        createTask,
      }
    })

    return (
      <Container className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <div style={{ padding: '15px 20px' }}>
            {tasks.map((task, index) => (
              <div key={index}>
                <MarginTop />
                <Task
                  task={task}
                  checkboxChange={onCheckboxChange}
                  deleteTask={onDeleteTask}
                />
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar
          className="ScrollAreaScrollbar"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </Container>
    )
  },
)

export default ListTask
