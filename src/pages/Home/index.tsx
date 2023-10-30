import React, { useContext } from 'react'

import { useForm, FormProvider } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Play, HandPalm } from 'phosphor-react'

import { CyclesContext } from '../../contexts/CycleContext'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

const createNewCycleSchema = z.object({
  task: z.string(),
  minutesAmount: z.number().min(5).max(60),
})

type CreateNewCycleFormData = z.infer<typeof createNewCycleSchema>

export const Home: React.FC = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<CreateNewCycleFormData>({
    resolver: zodResolver(createNewCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { reset, watch, handleSubmit } = newCycleForm

  function handleCreateNewCycle(data: CreateNewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  function handleInterruptCycle() {
    interruptCurrentCycle()
  }

  const taskField = watch('task')
  const isSubmitDisabled = !taskField

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
