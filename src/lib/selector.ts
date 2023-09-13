import type { Character } from 'genshin-db'
import { getNames } from './queries'

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
type TeamMemberType = {
  // For specific named character
  name?: string
  // 'same' means same as any other character, different means different to all other characters
  element?: Element | 'same' | 'different' | Array<Element>
  // for specific weapon type
  weapontype?: WeaponType
  // gender
  gender?: Gender
}

type TeamType = {
  name: string
  description: string
  // Note: Characters are matched left to right, so use more restrictive
  // rules first, with 'different' element rules at the end
  members: [TeamMemberType, TeamMemberType, TeamMemberType, TeamMemberType]
}

// Simple grouping of types
type TypeGroup = {
  group: string
  types: Array<TeamType>
}

export const teamTypes: Array<TypeGroup> = [
  {
    group: 'Basic Reactions',
    types: [
      {
        name: 'Quicken',
        description: 'Dendro and Electro',
        members: [
          { element: Element.Dendro },
          { element: Element.Electro },
          {
            element: [
              Element.Dendro,
              Element.Electro,
              Element.Anemo,
              Element.Geo,
            ],
          },
          {
            element: [
              Element.Dendro,
              Element.Electro,
              Element.Anemo,
              Element.Geo,
            ],
          },
        ],
      },
      {
        name: 'Swirl',
        description: 'A team that can create swirl with anemo',
        members: [
          { element: Element.Anemo },
          {
            element: [
              Element.Cryo,
              Element.Hydro,
              Element.Electro,
              Element.Pyro,
            ],
          },
          {
            element: [
              Element.Cryo,
              Element.Hydro,
              Element.Electro,
              Element.Pyro,
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Crystalize',
        description: 'A team that can make shields',
        members: [
          { element: Element.Geo },
          {
            element: [
              Element.Cryo,
              Element.Hydro,
              Element.Electro,
              Element.Pyro,
            ],
          },
          {
            element: [
              Element.Cryo,
              Element.Hydro,
              Element.Electro,
              Element.Pyro,
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Electro-Charged',
        description: 'Hydro and electro (electro DoT)',
        members: [
          { element: Element.Electro },
          { element: Element.Hydro },
          {
            element: [
              Element.Hydro,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
          {
            element: [
              Element.Hydro,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },
      {
        name: 'Overloaded',
        description: 'Pyro and electro (AoE Pyro DoT)',
        members: [
          { element: Element.Electro },
          { element: Element.Pyro },
          {
            element: [
              Element.Pyro,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
          {
            element: [
              Element.Pyro,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },
      {
        name: 'Freeze',
        description: 'Cryo and hydro to immobilise',
        members: [
          { element: Element.Cryo },
          { element: Element.Hydro },
          {
            element: [Element.Cryo, Element.Hydro, Element.Geo, Element.Anemo],
          },
          {
            element: [Element.Cryo, Element.Hydro, Element.Geo, Element.Anemo],
          },
        ],
      },
      {
        name: 'Melt',
        description: 'Pyro and cryo',
        members: [
          { element: Element.Cryo },
          { element: Element.Pyro },
          { element: [Element.Cryo, Element.Pyro, Element.Geo, Element.Anemo] },
          { element: [Element.Cryo, Element.Pyro, Element.Geo, Element.Anemo] },
        ],
      },
      {
        name: 'Superconduct',
        description: 'Cryo and Electro',
        members: [
          { element: Element.Cryo },
          { element: Element.Electro },
          {
            element: [
              Element.Cryo,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
          {
            element: [
              Element.Cryo,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },
      {
        name: 'Vaporise',
        description: 'Pyro and hydro',
        members: [
          { element: Element.Cryo },
          { element: Element.Hydro },
          { element: [Element.Cryo, Element.Pyro, Element.Geo, Element.Anemo] },
          { element: [Element.Cryo, Element.Pyro, Element.Geo, Element.Anemo] },
        ],
      },
      {
        name: 'Burning',
        description: 'Pyro and dendro',
        members: [
          { element: Element.Pyro },
          { element: Element.Dendro },
          {
            element: [Element.Dendro, Element.Pyro, Element.Geo, Element.Anemo],
          },
          {
            element: [Element.Dendro, Element.Pyro, Element.Geo, Element.Anemo],
          },
        ],
      },
      {
        name: 'Bloom',
        description: 'Hydro and dendro',
        members: [
          { element: Element.Hydro },
          { element: Element.Dendro },
          {
            element: [
              Element.Dendro,
              Element.Hydro,
              Element.Geo,
              Element.Anemo,
            ],
          },
          {
            element: [
              Element.Dendro,
              Element.Hydro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },
    ],
  },
  {
    group: 'Advanced Reactions',
    types: [
      {
        name: 'Super-Freeze',
        description: 'Hydro and double cryo for extra crit',
        members: [
          { element: Element.Cryo },
          { element: Element.Cryo },
          { element: Element.Hydro },
          {
            element: [Element.Cryo, Element.Hydro, Element.Geo, Element.Anemo],
          },
        ],
      },
      {
        name: 'Hyperbloom',
        description: 'Hydro, dendro, and electro',
        members: [
          { element: Element.Hydro },
          { element: Element.Dendro },
          { element: Element.Electro },
          {
            element: [
              Element.Dendro,
              Element.Hydro,
              Element.Electro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },
      {
        name: 'Burgeon',
        description: 'Hydro, dendro, and pyro',
        members: [
          { element: Element.Hydro },
          { element: Element.Dendro },
          { element: Element.Pyro },
          {
            element: [
              Element.Dendro,
              Element.Hydro,
              Element.Pyro,
              Element.Geo,
              Element.Anemo,
            ],
          },
        ],
      },

      {
        name: 'Aggravate',
        description: 'Dendro and two electro for aggravate damage',
        members: [
          { element: Element.Dendro },
          { element: Element.Electro },
          { element: Element.Electro },
          {
            element: [
              Element.Dendro,
              Element.Electro,
              Element.Anemo,
              Element.Geo,
            ],
          },
        ],
      },
      {
        name: 'Spread',
        description: 'Electro with two dendro for spread damage',
        members: [
          { element: Element.Dendro },
          { element: Element.Dendro },
          { element: Element.Electro },
          {
            element: [
              Element.Dendro,
              Element.Electro,
              Element.Anemo,
              Element.Geo,
            ],
          },
        ],
      },
    ],
  },
  {
    group: 'Elemental Resonance',
    types: [
      {
        name: 'Quad-Elemental',
        description: 'Four different elements for resistance bonus',
        members: [
          {},
          { element: 'different' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Geo',
        description: 'Two geo for geo damage bonus',
        members: [
          { element: Element.Geo },
          { element: Element.Geo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Pyro',
        description: 'Two pyro for attack bonus',
        members: [
          { element: Element.Pyro },
          { element: Element.Pyro },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Cryo',
        description: 'Two cryo for crit rate bonus',
        members: [
          { element: Element.Cryo },
          { element: Element.Cryo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Hydro',
        description: 'Two hydro for HP bonus',
        members: [
          { element: Element.Hydro },
          { element: Element.Hydro },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Anemo',
        description: 'Two anemo for movement bonus',
        members: [
          { element: Element.Anemo },
          { element: Element.Anemo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Dendro',
        description:
          'Two dendro, and something they can react with for reaction elemental bonus',
        members: [
          { element: Element.Dendro },
          { element: Element.Dendro },
          {
            // Dendro resonance needs one of these to actually have effect
            element: [Element.Hydro, Element.Pyro, Element.Electro],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Elecro',
        description: 'Two electro, two non-electro',
        members: [
          { element: Element.Electro },
          { element: Element.Electro },
          { element: 'different' },
          { element: 'different' },
        ],
      },
    ],
  },
  {
    group: 'Specialist Teams',
    types: [
      {
        name: 'Mono-Elemental',
        description: 'All characters of the same element',
        members: [
          {},
          { element: 'same' },
          { element: 'same' },
          { element: 'same' },
        ],
      },
      {
        name: 'Gorou Triple-Geo',
        description: 'Miss Hina and her entourage',
        members: [
          { name: 'Gorou' },
          { element: Element.Geo },
          { element: Element.Geo },
          { element: 'different' },
        ],
      },
      {
        name: 'Nilou Bountiful Bloom',
        description: 'Nilou and hydro / dendro only for her special reaction',
        members: [
          { name: 'Nilou' },
          { element: Element.Dendro },
          { element: [Element.Dendro, Element.Hydro] },
          { element: [Element.Dendro, Element.Hydro] },
        ],
      },
    ],
  },
]

/**
 * Get random team from this list
 * @param characters
 */
export function selectRandomFour(characters: Array<Character>): string[] {
  const names = getNames(characters)

  // If there are less than 4 names left, return them all
  if (names.length <= 4) {
    return names
  }

  // Randomly select 4 names from the filtered list
  const selectedNames: string[] = []
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * names.length)
    selectedNames.push(names[randomIndex])
    names.splice(randomIndex, 1) // Remove the selected name to avoid duplicates
  }
  return selectedNames
}

/**
 * Get a team type config by name
 *
 * @param type
 */
export function getTeamType(type: string | undefined): TeamType | undefined {
  if (!type) {
    return undefined
  }
  for (const group of teamTypes) {
    for (const nextType of group.types) {
      if (nextType.name === type) {
        return nextType
      }
    }
  }
  return undefined
}
