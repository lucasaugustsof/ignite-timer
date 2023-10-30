import React from 'react'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/globalStyles'

import { CyclesContextProvider } from './contexts/CycleContext'

import { Router } from './Router'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
