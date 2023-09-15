import React, { MouseEventHandler } from 'react'
import classnames from 'classnames'
import blankIcon from '../images/blank-profile.webp'
import type { Character } from 'genshin-db'
import ElementIcon from './ElementIcon'

type CharacterProps = {
  character: Character
  selected?: boolean
  onClick?: MouseEventHandler
  className?: string
}

const imageOverrides: Record<string, string> = {
  Kirara:
    'https://act.hoyoverse.com/hk4e/e20200928calculate/item_icon_u1ff2e/83647f585437226dc6ec12de6a9877c2.png',
  Lynette:
    'https://act.hoyoverse.com/hk4e/e20200928calculate/item_icon_u1ff2e/1890b4f07e704aecfcce53d714eaa2cd.png',
  Lyney:
    'https://act.hoyoverse.com/hk4e/e20200928calculate/item_icon_u1ff2e/8841a1d704877886990d8bc21fbe0385.png',
  Freminet:
    'https://act.hoyoverse.com/hk4e/e20200928calculate/item_icon_u1ff2e/d85402747078a066815d921130aaec62.png',
}

const CharacterIcon = ({
  character,
  selected = true,
  onClick,
  className,
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
  const url =
    imageOverrides?.[character.name] || character.images?.icon || blankIcon

  return (
    <div
      className={classnames(
        className,
        'bg-red-200 rounded-xl overflow-hidden border-2',
        clickable
      )}
      onClick={onClick}
    >
      <div
        className={classnames(
          'w-full aspect-square relative',
          gradient,
          active
        )}
      >
        <img
          className="absolute left-0 right-0 top-0 bottom-0"
          src={url}
          alt={character.name}
        />
        <div className="absolute left-1 top-1 w-8 h-8 rounded-2xl bg-gray-700 p-1">
          <ElementIcon element={character.element} />
        </div>
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
