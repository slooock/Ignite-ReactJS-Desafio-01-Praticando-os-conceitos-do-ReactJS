import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { FiTrash } from 'react-icons/fi'
import { Container } from './styles'

export interface TaskAtributes {
  text: string
  done: boolean
}
interface TaskProps {
  task: TaskAtributes
  checkboxChange: (task: TaskAtributes) => void
  deleteTask: (task: TaskAtributes) => void
}

function Task({ task, checkboxChange, deleteTask }: TaskProps) {
  const check = task.done
  function hadleCheckboxChange() {
    checkboxChange(task)
  }

  function handleDelete() {
    deleteTask(task)
  }

  return (
    <Container checked={check}>
      <div style={{ display: 'flex', alignItems: 'start' }}>
        <Checkbox.Root
          className="CheckboxRoot"
          defaultChecked
          checked={check}
          id="c1"
          onCheckedChange={() => {
            hadleCheckboxChange()
          }}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1">
          {check ? <s>{task.text}</s> : <span>{task.text} </span>}
        </label>
      </div>
      <button className="buttonTrash" onClick={handleDelete}>
        <FiTrash size={17} />
      </button>
    </Container>
  )
}

export default Task
