import { Builder } from '../../types/selector'
import { Character } from 'genshin-db'

/**
 * Build four random team members
 */
export class RandomBuilder implements Builder {
  build(
    characters: Array<Character>,
    required?: Array<Character>
  ): [Character, Character, Character, Character] | undefined {
    // Build pool of remaining characters
    const pool = [...characters]

    // Build initial pool
    const selected: Array<Character> = required ? [...required] : []

    // Randomly select 4 names from the filtered list
    while (pool.length > 0 && selected.length < 4) {
      const randomIndex = Math.floor(Math.random() * pool.length)
      selected.push(pool[randomIndex])
      pool.splice(randomIndex, 1) // Remove the selected name to avoid duplicates
    }

    // Check if we have a full team
    if (selected.length !== 4) {
      return undefined
    }

    return selected as [Character, Character, Character, Character]
  }
}
