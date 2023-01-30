import styled from 'styled-components'

export const Container = styled.div.attrs(
  (props: { checked: boolean }) => props,
)`
  display: flex;
  justify-content: space-between;

  @import '@radix-ui/colors/blackA.css';
  @import '@radix-ui/colors/violet.css';
  display: flex;
  background-color: var(--gray-500);
  border-radius: 8px;
  border: 1px solid var(--gray-400);
  padding: 20px;
  transition: background 0.5s;

  &:hover {
    background-color: var(--gray-400);
  }

  .buttonTrash {
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    &:hover {
      background-color: var(--gray-400);
    }
    &:active {
      background-color: var(--gray-600);
    }
  }

  /* reset */
  button {
    all: unset;
  }

  .CheckboxRoot {
    background-color: transparent;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    overflow: hidden;
    border: ${(props) =>
      props.checked ? '2px solid transparent' : '2px solid var(--blue)'};
    box-sizing: border-box;
  }
  .CheckboxRoot:hover {
    background-color: var(--gray-400);
  }

  .CheckboxIndicator {
    color: var(--gray-100);
    background: var(--purple);
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Label {
    color: white;
    padding-left: 15px;
    font-size: 15px;
    line-height: 1;
  }
`
