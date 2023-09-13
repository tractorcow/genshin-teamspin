// SquareGrid.tsx
import React from 'react'
import CharacterIcon from './CharacterIcon'
import { UnselectedCharactersHook } from '../state/UnselectedCharacters'
import type { Character } from 'genshin-db'

interface CharacterListProps extends UnselectedCharactersHook {
  characters: Array<Character>
}

const CharacterList = ({
  characters,
  unselectedCharacters,
  setUnselectedCharacters,
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
