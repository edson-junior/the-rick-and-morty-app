import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from '../lib/withApollo'
import Layout from '../components/Layout/Layout'
import List from '../components/List/List'

const Homepage = () => {
  return (
    <Layout>
      <List />
    </Layout>
  )
}

export default withApollo(Homepage, { getDataFromTree })
