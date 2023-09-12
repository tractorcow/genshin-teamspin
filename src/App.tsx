import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import genshindb, { Language } from 'genshin-db'
import CharacterList from "./components/CharacterList";
import TeamBuilder from "./components/TeamBuilder";
import useUnselectedCharacters from "./state/UnselectedCharacters";
import background from './images/background.jpg'

function App() {
  genshindb.setOptions({ queryLanguages: [ Language.English ] });
  const names = genshindb.characters("names", { matchCategories: true })
  const { unselectedCharacters, setUnselectedCharacters } = useUnselectedCharacters();
  const [ team1, setTeam1 ] = useState<string[]>([]);
  const [ team2, setTeam2 ] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-yellow-100 bg-cover bg-center"
         style={ { backgroundImage: `url(${ background })` } }>

      <div className="container w-[1024px] px-20 mx-auto bg-opacity-90 bg-white min-h-screen">
        <header className="py-12">
          <h1 className="text-3xl pb-4 font-bold">Genshin Impact - Random Team Builder</h1>
          <p>This is a simple tool you can use to generate random teams for Spiral Abyss. Use "Character Selector" to
            flag the characters you have available, and then "Team Builder" to make a random team</p>
        </header>
        <div>
          <Tabs>
            <TabList className="mb-4 flex flex-row gap-6">
              <Tab className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Team
                Builder</Tab>
              <Tab className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Character
                Selector</Tab>
            </TabList>

            <TabPanel>
              <h2 className="text-2xl pb-6 pt-12 font-bold">Team Builder</h2>
              <TeamBuilder names={ names }
                           unselectedCharacters={ unselectedCharacters } team1={ team1 } setTeam1={ setTeam1 }
                           team2={ team2 } setTeam2={ setTeam2 }/>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl pb-6 pt-12 font-bold">Character Selector</h2>
              <CharacterList names={ names }
                             unselectedCharacters={ unselectedCharacters }
                             setUnselectedCharacters={ setUnselectedCharacters }/>
            </TabPanel>
          </Tabs>
        </div>
        <div className="py-12">
          <a href="https://github.com/tractorcow/genshin-teamspin" className="underline" target="_blank" rel="noreferrer noopener">
            Contribute to this app on Github!
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
