import React from 'react'
import Layout from '../../src/containers/layout'

// eslint-disable-next-line react/prop-types,react/display-name
const WrapPage = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export default WrapPage
