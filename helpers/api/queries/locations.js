import { gql } from '@apollo/client'

export const RYCK_AND_MORTY_DATA = gql`
  query getCharacters {
    characters {
      info {
        count
        pages
        next
        prev
      }
      results {
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
`
