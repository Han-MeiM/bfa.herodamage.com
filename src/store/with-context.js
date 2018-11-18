// Dependencies
import React from 'react'
import { Context } from './context'

/**
 * Create a reducer.
 * @param properties
 * @returns {function(*, *): *}
 */
function createReducer (properties) {
  return (accumulator, property) => {
    accumulator[property] = properties[property]
    return accumulator
  }
}

/**
 * Higher order of component that does connect a component to the context.
 * Accepts a function to map, an array of state properties/actions name or a boolean.
 * Use the false boolean to avoid passing props, you can use true to pass them all although it's the default behavior when the mapping is undefined.
 *
 * @param {Function|Array|boolean} [mapStateToProps]
 * @param {Function|Array|boolean} [mapActionsToProps]
 */
export function withContext (mapStateToProps, mapActionsToProps) {
  return (Component) => (
    class extends React.PureComponent {
      renderComponent (context) {
        let stateProps
        switch (typeof mapStateToProps) {
          case 'boolean':
            if (mapStateToProps) stateProps = context.state
            break
          case 'function':
            stateProps = mapStateToProps(context.state)
            break
          case 'object':
            if (!Array.isArray(mapStateToProps)) {
              // fallback to default behavior
              stateProps = context.state
            } else {
              stateProps = mapStateToProps.reduce(createReducer(context.state), {})
            }
            break
          default:
            stateProps = context.state
        }

        let actionsProps
        switch (typeof mapActionsToProps) {
          case 'boolean':
            if (mapActionsToProps) actionsProps = context.actions
            break
          case 'function':
            actionsProps = mapActionsToProps(context.actions)
            break
          case 'object':
            if (!Array.isArray(mapActionsToProps)) {
              // fallback to default behavior
              actionsProps = context.actions
            } else {
              actionsProps = mapActionsToProps.reduce(createReducer(context.actions), {})
            }
            break
          default:
            actionsProps = context.actions
        }

        // Use a dummy object to map the props we want to pass to avoid passing empty state/actions props
        const contextProps = {
          state: stateProps || {},
          actions: actionsProps || {}
        }

        return <Component {...this.props} {...contextProps} />
      }

      render () {
        return <Context.Consumer>{(context) => this.renderComponent(context)}</Context.Consumer>
      }
    }
  )
}
