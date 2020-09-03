import PropTypes from 'prop-types'
import Header from '../Header/Header'
import GlobalStyles from '../../styles/globalStyles'

const Layout = ({ children }) => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
