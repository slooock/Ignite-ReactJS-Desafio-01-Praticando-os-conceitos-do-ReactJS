import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  font-size: 0.875rem;
  align-items: center;
  color: var(--gray-200);
`
export const PrincipalText = styled.div.attrs(
  (props: { color: string }) => props,
)`
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : 'var(--blue)')};
`

export const SecondaryText = styled.div`
  font-weight: 600;
  margin-left: 8px;
  background-color: var(--gray-400);
  padding: 6px;
  border-radius: 999999px;
`
