import React, { useState } from 'react'
import type { Character } from 'genshin-db'
import TeamGenerator from './TeamGenerator'
import { filterNotNamed } from '../lib/queries'

interface TeamBuilderProps {
  characters: Array<Character>
}

const TeamList = ({ characters }: TeamBuilderProps) => {
  const [team1, setTeam1] = useState<Array<string>>([])
  const [team2, setTeam2] = useState<Array<string>>([])

  // Teams cannot contain each other's characters!
  const team1Characters = filterNotNamed(characters, team2)
  const team2Characters = filterNotNamed(characters, team1)

  return (
    <div className="">
      <div className="flex flex-col items-start">
        <TeamGenerator
          characters={team1Characters}
          team={team1}
          setTeam={setTeam1}
          name={'first'}
        />
        <TeamGenerator
          characters={team2Characters}
          team={team2}
          setTeam={setTeam2}
          name={'second'}
        />
      </div>
    </div>
  )
}

export default TeamList
