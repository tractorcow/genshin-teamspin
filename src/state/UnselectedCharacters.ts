// useUnselectedCharacters.ts
import { useState, useEffect } from 'react'
import { ElementType } from '../types/teams'

export interface UnselectedCharactersHook {
  unselectedCharacters: string[]
  setUnselectedCharacters: (characters: string[]) => void
  mcElement: ElementType
  setMCElement: (element: ElementType) => void
}

const useUnselectedCharacters = (): UnselectedCharactersHook => {
  // Read the initial value from local storage during initialisation
  const initialData = JSON.parse(
    localStorage.getItem('unselectedCharacters') || '[]'
  )

  // Note: ignore old data from before the element rename
  let rawMcElement = localStorage.getItem('mcElement')
  if (rawMcElement && !rawMcElement.startsWith('ELEMENT_')) {
    rawMcElement = null
  }
  const initialMCElement: ElementType =
    (rawMcElement as ElementType) || 'ELEMENT_DENDRO'

  // Create state
  const [unselectedCharacters, setInternalUnselectedCharacters] =
    useState<string[]>(initialData)
  const [mcElement, setInternalMCElement] =
    useState<ElementType>(initialMCElement)

  // When setUnselectedCharacters is called, update the internal state and also save to local storage
  const setUnselectedCharacters = (characters: string[]) => {
    setInternalUnselectedCharacters(characters)
    localStorage.setItem('unselectedCharacters', JSON.stringify(characters))
  }

  const setMCElement = (element: ElementType) => {
    setInternalMCElement(element)
    localStorage.setItem('mcElement', element)
  }

  // Watch for changes to unselectedCharacters and update local storage accordingly
  useEffect(() => {
    localStorage.setItem(
      'unselectedCharacters',
      JSON.stringify(unselectedCharacters)
    )
    localStorage.setItem('mcElement', mcElement)
  }, [unselectedCharacters, mcElement])

  return {
    unselectedCharacters,
    setUnselectedCharacters,
    mcElement,
    setMCElement,
  }
}

export default useUnselectedCharacters
