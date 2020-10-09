import { gql } from '@apollo/client'

export const RYCK_AND_MORTY_DATA = gql`
  query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
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
`
