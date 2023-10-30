import React, { useContext } from 'react'

import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CycleContext'

import { NewCycleFormContainer, TaskInput, MinutesAmountInput } from './styles'

export const NewCycleForm: React.FC = () => {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <NewCycleFormContainer>
      <label htmlFor="task">Vou trabalhar em</label>

      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>

      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />

      <span>minutos.</span>
    </NewCycleFormContainer>
  )
}
