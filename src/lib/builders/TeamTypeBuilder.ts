import { Builder } from '../../types/selector'
import type { Character } from 'genshin-db'
import {
  CompleteTeam,
  ElementType,
  TeamMemberType,
  TeamType,
} from '../../types/teams'
import {
  filterNotNamed,
  isArrayOfElements,
  isElement,
  shuffle,
} from '../queries'

/**
 * Build four random team members
 */
export class TeamTypeBuilder implements Builder {
  teamType: TeamType

  constructor(teamType: TeamType) {
    this.teamType = teamType
  }

  /**
   * Get all elements that 100% will be a part of this team
   */
  getFixedElements(): Array<ElementType> {
    let elements: Array<ElementType> = []
    for (const member of this.teamType.members) {
      if (isElement(member.element)) {
        elements = [...elements, member.element]
      }
    }

    // Return all elements elements, remove duplicates
    return [...new Set(elements)]
  }

  /**
   * Check if this character matches this rule
   * @param character
   * @param teamMemberType
   * @param currentElements
   */
  matchesRule(
    character: Character,
    teamMemberType: TeamMemberType,
    currentElements: Array<ElementType>
  ): boolean {
    // Match name (note: Ignore other rules)
    if (teamMemberType.name) {
      return teamMemberType.name === character.name
    }

    // Fail "must have different element" check
    if (
      teamMemberType.element === 'different' &&
      currentElements.includes(character.elementType)
    ) {
      return false
    }

    // Fail "must have same element" check
    if (
      teamMemberType.element === 'same' &&
      !currentElements.includes(character.elementType)
    ) {
      return false
    }

    // Fail "must be element" check
    if (
      isElement(teamMemberType.element) &&
      teamMemberType.element !== character.elementType
    ) {
      return false
    }

    // Fail "must be one of element" list
    if (
      isArrayOfElements(teamMemberType.element) &&
      !teamMemberType.element.includes(character.elementType)
    ) {
      return false
    }

    // Fail "must have weapon" check
    if (
      teamMemberType.weapontype &&
      character.weaponType !== teamMemberType.weapontype
    ) {
      return false
    }

    // Seems good to me!
    return true
  }

  build(
    characters: Array<Character>,
    required?: Array<Character>
  ): CompleteTeam | undefined {
    // Randomise pool
    let pool = shuffle(characters)

    // Keep list of all elements we have to handle exclusions
    const currentElements = this.getFixedElements()

    // Keep list and position of each character
    const placements: Array<Character | null> = [null, null, null, null]

    /**
     * Place a character, returning success state
     * @param character
     */
    const placeCharacter = (character: Character): boolean => {
      // Find a place for this
      for (let i = 0; i < 4; i++) {
        // Skip if already placed
        if (placements[i]) {
          continue
        }

        // Check rule for this placement
        const teamMemberType = this.teamType.members[i]
        if (this.matchesRule(character, teamMemberType, currentElements)) {
          // Place this character, remember their element
          placements[i] = character
          currentElements.push(character.elementType)
          return true
        }
      }
      return false
    }

    // add any required characters
    if (required) {
      // Remove required characters from general pool
      pool = filterNotNamed(
        pool,
        required.map((next) => next.name)
      )

      // Attempt to add all required characters
      for (const requiredCharacter of required) {
        // Any required character that cannot be placed will fail
        // the entire party
        if (!placeCharacter(requiredCharacter)) {
          return undefined
        }
      }
    }

    // Add random items from the pool until we are full, or run out of characters
    let character: Character | undefined
    while ((character = pool.shift()) && placements.includes(null)) {
      placeCharacter(character)
    }

    // We ran out of characters before we could finish the team
    if (placements.includes(null)) {
      return undefined
    }

    // Success
    return placements as CompleteTeam
  }
}
