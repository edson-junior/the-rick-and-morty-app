import React from 'react'
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import Layout from '../components/Layout'
import Items from '../containers/Items'

const Homepage = () => {
  return (
    <Layout>
      <Items />
    </Layout>
  )
}

export default withApollo(Homepage, { getDataFromTree })
