import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import wait from 'waait'
import { MockedProvider } from '@apollo/client/testing'
import { act } from 'react-dom/test-utils'

import Items, { RYCK_AND_MORTY_DATA } from './Items'

// I'm gonna need some tips regarding writing tests for an Next.js App
// I've tried many times to properly write this test, but I keep getting
// an empty div instead of the complete rendered component.
//
// This is the kind of stuff I would have asked help for if we were
// working together! :) Please don't see this as a lack of effort because it
// really is not. I would've continued trying to figure out how to do it, but the
// deadline is today (28/08/20 as of writting this comment).
//
// Thank you for your understanding :)

describe('Items', () => {
  it('renders without error', async () => {
    const mocks = [
      {
        request: {
          query: RYCK_AND_MORTY_DATA,
          variables: {
            name: 'Earth',
            dimension: 'Replacement Dimension',
          },
        },
        result: {
          data: {
            locations: {
              results: [
                {
                  residents: [
                    {
                      id: '1',
                      name: 'Rick Sanchez',
                      status: 'Alive',
                      species: 'Human',
                      type: '',
                      gender: 'Male',
                      origin: {
                        id: '1',
                        name: 'Earth (C-137)',
                        type: 'Planet',
                        dimension: 'Dimension C-137',
                        __typename: 'Location',
                      },
                      location: {
                        name: 'Earth (Replacement Dimension)',
                        dimension: 'Replacement Dimension',
                        __typename: 'Location',
                      },
                      image:
                        'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                      episode: [
                        {
                          id: '1',
                          name: 'Pilot',
                          episode: 'S01E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '2',
                          name: 'Lawnmower Dog',
                          episode: 'S01E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '3',
                          name: 'Anatomy Park',
                          episode: 'S01E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '4',
                          name: 'M. Night Shaym-Aliens!',
                          episode: 'S01E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '5',
                          name: 'Meeseeks and Destroy',
                          episode: 'S01E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '6',
                          name: 'Rick Potion #9',
                          episode: 'S01E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '7',
                          name: 'Raising Gazorpazorp',
                          episode: 'S01E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '8',
                          name: 'Rixty Minutes',
                          episode: 'S01E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '9',
                          name: 'Something Ricked This Way Comes',
                          episode: 'S01E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '10',
                          name: 'Close Rick-counters of the Rick Kind',
                          episode: 'S01E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '11',
                          name: 'Ricksy Business',
                          episode: 'S01E11',
                          __typename: 'Episode',
                        },
                        {
                          id: '12',
                          name: 'A Rickle in Time',
                          episode: 'S02E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '13',
                          name: 'Mortynight Run',
                          episode: 'S02E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '14',
                          name: 'Auto Erotic Assimilation',
                          episode: 'S02E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '15',
                          name: 'Total Rickall',
                          episode: 'S02E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '16',
                          name: 'Get Schwifty',
                          episode: 'S02E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '17',
                          name: 'The Ricks Must Be Crazy',
                          episode: 'S02E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '18',
                          name: 'Big Trouble in Little Sanchez',
                          episode: 'S02E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '19',
                          name: 'Interdimensional Cable 2: Tempting Fate',
                          episode: 'S02E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '20',
                          name: "Look Who's Purging Now",
                          episode: 'S02E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '21',
                          name: 'The Wedding Squanchers',
                          episode: 'S02E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '22',
                          name: 'The Rickshank Rickdemption',
                          episode: 'S03E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '23',
                          name: 'Rickmancing the Stone',
                          episode: 'S03E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '24',
                          name: 'Pickle Rick',
                          episode: 'S03E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '25',
                          name: 'Vindicators 3: The Return of Worldender',
                          episode: 'S03E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '26',
                          name: 'The Whirly Dirly Conspiracy',
                          episode: 'S03E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '27',
                          name: 'Rest and Ricklaxation',
                          episode: 'S03E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '28',
                          name: 'The Ricklantis Mixup',
                          episode: 'S03E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '29',
                          name: "Morty's Mind Blowers",
                          episode: 'S03E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '30',
                          name: "The ABC's of Beth",
                          episode: 'S03E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '31',
                          name: 'The Rickchurian Mortydate',
                          episode: 'S03E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '32',
                          name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                          episode: 'S04E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '33',
                          name: 'The Old Man and the Seat',
                          episode: 'S04E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '34',
                          name: "One Crew Over the Crewcoo's Morty",
                          episode: 'S04E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '35',
                          name: "Claw and Hoarder: Special Ricktim's Morty",
                          episode: 'S04E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '36',
                          name: 'Rattlestar Ricklactica',
                          episode: 'S04E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '37',
                          name: 'Never Ricking Morty',
                          episode: 'S04E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '38',
                          name: 'Promortyus',
                          episode: 'S04E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '39',
                          name: 'The Vat of Acid Episode',
                          episode: 'S04E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '40',
                          name: 'Childrick of Mort',
                          episode: 'S04E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '41',
                          name: 'Star Mort: Rickturn of the Jerri',
                          episode: 'S04E10',
                          __typename: 'Episode',
                        },
                      ],
                      created: '2017-11-04T18:48:46.250Z',
                      __typename: 'Character',
                    },
                    {
                      id: '2',
                      name: 'Morty Smith',
                      status: 'Alive',
                      species: 'Human',
                      type: '',
                      gender: 'Male',
                      origin: {
                        id: '1',
                        name: 'Earth (C-137)',
                        type: 'Planet',
                        dimension: 'Dimension C-137',
                        __typename: 'Location',
                      },
                      location: {
                        name: 'Earth (Replacement Dimension)',
                        dimension: 'Replacement Dimension',
                        __typename: 'Location',
                      },
                      image:
                        'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                      episode: [
                        {
                          id: '1',
                          name: 'Pilot',
                          episode: 'S01E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '2',
                          name: 'Lawnmower Dog',
                          episode: 'S01E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '3',
                          name: 'Anatomy Park',
                          episode: 'S01E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '4',
                          name: 'M. Night Shaym-Aliens!',
                          episode: 'S01E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '5',
                          name: 'Meeseeks and Destroy',
                          episode: 'S01E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '6',
                          name: 'Rick Potion #9',
                          episode: 'S01E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '7',
                          name: 'Raising Gazorpazorp',
                          episode: 'S01E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '8',
                          name: 'Rixty Minutes',
                          episode: 'S01E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '9',
                          name: 'Something Ricked This Way Comes',
                          episode: 'S01E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '10',
                          name: 'Close Rick-counters of the Rick Kind',
                          episode: 'S01E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '11',
                          name: 'Ricksy Business',
                          episode: 'S01E11',
                          __typename: 'Episode',
                        },
                        {
                          id: '12',
                          name: 'A Rickle in Time',
                          episode: 'S02E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '13',
                          name: 'Mortynight Run',
                          episode: 'S02E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '14',
                          name: 'Auto Erotic Assimilation',
                          episode: 'S02E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '15',
                          name: 'Total Rickall',
                          episode: 'S02E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '16',
                          name: 'Get Schwifty',
                          episode: 'S02E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '17',
                          name: 'The Ricks Must Be Crazy',
                          episode: 'S02E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '18',
                          name: 'Big Trouble in Little Sanchez',
                          episode: 'S02E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '19',
                          name: 'Interdimensional Cable 2: Tempting Fate',
                          episode: 'S02E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '20',
                          name: "Look Who's Purging Now",
                          episode: 'S02E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '21',
                          name: 'The Wedding Squanchers',
                          episode: 'S02E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '22',
                          name: 'The Rickshank Rickdemption',
                          episode: 'S03E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '23',
                          name: 'Rickmancing the Stone',
                          episode: 'S03E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '24',
                          name: 'Pickle Rick',
                          episode: 'S03E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '25',
                          name: 'Vindicators 3: The Return of Worldender',
                          episode: 'S03E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '26',
                          name: 'The Whirly Dirly Conspiracy',
                          episode: 'S03E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '27',
                          name: 'Rest and Ricklaxation',
                          episode: 'S03E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '28',
                          name: 'The Ricklantis Mixup',
                          episode: 'S03E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '29',
                          name: "Morty's Mind Blowers",
                          episode: 'S03E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '30',
                          name: "The ABC's of Beth",
                          episode: 'S03E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '31',
                          name: 'The Rickchurian Mortydate',
                          episode: 'S03E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '32',
                          name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                          episode: 'S04E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '33',
                          name: 'The Old Man and the Seat',
                          episode: 'S04E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '34',
                          name: "One Crew Over the Crewcoo's Morty",
                          episode: 'S04E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '35',
                          name: "Claw and Hoarder: Special Ricktim's Morty",
                          episode: 'S04E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '36',
                          name: 'Rattlestar Ricklactica',
                          episode: 'S04E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '37',
                          name: 'Never Ricking Morty',
                          episode: 'S04E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '38',
                          name: 'Promortyus',
                          episode: 'S04E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '39',
                          name: 'The Vat of Acid Episode',
                          episode: 'S04E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '40',
                          name: 'Childrick of Mort',
                          episode: 'S04E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '41',
                          name: 'Star Mort: Rickturn of the Jerri',
                          episode: 'S04E10',
                          __typename: 'Episode',
                        },
                      ],
                      created: '2017-11-04T18:50:21.651Z',
                      __typename: 'Character',
                    },
                    {
                      id: '3',
                      name: 'Summer Smith',
                      status: 'Alive',
                      species: 'Human',
                      type: '',
                      gender: 'Female',
                      origin: {
                        id: '20',
                        name: 'Earth (Replacement Dimension)',
                        type: 'Planet',
                        dimension: 'Replacement Dimension',
                        __typename: 'Location',
                      },
                      location: {
                        name: 'Earth (Replacement Dimension)',
                        dimension: 'Replacement Dimension',
                        __typename: 'Location',
                      },
                      image:
                        'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
                      episode: [
                        {
                          id: '6',
                          name: 'Rick Potion #9',
                          episode: 'S01E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '7',
                          name: 'Raising Gazorpazorp',
                          episode: 'S01E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '8',
                          name: 'Rixty Minutes',
                          episode: 'S01E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '9',
                          name: 'Something Ricked This Way Comes',
                          episode: 'S01E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '10',
                          name: 'Close Rick-counters of the Rick Kind',
                          episode: 'S01E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '11',
                          name: 'Ricksy Business',
                          episode: 'S01E11',
                          __typename: 'Episode',
                        },
                        {
                          id: '12',
                          name: 'A Rickle in Time',
                          episode: 'S02E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '14',
                          name: 'Auto Erotic Assimilation',
                          episode: 'S02E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '15',
                          name: 'Total Rickall',
                          episode: 'S02E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '16',
                          name: 'Get Schwifty',
                          episode: 'S02E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '17',
                          name: 'The Ricks Must Be Crazy',
                          episode: 'S02E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '18',
                          name: 'Big Trouble in Little Sanchez',
                          episode: 'S02E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '19',
                          name: 'Interdimensional Cable 2: Tempting Fate',
                          episode: 'S02E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '20',
                          name: "Look Who's Purging Now",
                          episode: 'S02E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '21',
                          name: 'The Wedding Squanchers',
                          episode: 'S02E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '22',
                          name: 'The Rickshank Rickdemption',
                          episode: 'S03E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '23',
                          name: 'Rickmancing the Stone',
                          episode: 'S03E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '24',
                          name: 'Pickle Rick',
                          episode: 'S03E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '25',
                          name: 'Vindicators 3: The Return of Worldender',
                          episode: 'S03E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '26',
                          name: 'The Whirly Dirly Conspiracy',
                          episode: 'S03E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '27',
                          name: 'Rest and Ricklaxation',
                          episode: 'S03E06',
                          __typename: 'Episode',
                        },
                        {
                          id: '29',
                          name: "Morty's Mind Blowers",
                          episode: 'S03E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '30',
                          name: "The ABC's of Beth",
                          episode: 'S03E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '31',
                          name: 'The Rickchurian Mortydate',
                          episode: 'S03E10',
                          __typename: 'Episode',
                        },
                        {
                          id: '32',
                          name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                          episode: 'S04E01',
                          __typename: 'Episode',
                        },
                        {
                          id: '33',
                          name: 'The Old Man and the Seat',
                          episode: 'S04E02',
                          __typename: 'Episode',
                        },
                        {
                          id: '34',
                          name: "One Crew Over the Crewcoo's Morty",
                          episode: 'S04E03',
                          __typename: 'Episode',
                        },
                        {
                          id: '35',
                          name: "Claw and Hoarder: Special Ricktim's Morty",
                          episode: 'S04E04',
                          __typename: 'Episode',
                        },
                        {
                          id: '36',
                          name: 'Rattlestar Ricklactica',
                          episode: 'S04E05',
                          __typename: 'Episode',
                        },
                        {
                          id: '38',
                          name: 'Promortyus',
                          episode: 'S04E07',
                          __typename: 'Episode',
                        },
                        {
                          id: '39',
                          name: 'The Vat of Acid Episode',
                          episode: 'S04E08',
                          __typename: 'Episode',
                        },
                        {
                          id: '40',
                          name: 'Childrick of Mort',
                          episode: 'S04E09',
                          __typename: 'Episode',
                        },
                        {
                          id: '41',
                          name: 'Star Mort: Rickturn of the Jerri',
                          episode: 'S04E10',
                          __typename: 'Episode',
                        },
                      ],
                      created: '2017-11-04T19:09:56.428Z',
                      __typename: 'Character',
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Items />
      </MockedProvider>,
    )

    await act(async () => {
      await wait()
      wrapper.update()
    })

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
