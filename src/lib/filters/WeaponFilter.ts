import { Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import { WeaponType } from '../../types/teams'

/**
 * Filters characters by a specific weapon
 */
export class WeaponFilter implements Filter {
  weapon: WeaponType

  constructor(weapon: WeaponType) {
    this.weapon = weapon
  }

  filter(characters: Array<Character>): Array<Character> {
    return characters.filter(
      (character) => character.weaponType === this.weapon
    )
  }
}
