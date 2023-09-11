export function selectRandomFour(names: string[], unselectedCharacters: string[]): string[] {
  // Filter out names that are in the 'unselectedCharacters' array
  const filteredNames = names.filter(name => !unselectedCharacters.includes(name));

  // If there are less than 4 names left, return them all
  if (filteredNames.length <= 4) {
    return filteredNames;
  }

  // Randomly select 4 names from the filtered list
  const selectedNames: string[] = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * filteredNames.length);
    selectedNames.push(filteredNames[randomIndex]);
    filteredNames.splice(randomIndex, 1); // Remove the selected name to avoid duplicates
  }
  return selectedNames;
}
