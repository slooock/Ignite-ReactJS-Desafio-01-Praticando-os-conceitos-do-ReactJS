import { Container } from './styles'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi'

function Task() {
  const [checked, setChecked] = useState(false)
  function hadleCheckboxChange() {
    setChecked(!checked)
  }
  return (
    <Container checked={checked}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox.Root
          className="CheckboxRoot"
          defaultChecked
          checked={checked}
          id="c1"
          onCheckedChange={hadleCheckboxChange}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
      <button className="buttonTrash">
        <FiTrash size={17} />
      </button>
    </Container>
  )
}

export default Task
