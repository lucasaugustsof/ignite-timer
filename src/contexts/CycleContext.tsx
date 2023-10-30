import { createContext, useState } from 'react'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle?: Cycle
  activeCycleId: string | null
  amountSecondsPassed: number
  setSecondsPassed(seconds: number): void
  markCurrentCycleAsFinished(): void
  createNewCycle(data: CreateCycleData): void
  interruptCurrentCycle(): void
}

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export const CyclesContextProvider: React.FC<CyclesContextProviderProps> = ({
  children,
}) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((prevCycles) =>
      prevCycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    const startDate = new Date()

    const { task, minutesAmount } = data

    const newCycle: Cycle = {
      id,
      task,
      minutesAmount,
      startDate,
    }

    setCycles((prevCycles) => [...prevCycles, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    setCycles((prevCycles) =>
      prevCycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)

    document.title = 'Ignite Timer'
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
