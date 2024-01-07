import { TypeGroup } from '../types/teams'

const teamTypes: Array<TypeGroup> = [
  {
    group: 'Basic Reactions',
    types: [
      {
        name: 'Quicken',
        description: 'Dendro and Electro',
        members: [
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_ELECTRO' },
          {
            element: [
              'ELEMENT_DENDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_ANEMO',
              'ELEMENT_GEO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Swirl',
        description: 'A team that can create swirl with anemo',
        members: [
          { element: 'ELEMENT_ANEMO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_HYDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_PYRO',
            ],
          },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_HYDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_PYRO',
              'ELEMENT_ANEMO',
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Crystalize',
        description: 'A team that can make shields',
        members: [
          { element: 'ELEMENT_GEO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_HYDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_PYRO',
            ],
          },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_HYDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_PYRO',
              'ELEMENT_GEO',
            ],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Electro-Charged',
        description: 'Hydro and electro (electro DoT)',
        members: [
          { element: 'ELEMENT_ELECTRO' },
          { element: 'ELEMENT_HYDRO' },
          {
            element: [
              'ELEMENT_HYDRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Overloaded',
        description: 'Pyro and electro (AoE Pyro DoT)',
        members: [
          { element: 'ELEMENT_ELECTRO' },
          { element: 'ELEMENT_PYRO' },
          {
            element: [
              'ELEMENT_PYRO',
              'ELEMENT_ELECTRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Freeze',
        description: 'Cryo and hydro to immobilise',
        members: [
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_HYDRO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_HYDRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Melt',
        description: 'Pyro and cryo',
        members: [
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_PYRO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_PYRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Superconduct',
        description: 'Cryo and Electro',
        members: [
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_ELECTRO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_ELECTRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Vaporise',
        description: 'Pyro and hydro',
        members: [
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_HYDRO' },
          {
            element: [
              'ELEMENT_CRYO',
              'ELEMENT_PYRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Burning',
        description: 'Pyro and dendro',
        members: [
          { element: 'ELEMENT_PYRO' },
          { element: 'ELEMENT_DENDRO' },
          {
            element: [
              'ELEMENT_DENDRO',
              'ELEMENT_PYRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
            ],
          },
          {},
        ],
      },
      {
        name: 'Bloom',
        description: 'Hydro and dendro',
        members: [
          { element: 'ELEMENT_HYDRO' },
          { element: 'ELEMENT_DENDRO' },
          {
            element: [
              'ELEMENT_DENDRO',
              'ELEMENT_HYDRO',
              'ELEMENT_GEO',
              'ELEMENT_ANEMO',
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
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_HYDRO' },
          {},
        ],
      },
      {
        name: 'Hyperbloom',
        description: 'Hydro, dendro, and electro',
        members: [
          { element: 'ELEMENT_HYDRO' },
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_ELECTRO' },
          {},
        ],
      },
      {
        name: 'Burgeon',
        description: 'Hydro, dendro, and pyro',
        members: [
          { element: 'ELEMENT_HYDRO' },
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_PYRO' },
          {},
        ],
      },

      {
        name: 'Aggravate',
        description: 'Dendro and two electro for aggravate damage',
        members: [
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_ELECTRO' },
          { element: 'ELEMENT_ELECTRO' },
          {},
        ],
      },
      {
        name: 'Spread',
        description: 'Electro with two dendro for spread damage',
        members: [
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_ELECTRO' },
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
          { element: 'ELEMENT_GEO' },
          { element: 'ELEMENT_GEO' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Pyro',
        description: 'Two pyro for attack bonus',
        members: [
          { element: 'ELEMENT_PYRO' },
          { element: 'ELEMENT_PYRO' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Cryo',
        description: 'Two cryo for crit rate bonus',
        members: [
          { element: 'ELEMENT_CRYO' },
          { element: 'ELEMENT_CRYO' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Hydro',
        description: 'Two hydro for HP bonus',
        members: [
          { element: 'ELEMENT_HYDRO' },
          { element: 'ELEMENT_HYDRO' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Anemo',
        description: 'Two anemo for movement bonus',
        members: [
          { element: 'ELEMENT_ANEMO' },
          { element: 'ELEMENT_ANEMO' },
          { element: 'different' },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Dendro',
        description:
          'Two dendro, and something they can react with for reaction elemental bonus',
        members: [
          { element: 'ELEMENT_DENDRO' },
          { element: 'ELEMENT_DENDRO' },
          {
            // Dendro resonance needs one of these to actually have effect
            element: ['ELEMENT_HYDRO', 'ELEMENT_PYRO', 'ELEMENT_ELECTRO'],
          },
          { element: 'different' },
        ],
      },
      {
        name: 'Double Elecro',
        description: 'Two electro, two non-electro',
        members: [
          { element: 'ELEMENT_ELECTRO' },
          { element: 'ELEMENT_ELECTRO' },
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
          { element: 'ELEMENT_GEO', name: 'Gorou' },
          { element: 'ELEMENT_GEO' },
          { element: 'ELEMENT_GEO' },
          { element: 'different' },
        ],
      },
      {
        name: 'Nilou Bountiful Bloom',
        description: 'Nilou and hydro / dendro only for her special reaction',
        members: [
          { element: 'ELEMENT_HYDRO', name: 'Nilou' },
          { element: 'ELEMENT_DENDRO' },
          { element: ['ELEMENT_DENDRO', 'ELEMENT_HYDRO'] },
          { element: ['ELEMENT_DENDRO', 'ELEMENT_HYDRO'] },
        ],
      },
      {
        name: 'Iniquitous Baptist',
        description:
          "Includes all elements required to defeat John's special triple shields",
        members: [
          { element: 'ELEMENT_DENDRO' }, // Electro / Hydro shield
          { element: 'ELEMENT_HYDRO' }, // Pyro shield
          { element: 'ELEMENT_PYRO' }, // Electro / Cryo shield
          {},
        ],
      },
    ],
  },
]

export default teamTypes
