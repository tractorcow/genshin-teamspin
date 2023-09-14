import { Builder } from '../../types/selector'
import { Character } from 'genshin-db'

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
  ): [Character, Character, Character, Character] | undefined {
    // @todo
    return this.nextBuilder.build(characters, required)
  }
}
