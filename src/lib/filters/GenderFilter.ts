import { Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import { Gender } from '../../types/teams'

/**
 * Filters characters by a specific gender
 */
export class GenderFilter implements Filter {
  gender: Gender

  constructor(gender: Gender) {
    this.gender = gender
  }

  filter(characters: Array<Character>): Array<Character> {
    return characters.filter((character) => character.gender === this.gender)
  }
}
