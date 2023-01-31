import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Content = styled.section`
  display: flex;
  justify-content: start;
  width: 46rem;
  flex-direction: column;
  height: calc(100vh - 12.5rem);

  .flexDirection {
    display: flex;
    justify-content: space-between;
  }
`
export const WidhoutTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 3rem;
    width: 3rem;
  }
  p {
    font-size: 1rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
`
