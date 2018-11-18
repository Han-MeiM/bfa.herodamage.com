// Dependencies
import React from 'react'
// Components
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from '../../store'
import GlobalStyle from './global-style'

class App extends React.PureComponent {
  render () {
    const { children } = this.props
    return (
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          {children}
        </ThemeProvider>
      </ContextProvider>
    )
  }
}

export default App
