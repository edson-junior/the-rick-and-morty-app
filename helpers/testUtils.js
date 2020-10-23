import { RYCK_AND_MORTY_DATA } from './api/queries/locations'

export const mockedCharacters = [
  {
    request: {
      query: RYCK_AND_MORTY_DATA,
      variables: {
        page: 2,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            count: 671,
            pages: 34,
            next: 3,
            prev: null,
          },
          results: [
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
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                dimension: 'Replacement Dimension',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                {
                  id: '1',
                  name: 'Pilot',
                  episode: 'S01E01',
                },
                {
                  id: '2',
                  name: 'Lawnmower Dog',
                  episode: 'S01E02',
                },
                {
                  id: '3',
                  name: 'Anatomy Park',
                  episode: 'S01E03',
                },
                {
                  id: '4',
                  name: 'M. Night Shaym-Aliens!',
                  episode: 'S01E04',
                },
                {
                  id: '5',
                  name: 'Meeseeks and Destroy',
                  episode: 'S01E05',
                },
                {
                  id: '6',
                  name: 'Rick Potion #9',
                  episode: 'S01E06',
                },
                {
                  id: '7',
                  name: 'Raising Gazorpazorp',
                  episode: 'S01E07',
                },
                {
                  id: '8',
                  name: 'Rixty Minutes',
                  episode: 'S01E08',
                },
                {
                  id: '9',
                  name: 'Something Ricked This Way Comes',
                  episode: 'S01E09',
                },
                {
                  id: '10',
                  name: 'Close Rick-counters of the Rick Kind',
                  episode: 'S01E10',
                },
                {
                  id: '11',
                  name: 'Ricksy Business',
                  episode: 'S01E11',
                },
                {
                  id: '12',
                  name: 'A Rickle in Time',
                  episode: 'S02E01',
                },
                {
                  id: '13',
                  name: 'Mortynight Run',
                  episode: 'S02E02',
                },
                {
                  id: '14',
                  name: 'Auto Erotic Assimilation',
                  episode: 'S02E03',
                },
                {
                  id: '15',
                  name: 'Total Rickall',
                  episode: 'S02E04',
                },
                {
                  id: '16',
                  name: 'Get Schwifty',
                  episode: 'S02E05',
                },
                {
                  id: '17',
                  name: 'The Ricks Must Be Crazy',
                  episode: 'S02E06',
                },
                {
                  id: '18',
                  name: 'Big Trouble in Little Sanchez',
                  episode: 'S02E07',
                },
                {
                  id: '19',
                  name: 'Interdimensional Cable 2: Tempting Fate',
                  episode: 'S02E08',
                },
                {
                  id: '20',
                  name: "Look Who's Purging Now",
                  episode: 'S02E09',
                },
                {
                  id: '21',
                  name: 'The Wedding Squanchers',
                  episode: 'S02E10',
                },
                {
                  id: '22',
                  name: 'The Rickshank Rickdemption',
                  episode: 'S03E01',
                },
                {
                  id: '23',
                  name: 'Rickmancing the Stone',
                  episode: 'S03E02',
                },
                {
                  id: '24',
                  name: 'Pickle Rick',
                  episode: 'S03E03',
                },
                {
                  id: '25',
                  name: 'Vindicators 3: The Return of Worldender',
                  episode: 'S03E04',
                },
                {
                  id: '26',
                  name: 'The Whirly Dirly Conspiracy',
                  episode: 'S03E05',
                },
                {
                  id: '27',
                  name: 'Rest and Ricklaxation',
                  episode: 'S03E06',
                },
                {
                  id: '28',
                  name: 'The Ricklantis Mixup',
                  episode: 'S03E07',
                },
                {
                  id: '29',
                  name: "Morty's Mind Blowers",
                  episode: 'S03E08',
                },
                {
                  id: '30',
                  name: "The ABC's of Beth",
                  episode: 'S03E09',
                },
                {
                  id: '31',
                  name: 'The Rickchurian Mortydate',
                  episode: 'S03E10',
                },
                {
                  id: '32',
                  name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                  episode: 'S04E01',
                },
                {
                  id: '33',
                  name: 'The Old Man and the Seat',
                  episode: 'S04E02',
                },
                {
                  id: '34',
                  name: "One Crew Over the Crewcoo's Morty",
                  episode: 'S04E03',
                },
                {
                  id: '35',
                  name: "Claw and Hoarder: Special Ricktim's Morty",
                  episode: 'S04E04',
                },
                {
                  id: '36',
                  name: 'Rattlestar Ricklactica',
                  episode: 'S04E05',
                },
                {
                  id: '37',
                  name: 'Never Ricking Morty',
                  episode: 'S04E06',
                },
                {
                  id: '38',
                  name: 'Promortyus',
                  episode: 'S04E07',
                },
                {
                  id: '39',
                  name: 'The Vat of Acid Episode',
                  episode: 'S04E08',
                },
                {
                  id: '40',
                  name: 'Childrick of Mort',
                  episode: 'S04E09',
                },
                {
                  id: '41',
                  name: 'Star Mort: Rickturn of the Jerri',
                  episode: 'S04E10',
                },
              ],
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
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                dimension: 'Replacement Dimension',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              episode: [
                {
                  id: '1',
                  name: 'Pilot',
                  episode: 'S01E01',
                },
                {
                  id: '2',
                  name: 'Lawnmower Dog',
                  episode: 'S01E02',
                },
                {
                  id: '3',
                  name: 'Anatomy Park',
                  episode: 'S01E03',
                },
                {
                  id: '4',
                  name: 'M. Night Shaym-Aliens!',
                  episode: 'S01E04',
                },
                {
                  id: '5',
                  name: 'Meeseeks and Destroy',
                  episode: 'S01E05',
                },
                {
                  id: '6',
                  name: 'Rick Potion #9',
                  episode: 'S01E06',
                },
                {
                  id: '7',
                  name: 'Raising Gazorpazorp',
                  episode: 'S01E07',
                },
                {
                  id: '8',
                  name: 'Rixty Minutes',
                  episode: 'S01E08',
                },
                {
                  id: '9',
                  name: 'Something Ricked This Way Comes',
                  episode: 'S01E09',
                },
                {
                  id: '10',
                  name: 'Close Rick-counters of the Rick Kind',
                  episode: 'S01E10',
                },
                {
                  id: '11',
                  name: 'Ricksy Business',
                  episode: 'S01E11',
                },
                {
                  id: '12',
                  name: 'A Rickle in Time',
                  episode: 'S02E01',
                },
                {
                  id: '13',
                  name: 'Mortynight Run',
                  episode: 'S02E02',
                },
                {
                  id: '14',
                  name: 'Auto Erotic Assimilation',
                  episode: 'S02E03',
                },
                {
                  id: '15',
                  name: 'Total Rickall',
                  episode: 'S02E04',
                },
                {
                  id: '16',
                  name: 'Get Schwifty',
                  episode: 'S02E05',
                },
                {
                  id: '17',
                  name: 'The Ricks Must Be Crazy',
                  episode: 'S02E06',
                },
                {
                  id: '18',
                  name: 'Big Trouble in Little Sanchez',
                  episode: 'S02E07',
                },
                {
                  id: '19',
                  name: 'Interdimensional Cable 2: Tempting Fate',
                  episode: 'S02E08',
                },
                {
                  id: '20',
                  name: "Look Who's Purging Now",
                  episode: 'S02E09',
                },
                {
                  id: '21',
                  name: 'The Wedding Squanchers',
                  episode: 'S02E10',
                },
                {
                  id: '22',
                  name: 'The Rickshank Rickdemption',
                  episode: 'S03E01',
                },
                {
                  id: '23',
                  name: 'Rickmancing the Stone',
                  episode: 'S03E02',
                },
                {
                  id: '24',
                  name: 'Pickle Rick',
                  episode: 'S03E03',
                },
                {
                  id: '25',
                  name: 'Vindicators 3: The Return of Worldender',
                  episode: 'S03E04',
                },
                {
                  id: '26',
                  name: 'The Whirly Dirly Conspiracy',
                  episode: 'S03E05',
                },
                {
                  id: '27',
                  name: 'Rest and Ricklaxation',
                  episode: 'S03E06',
                },
                {
                  id: '28',
                  name: 'The Ricklantis Mixup',
                  episode: 'S03E07',
                },
                {
                  id: '29',
                  name: "Morty's Mind Blowers",
                  episode: 'S03E08',
                },
                {
                  id: '30',
                  name: "The ABC's of Beth",
                  episode: 'S03E09',
                },
                {
                  id: '31',
                  name: 'The Rickchurian Mortydate',
                  episode: 'S03E10',
                },
                {
                  id: '32',
                  name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                  episode: 'S04E01',
                },
                {
                  id: '33',
                  name: 'The Old Man and the Seat',
                  episode: 'S04E02',
                },
                {
                  id: '34',
                  name: "One Crew Over the Crewcoo's Morty",
                  episode: 'S04E03',
                },
                {
                  id: '35',
                  name: "Claw and Hoarder: Special Ricktim's Morty",
                  episode: 'S04E04',
                },
                {
                  id: '36',
                  name: 'Rattlestar Ricklactica',
                  episode: 'S04E05',
                },
                {
                  id: '37',
                  name: 'Never Ricking Morty',
                  episode: 'S04E06',
                },
                {
                  id: '38',
                  name: 'Promortyus',
                  episode: 'S04E07',
                },
                {
                  id: '39',
                  name: 'The Vat of Acid Episode',
                  episode: 'S04E08',
                },
                {
                  id: '40',
                  name: 'Childrick of Mort',
                  episode: 'S04E09',
                },
                {
                  id: '41',
                  name: 'Star Mort: Rickturn of the Jerri',
                  episode: 'S04E10',
                },
              ],
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
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                dimension: 'Replacement Dimension',
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
              episode: [
                {
                  id: '6',
                  name: 'Rick Potion #9',
                  episode: 'S01E06',
                },
                {
                  id: '7',
                  name: 'Raising Gazorpazorp',
                  episode: 'S01E07',
                },
                {
                  id: '8',
                  name: 'Rixty Minutes',
                  episode: 'S01E08',
                },
                {
                  id: '9',
                  name: 'Something Ricked This Way Comes',
                  episode: 'S01E09',
                },
                {
                  id: '10',
                  name: 'Close Rick-counters of the Rick Kind',
                  episode: 'S01E10',
                },
                {
                  id: '11',
                  name: 'Ricksy Business',
                  episode: 'S01E11',
                },
                {
                  id: '12',
                  name: 'A Rickle in Time',
                  episode: 'S02E01',
                },
                {
                  id: '14',
                  name: 'Auto Erotic Assimilation',
                  episode: 'S02E03',
                },
                {
                  id: '15',
                  name: 'Total Rickall',
                  episode: 'S02E04',
                },
                {
                  id: '16',
                  name: 'Get Schwifty',
                  episode: 'S02E05',
                },
                {
                  id: '17',
                  name: 'The Ricks Must Be Crazy',
                  episode: 'S02E06',
                },
                {
                  id: '18',
                  name: 'Big Trouble in Little Sanchez',
                  episode: 'S02E07',
                },
                {
                  id: '19',
                  name: 'Interdimensional Cable 2: Tempting Fate',
                  episode: 'S02E08',
                },
                {
                  id: '20',
                  name: "Look Who's Purging Now",
                  episode: 'S02E09',
                },
                {
                  id: '21',
                  name: 'The Wedding Squanchers',
                  episode: 'S02E10',
                },
                {
                  id: '22',
                  name: 'The Rickshank Rickdemption',
                  episode: 'S03E01',
                },
                {
                  id: '23',
                  name: 'Rickmancing the Stone',
                  episode: 'S03E02',
                },
                {
                  id: '24',
                  name: 'Pickle Rick',
                  episode: 'S03E03',
                },
                {
                  id: '25',
                  name: 'Vindicators 3: The Return of Worldender',
                  episode: 'S03E04',
                },
                {
                  id: '26',
                  name: 'The Whirly Dirly Conspiracy',
                  episode: 'S03E05',
                },
                {
                  id: '27',
                  name: 'Rest and Ricklaxation',
                  episode: 'S03E06',
                },
                {
                  id: '29',
                  name: "Morty's Mind Blowers",
                  episode: 'S03E08',
                },
                {
                  id: '30',
                  name: "The ABC's of Beth",
                  episode: 'S03E09',
                },
                {
                  id: '31',
                  name: 'The Rickchurian Mortydate',
                  episode: 'S03E10',
                },
                {
                  id: '32',
                  name: 'Edge of Tomorty: Rick, Die, Rickpeat',
                  episode: 'S04E01',
                },
                {
                  id: '33',
                  name: 'The Old Man and the Seat',
                  episode: 'S04E02',
                },
                {
                  id: '34',
                  name: "One Crew Over the Crewcoo's Morty",
                  episode: 'S04E03',
                },
                {
                  id: '35',
                  name: "Claw and Hoarder: Special Ricktim's Morty",
                  episode: 'S04E04',
                },
                {
                  id: '36',
                  name: 'Rattlestar Ricklactica',
                  episode: 'S04E05',
                },
                {
                  id: '38',
                  name: 'Promortyus',
                  episode: 'S04E07',
                },
                {
                  id: '39',
                  name: 'The Vat of Acid Episode',
                  episode: 'S04E08',
                },
                {
                  id: '40',
                  name: 'Childrick of Mort',
                  episode: 'S04E09',
                },
                {
                  id: '41',
                  name: 'Star Mort: Rickturn of the Jerri',
                  episode: 'S04E10',
                },
              ],
            },
          ],
        },
      },
    },
  },
]
