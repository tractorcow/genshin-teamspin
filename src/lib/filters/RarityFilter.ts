import { Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import { Rarity } from '../../types/teams'

/**
 * Filters characters by a specific rarity
 */
export class RarityFilter implements Filter {
  rarity: Rarity

  constructor(rarity: Rarity) {
    this.rarity = rarity
  }

  filter(characters: Array<Character>): Array<Character> {
    return characters.filter((character) => character.rarity === this.rarity)
  }
}
