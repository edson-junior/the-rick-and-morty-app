import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ItemsList from '../components/Items/ItemsList'

const RYCK_AND_MORTY_DATA = gql`
  # Write your query or mutation here
  query getRickAndMortyData($name: String!, $dimension: String!) {
    locations(filter: { name: $name, dimension: $dimension }) {
      results {
        residents {
          id
          name
          status
          species
          type
          gender
          origin {
            id
            name
            type
            dimension
          }
          location {
            name
            dimension
          }
          image
          episode {
            id
            name
            episode
          }
        }
      }
    }
  }
`

const Items = () => {
  const { loading, error, data } = useQuery(RYCK_AND_MORTY_DATA, {
    variables: {
      name: 'Earth',
      dimension: 'Replacement Dimension',
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <ItemsList residents={data.locations.results[0].residents} />
}

export { RYCK_AND_MORTY_DATA }
export default Items
