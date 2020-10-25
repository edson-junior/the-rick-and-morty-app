import { waitFor, render, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { mockedCharacters } from '../../../helpers/testUtils'

import List from '../List'

describe('List', () => {
  const mocks = mockedCharacters
  const MockedList = () => (
    <MockedProvider mocks={mocks} addTypename={false}>
      <List page={2} />
    </MockedProvider>
  )

  afterEach(cleanup)

  it('should render with `Loading...` message', () => {
    const { getByText } = render(<MockedList />)

    expect(getByText(/Loading.../g)).toBeInTheDocument()
  })

  it('should render the list without errors', async () => {
    const { getByTestId } = render(<MockedList />)

    await waitFor(() => {
      expect(getByTestId('prev')).toBeInTheDocument()
      expect(getByTestId('next')).toBeInTheDocument()
      expect(getByTestId('item-details')).toBeInTheDocument()
      expect(getByTestId('item-details')).toMatchSnapshot()
    })
  })
})
