import { getDataFromTree } from '@apollo/react-ssr'
import { useRouter } from 'next/router'
import withApollo from '../lib/withApollo'
import Layout from '../components/Layout/Layout'
import List from '../components/List/List'

const Homepage = () => {
  const router = useRouter()
  const { page } = router.query

  return (
    <Layout>
      <List page={parseFloat(page) || 1} />
    </Layout>
  )
}

export default withApollo(Homepage, { getDataFromTree })
