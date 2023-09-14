import type { Character } from 'genshin-db'

/**
 * A builder generates a random team
 */
export interface Builder {
  /**
   * Build a team
   * @param characters List of characters that can be used
   * @param required List of characters that must be used
   */
  build: (
    characters: Array<Character>,
    required?: Array<Character>
  ) => [Character, Character, Character, Character] | undefined
}

/**
 * A filter reduces the list of available characters
 */
export interface Filter {
  filter: (characters: Array<Character>) => Array<Character>
}
