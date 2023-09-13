import React, { MouseEventHandler } from 'react'
import classnames from 'classnames'
import blankIcon from '../images/blank-profile.webp'
import type { Character } from 'genshin-db'

type CharacterProps = {
  character: Character
  selected?: boolean
  onClick?: MouseEventHandler
}

const CharacterIcon = ({
  character,
  selected = true,
  onClick,
}: CharacterProps) => {
  let gradient =
    'bg-gradient-to-b from-rarity-five-star-300 to-rarity-five-star-500'
  if (character.name === 'Aloy') {
    gradient =
      'bg-gradient-to-b from-rarity-three-star-300 to-rarity-three-star-500'
  } else if (character.rarity === '4') {
    gradient =
      'bg-gradient-to-b from-rarity-four-star-300 to-rarity-four-star-500'
  }

  const active = selected ? 'opacity-100' : 'opacity-50'
  const clickable = onClick ? 'cursor-pointer' : ''

  return (
    <div
      className={classnames(
        'w-40 h-52 bg-red-200 rounded-xl overflow-hidden border-2',
        clickable
      )}
      onClick={onClick}
    >
      <div className={classnames('w-40 h-40', gradient, active)}>
        <img
          className="w-40 h-40"
          src={character.images?.icon || blankIcon}
          alt={character.name}
        />
      </div>
      <div className="bg-white px-4 text-lg font-bold h-12 flex items-center">
        <p className={classnames('text-center leading-4 block w-full', active)}>
          {character.name}
        </p>
      </div>
    </div>
  )
}

export default CharacterIcon
