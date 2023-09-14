import { genshinDbType } from './genshindb'
import type { Character } from 'genshin-db'
import { Gender, TeamType, TypeGroup } from '../types/teams'

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

/**
 * Get a team type config by name
 *
 * @param type
 * @param teamTypes
 */
export function findTeamType(
  type: string | undefined,
  teamTypes: Array<TypeGroup>
): TeamType | undefined {
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

/**
 * Run team generator
 *
 * @param characters
 */
export function generateTeamWithOptions(
  characters: Array<Character>,
  selectedType: TeamType | undefined,
  gender: Gender | undefined,
  includeHeader: boolean
) {}
