import React from 'react'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/globalStyles'

import { Router } from './Router'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
