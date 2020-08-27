import PropTypes from 'prop-types'
import * as S from './styled'

const ItemsList = ({ residents }) => {
  return (
    <S.CharWrapper>
      {residents
        // I use filter here due to depth restrictions from graphql
        // and I filter based on episode 32 because it's the one that
        // returns the most results ;)
        .filter(({ episode }) => episode[0].id === '32')
        .map(
          ({
            id,
            name,
            status,
            species,
            type,
            gender,
            origin,
            location,
            image,
            episode,
          }) => (
            <S.CharItem key={id}>
              <S.CharItemImage src={image} alt="" />
              <S.ItemDetails>
                <li />
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
                  {location.name}
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
                  {location.dimension}
                </li>
                <li>
                  <strong>Origin: </strong>
                  {`${origin.name} - ${origin.type}`}
                </li>
                <li>
                  <strong>First seen in: </strong>
                  {`${episode[0].episode} - ${episode[0].name}`}
                </li>
              </S.ItemDetails>
            </S.CharItem>
          ),
        )}
    </S.CharWrapper>
  )
}

ItemsList.propTypes = {
  residents: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
}
export default ItemsList
