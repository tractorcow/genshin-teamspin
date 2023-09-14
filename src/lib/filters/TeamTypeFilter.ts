import { Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import { TeamType } from '../../types/teams'

/**
 * Filters characters by a specified team rule
 */
export class TeamTypeFilter implements Filter {
  teamType: TeamType

  constructor(teamType: TeamType) {
    this.teamType = teamType
  }

  filter(characters: Array<Character>): Array<Character> {
    // @todo
    return characters
  }
}
