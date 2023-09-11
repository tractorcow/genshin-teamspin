// SquareGrid.tsx
import React from 'react';
import CharacterIcon from "./CharacterIcon";
import { UnselectedCharactersHook } from "../state/UnselectedCharacters";

interface CharacterListProps extends UnselectedCharactersHook {
  names: string[]
}

const CharacterList = ({ names, unselectedCharacters, setUnselectedCharacters }: CharacterListProps) => {
  const toggle = (name: string) => {
    console.log(`Toggle ${ name }`)
    if (unselectedCharacters.includes(name)) {
      setUnselectedCharacters(unselectedCharacters.filter(next => next !== name))
    } else {
      setUnselectedCharacters([ ...unselectedCharacters, name ])
    }
  }
  return (
    <div className="m-16">
      <div className="flex flex-wrap gap-4">
        { names.map(name => (
          <CharacterIcon
            name={ name }
            onClick={ () => toggle(name) }
            selected={ !unselectedCharacters.includes(name) }/>)) }
      </div>
    </div>
  );
};

export default CharacterList;
