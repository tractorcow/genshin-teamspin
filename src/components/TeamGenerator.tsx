import CharacterIcon from './CharacterIcon'
import BlankIcon from './BlankIcon'
import React from 'react'
import { Character } from 'genshin-db'
import { filterNamed } from '../lib/queries'
import { selectRandomFour } from '../lib/selector'

interface TeamGeneratorProps {
  characters: Array<Character>
  team: string[]
  setTeam: (team: string[]) => void
  name: string
}

const TeamGenerator = ({
  characters,
  team,
  setTeam,
  name,
}: TeamGeneratorProps) => {
  const selectedCharacters = filterNamed(characters, team)
  const generateTeam = () => {
    setTeam(selectRandomFour(characters))
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {selectedCharacters.map((character) => (
          <CharacterIcon key={`char_${character.name}`} character={character} />
        ))}
        {Array.from({ length: 4 - team.length }).map((_, index) => (
          <BlankIcon key={`space_${index}`} />
        ))}
      </div>

      <div className="mb-4 flex flex-row gap-6">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={generateTeam}
        >
          Generate {name}
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTeam([])}
        >
          Clear {name}
        </button>
      </div>
    </div>
  )
}

export default TeamGenerator
