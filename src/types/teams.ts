import type { Character } from 'genshin-db'

export type ElementType = Character['elementType']

export type WeaponType = Character['weaponType']

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export const WeaponMap: Array<{ type: WeaponType; label: string }> = [
  { type: 'WEAPON_BOW', label: 'Bow' },
  { type: 'WEAPON_CATALYST', label: 'Catalyst' },
  { type: 'WEAPON_CLAYMORE', label: 'Claymore' },
  { type: 'WEAPON_POLE', label: 'Polearm' },
  { type: 'WEAPON_SWORD_ONE_HAND', label: 'Sword' },
]

// Restriction rules for a team member. Can be empty if slot is open to all.
export type TeamMemberType = {
  // For specific named character
  name?: string
  // 'same' means same as any other character, different means different to all other characters
  element?: ElementType | 'same' | 'different' | Array<ElementType>
  // for specific weapon type
  weapontype?: WeaponType
  // gender
  gender?: Gender
}

export type TeamType = {
  name: string
  description: string
  // Note: Characters are matched left to right, so use more restrictive
  // rules first, with 'different' element rules at the end
  members: [TeamMemberType, TeamMemberType, TeamMemberType, TeamMemberType]
}

// Simple grouping of types
export type TypeGroup = {
  group: string
  types: Array<TeamType>
}

export type CompleteTeam = [Character, Character, Character, Character]
