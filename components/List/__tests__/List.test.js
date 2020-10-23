import { waitFor, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/client/testing'
import { RYCK_AND_MORTY_DATA } from '../../../helpers/api/queries/locations'
import List from '../List'

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

describe('List', () => {
  const mocks = [
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
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
              {
                id: '4',
                name: 'Beth Smith',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
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
                id: '5',
                name: 'Jerry Smith',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Male',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
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
                    id: '26',
                    name: 'The Whirly Dirly Conspiracy',
                    episode: 'S03E05',
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
              {
                id: '6',
                name: 'Abadango Cluster Princess',
                status: 'Alive',
                species: 'Alien',
                type: '',
                gender: 'Female',
                origin: {
                  id: '2',
                  name: 'Abadango',
                  type: 'Cluster',
                  dimension: 'unknown',
                },
                location: {
                  name: 'Abadango',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
                episode: [
                  {
                    id: '27',
                    name: 'Rest and Ricklaxation',
                    episode: 'S03E06',
                  },
                ],
              },
              {
                id: '7',
                name: 'Abradolf Lincler',
                status: 'unknown',
                species: 'Human',
                type: 'Genetic experiment',
                gender: 'Male',
                origin: {
                  id: '20',
                  name: 'Earth (Replacement Dimension)',
                  type: 'Planet',
                  dimension: 'Replacement Dimension',
                },
                location: {
                  name: 'Testicle Monster Dimension',
                  dimension: 'Testicle Monster Dimension',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
                episode: [
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
                ],
              },
              {
                id: '8',
                name: 'Adjudicator Rick',
                status: 'Dead',
                species: 'Human',
                type: '',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Citadel of Ricks',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
                episode: [
                  {
                    id: '28',
                    name: 'The Ricklantis Mixup',
                    episode: 'S03E07',
                  },
                ],
              },
              {
                id: '9',
                name: 'Agency Director',
                status: 'Dead',
                species: 'Human',
                type: '',
                gender: 'Male',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
                episode: [
                  {
                    id: '24',
                    name: 'Pickle Rick',
                    episode: 'S03E03',
                  },
                ],
              },
              {
                id: '10',
                name: 'Alan Rails',
                status: 'Dead',
                species: 'Human',
                type: 'Superhuman (Ghost trains summoner)',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: "Worldender's lair",
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/10.jpeg',
                episode: [
                  {
                    id: '25',
                    name: 'Vindicators 3: The Return of Worldender',
                    episode: 'S03E04',
                  },
                ],
              },
              {
                id: '11',
                name: 'Albert Einstein',
                status: 'Dead',
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
                image:
                  'https://rickandmortyapi.com/api/character/avatar/11.jpeg',
                episode: [
                  {
                    id: '12',
                    name: 'A Rickle in Time',
                    episode: 'S02E01',
                  },
                ],
              },
              {
                id: '12',
                name: 'Alexander',
                status: 'Dead',
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
                  name: 'Anatomy Park',
                  dimension: 'Dimension C-137',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/12.jpeg',
                episode: [
                  {
                    id: '3',
                    name: 'Anatomy Park',
                    episode: 'S01E03',
                  },
                ],
              },
              {
                id: '13',
                name: 'Alien Googah',
                status: 'unknown',
                species: 'Alien',
                type: '',
                gender: 'unknown',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Earth (Replacement Dimension)',
                  dimension: 'Replacement Dimension',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/13.jpeg',
                episode: [
                  {
                    id: '31',
                    name: 'The Rickchurian Mortydate',
                    episode: 'S03E10',
                  },
                ],
              },
              {
                id: '14',
                name: 'Alien Morty',
                status: 'unknown',
                species: 'Alien',
                type: '',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Citadel of Ricks',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
                episode: [
                  {
                    id: '10',
                    name: 'Close Rick-counters of the Rick Kind',
                    episode: 'S01E10',
                  },
                ],
              },
              {
                id: '15',
                name: 'Alien Rick',
                status: 'unknown',
                species: 'Alien',
                type: '',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Citadel of Ricks',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
                episode: [
                  {
                    id: '10',
                    name: 'Close Rick-counters of the Rick Kind',
                    episode: 'S01E10',
                  },
                ],
              },
              {
                id: '16',
                name: 'Amish Cyborg',
                status: 'Dead',
                species: 'Alien',
                type: 'Parasite',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Earth (Replacement Dimension)',
                  dimension: 'Replacement Dimension',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/16.jpeg',
                episode: [
                  {
                    id: '15',
                    name: 'Total Rickall',
                    episode: 'S02E04',
                  },
                ],
              },
              {
                id: '17',
                name: 'Annie',
                status: 'Alive',
                species: 'Human',
                type: '',
                gender: 'Female',
                origin: {
                  id: '1',
                  name: 'Earth (C-137)',
                  type: 'Planet',
                  dimension: 'Dimension C-137',
                },
                location: {
                  name: 'Anatomy Park',
                  dimension: 'Dimension C-137',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
                episode: [
                  {
                    id: '3',
                    name: 'Anatomy Park',
                    episode: 'S01E03',
                  },
                ],
              },
              {
                id: '18',
                name: 'Antenna Morty',
                status: 'Alive',
                species: 'Human',
                type: 'Human with antennae',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Citadel of Ricks',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
                episode: [
                  {
                    id: '10',
                    name: 'Close Rick-counters of the Rick Kind',
                    episode: 'S01E10',
                  },
                  {
                    id: '28',
                    name: 'The Ricklantis Mixup',
                    episode: 'S03E07',
                  },
                ],
              },
              {
                id: '19',
                name: 'Antenna Rick',
                status: 'unknown',
                species: 'Human',
                type: 'Human with antennae',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'unknown',
                  dimension: null,
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
                episode: [
                  {
                    id: '10',
                    name: 'Close Rick-counters of the Rick Kind',
                    episode: 'S01E10',
                  },
                ],
              },
              {
                id: '20',
                name: 'Ants in my Eyes Johnson',
                status: 'unknown',
                species: 'Human',
                type: 'Human with ants in his eyes',
                gender: 'Male',
                origin: {
                  id: null,
                  name: 'unknown',
                  type: null,
                  dimension: null,
                },
                location: {
                  name: 'Interdimensional Cable',
                  dimension: 'unknown',
                },
                image:
                  'https://rickandmortyapi.com/api/character/avatar/20.jpeg',
                episode: [
                  {
                    id: '8',
                    name: 'Rixty Minutes',
                    episode: 'S01E08',
                  },
                ],
              },
            ],
          },
        },
      },
    },
  ]

  it('renders without error', async () => {
    const { getAllByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <List page={2} />
      </MockedProvider>,
    )

    await waitFor(() => expect(getAllByRole('main')).toMatchSnapshot())
  })
})
