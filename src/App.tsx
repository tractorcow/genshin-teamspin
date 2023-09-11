import React, { useState } from 'react';
import './App.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import genshindb, { Language } from 'genshin-db'
import CharacterList from "./components/CharacterList";
import TeamBuilder from "./components/TeamBuilder";
import useUnselectedCharacters from "./state/UnselectedCharacters";

function App() {
  genshindb.setOptions({ queryLanguages: [ Language.English ] });
  const names = genshindb.characters("names", { matchCategories: true })
  const { unselectedCharacters, setUnselectedCharacters } = useUnselectedCharacters();
  const [ team1, setTeam1 ] = useState<string[]>([]);
  const [ team2, setTeam2 ] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-yellow-100">
      <div className="container mx-auto bg-white">
        <header>
          <h1 className="text-3xl p-10">Genshin team builder</h1>
        </header>
        <div>
          <Tabs>
            <TabList className="flex justify-between p-4">
              <Tab className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Team Builder</Tab>
              <Tab className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Character
                Selector</Tab>
            </TabList>

            <TabPanel>
              <h2 className="text-2xl p-6">Team Builder</h2>
              <TeamBuilder names={ names }
                           unselectedCharacters={ unselectedCharacters } team1={ team1 } setTeam1={ setTeam1 }
                           team2={ team2 } setTeam2={ setTeam2 }/>
            </TabPanel>
            <TabPanel>
              <h2 className="text-2xl p-6">Character Selector</h2>
              <CharacterList names={ names }
                             unselectedCharacters={ unselectedCharacters }
                             setUnselectedCharacters={ setUnselectedCharacters }/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
