import type { Character } from 'genshin-db'
import { getNames } from './queries'

/**
 * Get random team from this list
 * @param characters
 */
export function selectRandomFour(characters: Array<Character>): string[] {
  const names = getNames(characters)

  // If there are less than 4 names left, return them all
  if (names.length <= 4) {
    return names
  }

  // Randomly select 4 names from the filtered list
  const selectedNames: string[] = []
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * names.length)
    selectedNames.push(names[randomIndex])
    names.splice(randomIndex, 1) // Remove the selected name to avoid duplicates
  }
  return selectedNames
}
