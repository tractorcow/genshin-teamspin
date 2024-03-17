import CharacterIcon from './CharacterIcon'
import BlankIcon from './BlankIcon'
import React, { useState } from 'react'
import { Character } from 'genshin-db'
import { filterNamed, findTeamType, healers } from '../lib/queries'
import teamTypes from '../lib/teamTypes'
import { Gender, WeaponType, WeaponMap, Rarity } from '../types/teams'
import { OptionBuilder } from '../lib/builders/OptionBuilder'
import classnames from 'classnames'

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
  const [showOptions, setShowOptions] = useState(false)
  const [teamType, setTeamType] = useState('')
  const [gender, setGender] = useState<Gender | undefined>(undefined)
  const [rarity, setRarity] = useState<Rarity | undefined>(undefined)
  const [includeHealer, setIncludeHealer] = useState(false)
  const [weapon, setWeapon] = useState<WeaponType | undefined>(undefined)
  const selectedType = findTeamType(teamType, teamTypes)

  const healerTooltip = `Note: Healers list includes ${healers.join(', ')}`

  // Trigger option builder
  const generateTeam = () => {
    const builder = new OptionBuilder(
      selectedType,
      gender,
      includeHealer,
      weapon,
      rarity
    )
    const team = builder.build(characters)
    if (!team) {
      alert("Sorry, I couldn't find enough members to make that kind of team")
    } else {
      setTeam(team.map((character) => character.name))
    }
  }

  return (
    <div className="mb-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 place-items-center">
        {selectedCharacters.map((character) => (
          <CharacterIcon
            className="w-full max-w-[15rem] md:max-w-[10rem]"
            key={`char_${character.name}`}
            character={character}
          />
        ))}
        {Array.from({ length: 4 - team.length }).map((_, index) => (
          <BlankIcon
            className="w-full max-w-[15rem] md:max-w-[10rem]"
            key={`space_${index}`}
          />
        ))}
      </div>

      <div className="mb-4 flex flex-row gap-6">
        <button
          className="border border-green-500 bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded"
          onClick={generateTeam}
        >
          Generate Team
        </button>

        <button
          className="border border-red-500 bg-red-500 text-white hover:bg-red-600 font-bold py-2 px-4 rounded"
          onClick={() => setTeam([])}
        >
          Clear Team
        </button>

        <button
          className={classnames(
            'border border-blue-500 rounded p-2 transition duration-300 ease-in-out text-white hover:bg-blue-600 font-bold py-2 px-4',
            showOptions ? 'bg-blue-700' : 'bg-blue-400'
          )}
          onClick={() => setShowOptions((shown) => !shown)}
        >
          {showOptions ? 'Hide options' : 'Show options'}
        </button>
      </div>

      {showOptions && (
        <div className="p-4 border rounded border-gray-400 w-full max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team Type
            </label>
            <select
              className="w-full p-2"
              value={teamType}
              onChange={(e) => setTeamType(e.target.value)}
            >
              <option value="">Random team</option>
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Weapon Type
            </label>
            <select
              className="w-full p-2"
              value={weapon}
              onChange={(e) => setWeapon(e.target.value as WeaponType)}
            >
              <option value="">Any weapon</option>
              {WeaponMap.map((type) => (
                <option value={type.type}>{type.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <span className="text-gray-700 text-sm font-bold">Rarity</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name={`rarity_${name}`}
                  value="all"
                  checked={!rarity}
                  onChange={(e) => setRarity(undefined)}
                />
                <span className="ml-2">Any rarity</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name={`rarity_${name}`}
                  value={4}
                  checked={rarity == 4}
                  onChange={(e) => setRarity(4)}
                />
                <span className="ml-2">4 star only</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name={`rarity_${name}`}
                  value={5}
                  checked={rarity == 5}
                  onChange={(e) => setRarity(5)}
                />
                <span className="ml-2">5 star only</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <span className="text-gray-700 text-sm font-bold">Genders</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name={`selection_${name}`}
                  value="all"
                  checked={!gender}
                  onChange={(e) => setGender(undefined)}
                />
                <span className="ml-2">All</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name={`selection_${name}`}
                  value={Gender.Male}
                  checked={gender === Gender.Male}
                  onChange={(e) => setGender(Gender.Male)}
                />
                <span className="ml-2">Male Only</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio"
                  name={`selection_${name}`}
                  value={Gender.Female}
                  checked={gender === Gender.Female}
                  onChange={(e) => setGender(Gender.Female)}
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
              <span className="ml-2">
                <a className="underline cursor-pointer" title={healerTooltip}>
                  Include at least one healer
                </a>
              </span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default TeamGenerator
