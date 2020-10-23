import PropTypes from 'prop-types'
import { CharItem, CharItemImage, ItemDetails } from '../List.styled'

const ItemsList = ({ item }) => {
  const {
    image,
    name,
    species,
    location,
    type,
    status,
    gender,
    episode,
    origin,
  } = item

  return (
    <CharItem>
      <CharItemImage src={image} alt="" />
      <ItemDetails>
        <li>
          <strong>Name: </strong>
          {name}
        </li>
        <li>
          <strong>Species: </strong>
          {species}
        </li>
        <li>
          <strong>Last known location: </strong>
          {location?.name}
        </li>
        <li>
          <strong>Status: </strong>
          {status}
        </li>
        <li>
          <strong>Type: </strong>
          {type || 'unknown'}
        </li>
        <li>
          <strong>Gender: </strong>
          {gender}
        </li>
        <li>
          <strong>Dimension: </strong>
          {location?.dimension}
        </li>
        <li>
          <strong>Origin: </strong>
          {`${origin?.name} - ${origin?.type}`}
        </li>
        <li>
          <strong>First seen in: </strong>
          {`${episode[0].episode} - ${episode[0].name}`}
        </li>
      </ItemDetails>
    </CharItem>
  )
}

ItemsList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    type: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      dimension: PropTypes.string,
    }),
    image: PropTypes.string,
    location: PropTypes.shape({
      name: PropTypes.string,
      dimension: PropTypes.string,
    }),
    episode: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        episode: PropTypes.string,
      }),
    ),
  }).isRequired,
}
export default ItemsList
