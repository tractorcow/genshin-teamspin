import { genshinDbType } from './genshindb'
import type { Character } from 'genshin-db'

/**
 * Get all characters
 * @param genshindb
 */
export const getCharacters = (genshindb: genshinDbType): Array<Character> => {
  const names = genshindb.characters('names', { matchCategories: true })
  return names.map((name) => genshindb.characters(name) as Character)
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
