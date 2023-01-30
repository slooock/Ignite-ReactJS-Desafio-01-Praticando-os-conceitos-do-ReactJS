import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  input {
    width: 100%;
    margin-right: 8px;
    background-color: var(--gray-500);
    height: 3.35rem;
    border-radius: 8px;
    color: var(--gray-100);
    box-sizing: border-box;
    padding: 10px;
    outline: none;
    border: 1px solid var(--gray-500);
    transition: background 0.5s;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--gray-300);
    }
    :-ms-input-placeholder {
      color: var(--gray-300);
    }

    :focus {
      border-color: var(--purple-dark);
    }
    :hover {
      background: var(--gray-400);
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-dark);
    height: 3.35rem;
    width: 6.62rem;
    outline: none;
    border: none;
    color: white;
    border-radius: 8px;
    transition: background 0.5s;
    :hover {
      background-color: var(--blue);
    }

    svg {
      margin-left: 8px;
    }
  }
`;
