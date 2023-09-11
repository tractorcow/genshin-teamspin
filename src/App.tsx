import React from 'react';
import './App.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <div className="container mx-auto bg-white">
        <header>Genshin team builder</header>
        <div>
          <Tabs>
            <TabList className="flex justify-between p-4">
              <Tab className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Team Builder</Tab>
              <Tab className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Character
                Selector</Tab>
            </TabList>

            <TabPanel>
              <h2>Team Builder</h2>
            </TabPanel>
            <TabPanel>
              <h2>Character Selector</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
