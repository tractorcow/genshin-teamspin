import { Builder } from '../../types/selector'
import { Character } from 'genshin-db'
import { filterHealers, filterNotNamed, shuffle } from '../queries'
import { CompleteTeam } from '../../types/teams'

/**
 * Build a team that has a healer
 */
export class HealingBuilder implements Builder {
  nextBuilder: Builder

  constructor(nextBuilder: Builder) {
    this.nextBuilder = nextBuilder
  }

  build(
    characters: Array<Character>,
    required?: Array<Character>
  ): CompleteTeam | undefined {
    // Basic strategy is to pick random healers, and keep building teams until
    // one of the healers has a compatible team
    const healers = shuffle(filterHealers(characters))

    for (const healer of healers) {
      // Build team with this healer as required
      const nextRequired = [...(required || []), healer]
      const nextPool = filterNotNamed(
        characters,
        nextRequired.map((r) => r.name)
      )
      const team = this.nextBuilder.build(nextPool, nextRequired)
      if (team) {
        return team
      }
    }
    return undefined
  }
}
