import { genshinDbType } from './genshindb'
import type { Character } from 'genshin-db'
import { ElementType, TeamType, TypeGroup } from '../types/teams'

export const healers = [
  'Baizhu',
  'Barbara',
  'Bennett',
  'Charlotte',
  'Diona',
  'Dori',
  'Furina',
  // 'Gorou', // Only @C4
  'Jean',
  'Kuki Shinobu',
  'Mika',
  'Noelle',
  'Qiqi',
  'Sayu',
  'Sangonomiya Kokomi',
  // 'Xingqiu', // Questionably
  'Yaoyao',
  // 'Zhongli' // only @C6
]

/**
 * Get all characters
 * @param genshindb
 * @param mcElement
 */
export const getCharacters = (
  genshindb: genshinDbType,
  mcElement: ElementType
): Array<Character> => {
  const names = genshindb.characters('names', { matchCategories: true })
  return names.map((name) => {
    const character = genshindb.characters(name) as Character
    if (['Lumine', 'Aether'].includes(character.name)) {
      character.element = `${mcElement}`
    }
    return character
  })
}

/**
 * Get characters by name
 * @param characters
 * @param names
 */
export const filterNamed = (
  characters: Array<Character>,
  names: Array<string>
) => {
  return characters.filter((character) => names.includes(character.name))
}

/**
 * Get healers from this list
 *
 * @param characters
 */
export const filterHealers = (characters: Array<Character>) => {
  return filterNamed(characters, healers)
}

/**
 * Get characters not named
 * @param characters
 * @param names
 */
export const filterNotNamed = (
  characters: Array<Character>,
  names: Array<string>
) => {
  return characters.filter((character) => !names.includes(character.name))
}

/**
 * Get names of characters from a list
 * @param characters
 */
export const getNames = (characters: Array<Character>) => {
  return characters.map((character) => character.name)
}

/**
 * Get a team type config by name
 *
 * @param type
 * @param teamTypes
 */
export const findTeamType = (
  type: string | undefined,
  teamTypes: Array<TypeGroup>
): TeamType | undefined => {
  if (!type) {
    return undefined
  }
  for (const group of teamTypes) {
    for (const nextType of group.types) {
      if (nextType.name === type) {
        return nextType
      }
    }
  }
  return undefined
}

export const isArrayOfElements = (
  elements: any
): elements is Array<ElementType> => {
  return Array.isArray(elements)
}

export const isElement = (element: any): element is ElementType => {
  return (
    element &&
    typeof element === 'string' &&
    element !== 'same' &&
    element !== 'different'
  )
}

/**
 * Shuffle array using https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param input
 */
export const shuffle = <T>(input: Array<T>): Array<T> => {
  const array = [...input] // Make immutable
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}
