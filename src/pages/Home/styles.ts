import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }
`

const BaseCountdownButton = styled.button`
  width: 100%;

  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  border: 0;
  border-radius: 8px;

  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;
  transition: background-color 0.1s ease-out;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
