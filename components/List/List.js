import { useQuery } from '@apollo/client'
import { RYCK_AND_MORTY_DATA } from '../../helpers/api/queries/locations'
import Item from './Item/Item'
import { CharWrapper } from './List.styled'

const Items = () => {
  let characters = []
  const { loading, error, data } = useQuery(RYCK_AND_MORTY_DATA)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  if (!loading && data?.characters) {
    characters = data.characters.results
  }

  return (
    <CharWrapper>
      {characters?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </CharWrapper>
  )
}

export default Items
