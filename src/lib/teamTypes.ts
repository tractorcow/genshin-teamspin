import { ElementType, TypeGroup } from '../types/teams'

const teamTypes: Array<TypeGroup> = [
  {
    group: 'Basic Reactions',
    types: [
      {
        name: 'Quicken',
        description: 'Dendro and Electro',
        members: [
          { element: ElementType.Dendro },
          { element: ElementType.Electro },
          {
            element: [
              ElementType.Dendro,
              ElementType.Electro,
              ElementType.Anemo,
              ElementType.Geo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Swirl',
        description: 'A team that can create swirl with anemo',
        members: [
          { element: ElementType.Anemo },
          {
            element: [
              ElementType.Cryo,
              ElementType.Hydro,
              ElementType.Electro,
              ElementType.Pyro,
            ],
          },
          {
            element: [
              ElementType.Cryo,
              ElementType.Hydro,
              ElementType.Electro,
              ElementType.Pyro,
              ElementType.Anemo,
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Crystalize',
        description: 'A team that can make shields',
        members: [
          { element: ElementType.Geo },
          {
            element: [
              ElementType.Cryo,
              ElementType.Hydro,
              ElementType.Electro,
              ElementType.Pyro,
            ],
          },
          {
            element: [
              ElementType.Cryo,
              ElementType.Hydro,
              ElementType.Electro,
              ElementType.Pyro,
              ElementType.Geo,
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Electro-Charged',
        description: 'Hydro and electro (electro DoT)',
        members: [
          { element: ElementType.Electro },
          { element: ElementType.Hydro },
          {
            element: [
              ElementType.Hydro,
              ElementType.Electro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Overloaded',
        description: 'Pyro and electro (AoE Pyro DoT)',
        members: [
          { element: ElementType.Electro },
          { element: ElementType.Pyro },
          {
            element: [
              ElementType.Pyro,
              ElementType.Electro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Freeze',
        description: 'Cryo and hydro to immobilise',
        members: [
          { element: ElementType.Cryo },
          { element: ElementType.Hydro },
          {
            element: [
              ElementType.Cryo,
              ElementType.Hydro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Melt',
        description: 'Pyro and cryo',
        members: [
          { element: ElementType.Cryo },
          { element: ElementType.Pyro },
          {
            element: [
              ElementType.Cryo,
              ElementType.Pyro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Superconduct',
        description: 'Cryo and Electro',
        members: [
          { element: ElementType.Cryo },
          { element: ElementType.Electro },
          {
            element: [
              ElementType.Cryo,
              ElementType.Electro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Vaporise',
        description: 'Pyro and hydro',
        members: [
          { element: ElementType.Cryo },
          { element: ElementType.Hydro },
          {
            element: [
              ElementType.Cryo,
              ElementType.Pyro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Burning',
        description: 'Pyro and dendro',
        members: [
          { element: ElementType.Pyro },
          { element: ElementType.Dendro },
          {
            element: [
              ElementType.Dendro,
              ElementType.Pyro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
        ],
      },
      {
        name: 'Bloom',
        description: 'Hydro and dendro',
        members: [
          { element: ElementType.Hydro },
          { element: ElementType.Dendro },
          {
            element: [
              ElementType.Dendro,
              ElementType.Hydro,
              ElementType.Geo,
              ElementType.Anemo,
            ],
          },
          {},
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
          { element: ElementType.Cryo },
          { element: ElementType.Cryo },
          { element: ElementType.Hydro },
          {},
        ],
      },
      {
        name: 'Hyperbloom',
        description: 'Hydro, dendro, and electro',
        members: [
          { element: ElementType.Hydro },
          { element: ElementType.Dendro },
          { element: ElementType.Electro },
          {},
        ],
      },
      {
        name: 'Burgeon',
        description: 'Hydro, dendro, and pyro',
        members: [
          { element: ElementType.Hydro },
          { element: ElementType.Dendro },
          { element: ElementType.Pyro },
          {},
        ],
      },

      {
        name: 'Aggravate',
        description: 'Dendro and two electro for aggravate damage',
        members: [
          { element: ElementType.Dendro },
          { element: ElementType.Electro },
          { element: ElementType.Electro },
          {},
        ],
      },
      {
        name: 'Spread',
        description: 'Electro with two dendro for spread damage',
        members: [
          { element: ElementType.Dendro },
          { element: ElementType.Dendro },
          { element: ElementType.Electro },
          {},
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
          { element: ElementType.Geo },
          { element: ElementType.Geo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Pyro',
        description: 'Two pyro for attack bonus',
        members: [
          { element: ElementType.Pyro },
          { element: ElementType.Pyro },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Cryo',
        description: 'Two cryo for crit rate bonus',
        members: [
          { element: ElementType.Cryo },
          { element: ElementType.Cryo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Hydro',
        description: 'Two hydro for HP bonus',
        members: [
          { element: ElementType.Hydro },
          { element: ElementType.Hydro },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Anemo',
        description: 'Two anemo for movement bonus',
        members: [
          { element: ElementType.Anemo },
          { element: ElementType.Anemo },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Dendro',
        description:
          'Two dendro, and something they can react with for reaction elemental bonus',
        members: [
          { element: ElementType.Dendro },
          { element: ElementType.Dendro },
          {
            // Dendro resonance needs one of these to actually have effect
            element: [ElementType.Hydro, ElementType.Pyro, ElementType.Electro],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Elecro',
        description: 'Two electro, two non-electro',
        members: [
          { element: ElementType.Electro },
          { element: ElementType.Electro },
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
        name: 'Gorou Triple-Geo',
        description: 'Miss Hina and her entourage',
        members: [
          { element: ElementType.Geo, name: 'Gorou' },
          { element: ElementType.Geo },
          { element: ElementType.Geo },
          { element: 'different' },
        ],
      },
      {
        name: 'Nilou Bountiful Bloom',
        description: 'Nilou and hydro / dendro only for her special reaction',
        members: [
          { element: ElementType.Hydro, name: 'Nilou' },
          { element: ElementType.Dendro },
          { element: [ElementType.Dendro, ElementType.Hydro] },
          { element: [ElementType.Dendro, ElementType.Hydro] },
        ],
      },
      {
        name: 'Iniquitous Baptist',
        description:
          "Includes all elements required to defeat John's special triple shields",
        members: [
          { element: ElementType.Dendro }, // Electro / Hydro shield
          { element: ElementType.Hydro }, // Pyro shield
          { element: ElementType.Pyro }, // Electro / Cryo shield
          {},
        ],
      },
    ],
  },
]

export default teamTypes
