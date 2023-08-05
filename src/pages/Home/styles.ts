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

export const FormContainer = styled.div`
  width: 100%;

  flex-wrap: wrap;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};
`

const BaseInput = styled.input`
  height: 2.5rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.125rem;
  font-weight: bold;
  color: ${(props) => props.theme['gray-100']};

  padding: 0 0.5rem;

  background: transparent;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput).attrs({
  step: 5,
  min: 5,
  max: 60,
})`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
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

  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
