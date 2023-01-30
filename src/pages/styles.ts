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
