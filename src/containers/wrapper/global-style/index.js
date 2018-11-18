// Dependencies
import React from 'react'
// Components
import MaterialUIGlobalStyle from './material-ui-global-style'
import StyledGlobalStyle from './styled-global-style'

class GlobalStyle extends React.PureComponent {
  render () {
    return (
      <>
        <MaterialUIGlobalStyle/>
        <StyledGlobalStyle/>
      </>
    )
  }
}

export default GlobalStyle
