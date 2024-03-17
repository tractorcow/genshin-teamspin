import { Builder, Filter } from '../../types/selector'
import { Character } from 'genshin-db'
import {
  CompleteTeam,
  Gender,
  TeamType,
  WeaponType,
  Rarity,
} from '../../types/teams'
import { RandomBuilder } from './RandomBuilder'
import { GenderFilter } from '../filters/GenderFilter'
import { TeamTypeFilter } from '../filters/TeamTypeFilter'
import { TeamTypeBuilder } from './TeamTypeBuilder'
import { HealingBuilder } from './HealingBuilder'
import { WeaponFilter } from '../filters/WeaponFilter'
import { RarityFilter } from '../filters/RarityFilter'

/**
 * Generate team based on selected options
 */
export class OptionBuilder implements Builder {
  selectedType: TeamType | undefined
  gender: Gender | undefined
  includesHealer: boolean
  weapon: WeaponType | undefined
  rarity: Rarity | undefined

  constructor(
    selectedType: TeamType | undefined,
    gender: Gender | undefined,
    includeHeader: boolean,
    weapon: WeaponType | undefined,
    rarity: Rarity | undefined
  ) {
    this.selectedType = selectedType
    this.gender = gender
    this.includesHealer = includeHeader
    this.weapon = weapon
    this.rarity = rarity
  }

  /**
   * Get all member filters applicable
   */
  getFilters(): Array<Filter> {
    const filters = []
    if (this.gender) {
      filters.push(new GenderFilter(this.gender))
    }
    if (this.selectedType) {
      filters.push(new TeamTypeFilter(this.selectedType))
    }
    if (this.weapon) {
      filters.push(new WeaponFilter(this.weapon))
    }
    if (this.rarity) {
      filters.push(new RarityFilter(this.rarity))
    }
    return filters
  }

  build(
    characters: Array<Character>,
    required?: Array<Character>
  ): CompleteTeam | undefined {
    // Limit pool based on all filters
    const pool = this.getFilters().reduce(
      (pool, filter) => filter.filter(pool),
      characters
    )

    // Get the builder we'll be using
    let builder = this.selectedType
      ? new TeamTypeBuilder(this.selectedType)
      : new RandomBuilder()

    // If we need a healer then healer builder will be
    // processed first
    if (this.includesHealer) {
      builder = new HealingBuilder(builder)
    }

    // Delegate to builder
    return builder.build(pool, required)
  }
}
