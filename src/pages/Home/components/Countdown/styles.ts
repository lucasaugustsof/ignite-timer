import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-size: 10rem;
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme['gray-100']};

  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    padding: 2rem 1rem;

    background-color: ${(props) => props.theme['gray-700']};
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  display: flex;
  justify-content: center;

  color: ${(props) => props.theme['green-500']};

  overflow: hidden;
`
