// useUnselectedCharacters.ts
import { useState, useEffect } from 'react';

export interface UnselectedCharactersHook {
  unselectedCharacters: string[];
  setUnselectedCharacters: (characters: string[]) => void;
}

const useUnselectedCharacters = (): UnselectedCharactersHook => {
  // Read the initial value from local storage during initialisation
  const initialData = JSON.parse(localStorage.getItem('unselectedCharacters') || '[]');

  // Create state
  const [ unselectedCharacters, setInternalUnselectedCharacters ] = useState<string[]>(initialData);

  // When setUnselectedCharacters is called, update the internal state and also save to local storage
  const setUnselectedCharacters = (characters: string[]) => {
    setInternalUnselectedCharacters(characters);
    localStorage.setItem('unselectedCharacters', JSON.stringify(characters));
  };

  // Watch for changes to unselectedCharacters and update local storage accordingly
  useEffect(() => {
    localStorage.setItem('unselectedCharacters', JSON.stringify(unselectedCharacters));
  }, [ unselectedCharacters ]);

  return {
    unselectedCharacters,
    setUnselectedCharacters,
  };
};

export default useUnselectedCharacters;
