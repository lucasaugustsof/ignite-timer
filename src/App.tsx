import React from 'react'

import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/globalStyles'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
