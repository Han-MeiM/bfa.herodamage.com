// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { GraphQLClient } from '../graphql/graphql-client'
import { gqlWrapper } from '../utils/gql-wrapper'
import { ALL_COURSE_PARTS } from '../graphql/queries/course.graphql'
import { ALL_ISLAND } from '../graphql/queries/island.graphql'
import { GET_USER } from '../graphql/queries/user.graphql'
import {
  MAKE_USER_MESSAGE_SEEN,
  MAKE_USER_NEWS_SEEN,
  MAKE_USER_NOTIFICATIONS_SEEN
} from '../graphql/mutations/user.graphql'
// Components
import { Context } from './context'

export class ContextProvider extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {}

    this.actions = {
      dispatch: (newState) => {
        if (process.env.NODE_ENV !== 'production') console.log(`[Store] ${Object.keys(newState)} updated.`)
        this.setState({ ...newState })
      }
    }
  }

  render () {
    return (
      <Context.Provider value={{ state: this.state, actions: this.actions }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
