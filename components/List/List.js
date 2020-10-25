import { useQuery } from '@apollo/client'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { RYCK_AND_MORTY_DATA } from '../../helpers/api/queries/locations'
import Item from './Item/Item'
import { CharWrapper } from './List.styled'

const Items = ({ page }) => {
  let characters = []
  let info = []

  const { loading, error, data } = useQuery(RYCK_AND_MORTY_DATA, {
    variables: {
      page,
    },
  })

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  if (!loading && data?.characters) {
    characters = data.characters.results
    info = data.characters.info
  }

  return (
    <>
      <Link
        href={{
          pathname: '/',
          query: { page: info.prev },
        }}
        scroll={false}
      >
        <button
          type="button"
          className="prev"
          style={{ display: info.prev === null ? 'none' : 'block' }}
          data-testid="prev"
        >
          Prev
        </button>
      </Link>

      <CharWrapper data-testid="item-details">
        {characters?.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </CharWrapper>

      <Link
        href={{
          pathname: '/',
          query: { page: info.next },
        }}
        scroll={false}
      >
        <button
          type="button"
          className="next"
          style={{ display: info.next === null ? 'none' : 'block' }}
          data-testid="next"
        >
          Next
        </button>
      </Link>
    </>
  )
}

Items.propTypes = {
  page: PropTypes.number.isRequired,
}

export default Items
