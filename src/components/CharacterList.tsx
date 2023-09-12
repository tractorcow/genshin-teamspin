// SquareGrid.tsx
import React from 'react';
import CharacterIcon from "./CharacterIcon";
import { UnselectedCharactersHook } from "../state/UnselectedCharacters";
import type { genshinDbType } from "../lib/genshindb";

interface CharacterListProps extends UnselectedCharactersHook {
  genshindb: genshinDbType
  names: string[]
}

const CharacterList = ({ genshindb, names, unselectedCharacters, setUnselectedCharacters }: CharacterListProps) => {
  const toggle = (name: string) => {
    console.log(`Toggle ${ name }`)
    if (unselectedCharacters.includes(name)) {
      setUnselectedCharacters(unselectedCharacters.filter(next => next !== name))
    } else {
      setUnselectedCharacters([ ...unselectedCharacters, name ])
    }
  }
  return (
    <div className="">
      <div className="flex flex-wrap gap-4">
        { names.map(name => (
          <CharacterIcon
            genshindb={ genshindb }
            name={ name }
            onClick={ () => toggle(name) }
            selected={ !unselectedCharacters.includes(name) }/>)) }
      </div>
    </div>
  );
};

export default CharacterList;
