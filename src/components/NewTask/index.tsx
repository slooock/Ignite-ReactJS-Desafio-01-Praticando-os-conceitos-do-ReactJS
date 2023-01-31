import { Container } from './styles'
import { FiPlusCircle } from 'react-icons/fi'
import { useState } from 'react'

interface NewTaskProps {
  createTask: (text: string) => void
}

function NewTask({ createTask }: NewTaskProps) {
  const [text, setText] = useState('')
  function handleClickNewtTask() {
    createTask(text)
    setText('')
  }
  return (
    <Container>
      <input
        placeholder="Adicionar nova tarefa"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={handleClickNewtTask}>
        Criar
        <FiPlusCircle />
      </button>
    </Container>
  )
}

export default NewTask
