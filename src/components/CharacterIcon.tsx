import React, { MouseEventHandler } from 'react'
import genshindb from 'genshin-db'
import classnames from "classnames";

type CharacterProps = {
  name: string
  selected?: boolean,
  onClick?: MouseEventHandler
}

const CharacterIcon = ({ name, selected = true, onClick }: CharacterProps) => {
  const characterData = genshindb.characters(name)
  if (!characterData) {
    throw new Error(`Unknown character ${ name }`)
  }

  let gradient = "bg-gradient-to-b from-rarity-five-star-300 to-rarity-five-star-500"
  if (characterData.name === 'Aloy') {
    gradient = "bg-gradient-to-b from-rarity-three-star-300 to-rarity-three-star-500"
  } else if (characterData.rarity === '4') {
    gradient = "bg-gradient-to-b from-rarity-four-star-300 to-rarity-four-star-500"
  }

  const active = selected ? "opacity-100" : "opacity-50"
  const clickable = onClick ? "cursor-pointer" : ""

  return <div className={ classnames("w-40 h-52 bg-red-200", active, clickable) } onClick={ onClick }>
    <div className={ classnames("w-40 h-40", gradient) }>
      <img className="w-40 h-40" src={ characterData.images.icon } alt={ characterData.name }/>
    </div>
    <div className="bg-white text-center p-4 text-xl font-bold h-12">
      { characterData.name }
    </div>
  </div>
}

export default CharacterIcon
