import type { Character } from 'genshin-db'

export enum Element {
  Cryo = 'Cryo',
  Pyro = 'Pyro',
  Hydro = 'Hydro',
  Electro = 'Electro',
  Geo = 'Geo',
  Anemo = 'Anemo',
  Dendro = 'Dendro',
}

export enum WeaponType {
  Claymore = 'Claymore',
  Sword = 'Sword',
  Bow = 'Bow',
  Catalyst = 'Catalyst',
  Polearm = 'Polearm',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

// Restriction rules for a team member. Can be empty if slot is open to all.
export type TeamMemberType = {
  // For specific named character
  name?: string
  // 'same' means same as any other character, different means different to all other characters
  element?: Element | 'same' | 'different' | Array<Element>
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
