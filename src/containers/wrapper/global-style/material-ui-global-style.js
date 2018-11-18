// Dependencies
import React from 'react'
// Components
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  '@global': {
    h1: theme.typography.h5,
    h2: theme.typography.h6,
    h3: theme.typography.subtitle1,
    h4: theme.typography.body1,
    figcaption: theme.typography.caption,
    a: {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.light
      }
    }
  }
})

class MaterialUIGlobalStyle extends React.PureComponent {
  render () {
    return null
  }
}

export default withStyles(styles)(MaterialUIGlobalStyle)
