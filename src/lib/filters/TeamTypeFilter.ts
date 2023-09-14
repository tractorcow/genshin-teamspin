import { Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import { ElementType, TeamType, WeaponType } from '../../types/teams'
import { isArrayOfElements, isElement } from '../queries'

/**
 * Filters characters by a specified team rule
 */
export class TeamTypeFilter implements Filter {
  teamType: TeamType

  constructor(teamType: TeamType) {
    this.teamType = teamType
  }

  /**
   * Get all elements allowed in this team
   */
  getAllowedElements(): Array<ElementType> | undefined {
    let elements: Array<ElementType> = []
    for (const member of this.teamType.members) {
      if (!member.element || member.element === 'different') {
        // No element restriction on this item, so all allowed
        return undefined
      } else if (isArrayOfElements(member.element)) {
        // Add all elements
        elements = [...elements, ...member.element]
      } else if (isElement(member.element)) {
        // Add element
        elements = [...elements, member.element]
      }
    }

    // Return all allowed elements, remove duplicates
    return elements.length ? [...new Set(elements)] : undefined
  }

  /**
   * Get all weapons allowed in this team
   */
  getAllowedWeapons(): Array<WeaponType> | undefined {
    let weapons: Array<WeaponType> = []
    for (const member of this.teamType.members) {
      if (!member.weapontype) {
        // No weapon restriction on this item, so all allowed
        return undefined
      } else {
        // Add unique element
        weapons = [...new Set([...weapons, member.weapontype])]
      }
    }

    // Return all allowed elements
    return weapons.length ? weapons : undefined
  }

  filter(characters: Array<Character>): Array<Character> {
    // Do a bit of analysis on the type to get the list of valid elemens / weapons
    const allowedElements = this.getAllowedElements()
    const allowedWeapons = this.getAllowedWeapons()
    return characters.filter(
      (character) =>
        (!allowedElements ||
          allowedElements.includes(character.element as ElementType)) &&
        (!allowedWeapons ||
          allowedWeapons.includes(character.weapontype as WeaponType))
    )
  }
}
