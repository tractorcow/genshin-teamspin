import CharacterIcon from './CharacterIcon'
import BlankIcon from './BlankIcon'
import React, { useState } from 'react'
import { Character } from 'genshin-db'
import { filterNamed } from '../lib/queries'
import { getTeamType, selectRandomFour, teamTypes } from '../lib/selector'

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
  const [showOptions, setShowOptions] = useState(false)
  const [teamType, setTeamType] = useState('')
  const [selection, setSelection] = useState('all')
  const [includeHealer, setIncludeHealer] = useState(false)
  const selectedType = getTeamType(teamType)

  return (
    <div className="mb-12">
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
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={generateTeam}
        >
          Generate {name}
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTeam([])}
        >
          Clear {name}
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowOptions((shown) => !shown)}
        >
          {showOptions ? 'Hide options' : 'Show extra options'}
        </button>
      </div>

      {showOptions && (
        <div className="p-4 border rounded border-black w-full max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team Type
            </label>
            <select
              className="w-full p-2"
              value={teamType}
              onChange={(e) => setTeamType(e.target.value)}
            >
              <option value="">Select team type</option>
              {teamTypes.map((group) => (
                <optgroup key={group.group} label={group.group}>
                  {group.types.map((type) => (
                    <option key={type.name} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {selectedType && (
              <p className="italic text-sm p-3">{selectedType.description}</p>
            )}
          </div>

          <div className="mb-4">
            <span className="text-gray-700 text-sm font-bold">Genders</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="selection"
                  value="all"
                  checked={selection === 'all'}
                  onChange={(e) => setSelection(e.target.value)}
                />
                <span className="ml-2">All</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="selection"
                  value="male"
                  checked={selection === 'male'}
                  onChange={(e) => setSelection(e.target.value)}
                />
                <span className="ml-2">Male Only</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name="selection"
                  value="female"
                  checked={selection === 'female'}
                  onChange={(e) => setSelection(e.target.value)}
                />
                <span className="ml-2">Female Only</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={includeHealer}
                onChange={() => setIncludeHealer(!includeHealer)}
              />
              <span className="ml-2">Include at least one healer</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamGenerator
