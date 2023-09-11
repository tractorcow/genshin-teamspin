import React from "react";
import { selectRandomFour } from "../lib/selector";
import { UnselectedCharactersHook } from "../state/UnselectedCharacters";
import CharacterIcon from "./CharacterIcon";

interface TeamBuilderProps {
  unselectedCharacters: UnselectedCharactersHook["unselectedCharacters"]
  names: string[]
  team1: string[]
  team2: string[]
  setTeam1: (team: string[]) => void
  setTeam2: (team: string[]) => void
}

const TeamBuilder = ({ names, unselectedCharacters, team1, team2, setTeam1, setTeam2 }: TeamBuilderProps) => {

  const generateTeam1 = () => {
    setTeam1(selectRandomFour(names, [ ...unselectedCharacters, ...team2 ]))
  }

  const generateTeam2 = () => {
    setTeam2(selectRandomFour(names, [ ...unselectedCharacters, ...team1 ]))
  }

  return (
    <div className="m-20">
      <div className="flex flex-col items-start">
        {/* First set of four squares */ }
        <div className="grid grid-cols-4 gap-4 mb-4">
          { team1.map(name => (<CharacterIcon name={ name }/>)) }
          {/* Render additional divs to make the total count to 4 */ }
          { Array.from({ length: 4 - team1.length }).map((_, index) => (
            <div className="w-40 h-40 bg-blue-200"></div>
          )) }
        </div>

        {/* Generate Team 1 Button */ }
        <div className="mb-4 flex flex-row gap-6">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  onClick={ generateTeam1 }>
            Generate Team 1
          </button>

          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
                  onClick={ () => setTeam1([]) }>
            Clear Team 1
          </button>
        </div>

        {/* Second set of four squares */ }
        <div className="grid grid-cols-4 gap-4 mb-4">
          { team2.map(name => (<CharacterIcon name={ name }/>)) }
          {/* Render additional divs to make the total count to 4 */ }
          { Array.from({ length: 4 - team2.length }).map((_, index) => (
            <div className="w-40 h-40 bg-blue-200"></div>
          )) }
        </div>

        {/* Generate Team 2 Button */ }
        <div className="mb-4 flex flex-row gap-6">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                  onClick={ generateTeam2 }>
            Generate Team 2
          </button>

          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
                  onClick={ () => setTeam2([]) }>
            Clear Team 2
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamBuilder
