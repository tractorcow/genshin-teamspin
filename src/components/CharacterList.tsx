// SquareGrid.tsx
import React from 'react'
import CharacterIcon from './CharacterIcon'
import { UnselectedCharactersHook } from '../state/UnselectedCharacters'
import type { Character } from 'genshin-db'
import { ElementType } from '../types/teams'

interface CharacterListProps extends UnselectedCharactersHook {
  characters: Array<Character>
}

const CharacterList = ({
  characters,
  unselectedCharacters,
  setUnselectedCharacters,
  mcElement,
  setMCElement,
}: CharacterListProps) => {
  /**
   * Toggle string inside the unselected characters list
   *
   * @param character
   */
  const toggle = (character: Character) => {
    if (unselectedCharacters.includes(character.name)) {
      setUnselectedCharacters(
        unselectedCharacters.filter((next) => next !== character.name)
      )
    } else {
      setUnselectedCharacters([...unselectedCharacters, character.name])
    }
  }

  return (
    <div className="">
      <div className="p-4 mb-12 border rounded border-gray-400 w-full max-w-md">
        <div className="flex flex-row">
          <label className="block text-gray-700 font-bold mr-6 leading-10">
            MC&nbsp;Element
          </label>
          <select
            className="p-2"
            value={mcElement}
            onChange={(e) => setMCElement(e.target.value as ElementType)}
          >
            <option value="Dendro">Dendro</option>
            <option value="Hydro">Hydro</option>
            <option value="Electro">Electro</option>
            <option value="Anemo">Anemo</option>
            <option value="Geo">Geo</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {characters.map((character) => (
          <CharacterIcon
            key={character.name}
            character={character}
            onClick={() => toggle(character)}
            selected={!unselectedCharacters.includes(character.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default CharacterList
