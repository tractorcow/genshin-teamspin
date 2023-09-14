import { Builder } from '../../types/selector'
import { Character } from 'genshin-db'
import { TeamType } from '../../types/teams'

/**
 * Build four random team members
 */
export class TeamTypeBuilder implements Builder {
  teamType: TeamType

  constructor(teamType: TeamType) {
    this.teamType = teamType
  }

  build(
    characters: Array<Character>,
    required?: Array<Character>
  ): [Character, Character, Character, Character] | undefined {
    // @todo
    return undefined
  }
}
