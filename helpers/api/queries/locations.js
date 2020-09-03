import { gql } from '@apollo/client'

export const RYCK_AND_MORTY_DATA = gql`
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
