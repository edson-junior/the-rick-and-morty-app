import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { getDataFromTree } from '@apollo/react-ssr'
import styled from 'styled-components'
import withApollo from '../lib/withApollo'
import Header from '../components/Header/Header'

const CharWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #24292e;
  word-wrap: break-word;
  width: 100%;
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`

const CharItem = styled.div`
  display: flex;
  min-width: 275px;
  flex: 1 0 0;
`

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
          created
        }
      }
    }
  }
`

const Homepage = () => {
  const { loading, error, data } = useQuery(RYCK_AND_MORTY_DATA, {
    variables: {
      name: 'Earth',
      dimension: 'Replacement Dimension',
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <Header />
      <CharWrapper>
        {data.locations.results[0].residents
          // I use filter here due to depth restrictions from graphql
          // and I filter based on episode 32 because it's the one that
          // returns the most results ;)
          .filter(({ episode }) => episode[0].id === '32')
          .map(({ id, name, species, image, location }) => (
            <CharItem key={id}>
              <ul>
                <li>
                  <img src={image} alt="" />
                </li>
                <li>
                  <span>Name:</span> {name}
                </li>
                <li>
                  <span>Species:</span> {species}
                </li>
                <li>
                  <span>Location:</span> {location.name}
                </li>
                <li>
                  <span>Dimension:</span> {location.dimension}
                </li>
              </ul>
            </CharItem>
          ))}
      </CharWrapper>
    </div>
  )
}

// export default Homepage
export default withApollo(Homepage, { getDataFromTree })
