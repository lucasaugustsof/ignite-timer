import styled from 'styled-components'

export const NewCycleFormContainer = styled.div`
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
