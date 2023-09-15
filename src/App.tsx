import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import CharacterList from './components/CharacterList'
import TeamList from './components/TeamList'
import useUnselectedCharacters from './state/UnselectedCharacters'
import background from './images/background.jpg'
import useGenshinDataLoader from './state/GenshinDataLoader'
import { filterNotNamed, getCharacters } from './lib/queries'
import Loading from './components/Loading'
import classnames from 'classnames'

function App() {
  const { genshindb, loading } = useGenshinDataLoader()
  const {
    unselectedCharacters,
    setUnselectedCharacters,
    mcElement,
    setMCElement,
  } = useUnselectedCharacters()
  const [tabIndex, setTabIndex] = useState(0)

  const characters = loading ? [] : getCharacters(genshindb, mcElement)
  const ownedCharacters = filterNotNamed(characters, unselectedCharacters)

  return (
    <div
      className="min-h-screen bg-yellow-100 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container px-6 sm:px-12 mx-auto bg-opacity-90 bg-white min-h-screen max-w-[768px]">
        <header className="py-12">
          <h1 className="text-3xl pb-4 font-bold">
            Genshin Impact - Random Team Builder
          </h1>
          <p>
            This is a simple tool you can use to generate random teams for
            Spiral Abyss. Use "Character Selector" to flag the characters you
            have available, and then "Team Builder" to make a random team
          </p>
        </header>
        <div>
          {loading && <Loading />}
          {!loading && (
            <Tabs
              forceRenderTabPanel={true}
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className="mb-4 flex flex-row gap-6">
                <Tab className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  Team Builder
                </Tab>
                <Tab className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                  Character Selector
                </Tab>
              </TabList>

              <TabPanel className={classnames({ hidden: tabIndex !== 0 })}>
                <h2 className="text-2xl pb-6 pt-12 font-bold">Team Builder</h2>
                <TeamList characters={ownedCharacters} />
              </TabPanel>
              <TabPanel className={classnames({ hidden: tabIndex !== 1 })}>
                <h2 className="text-2xl pb-6 pt-12 font-bold">
                  Character Selector
                </h2>
                <CharacterList
                  mcElement={mcElement}
                  setMCElement={setMCElement}
                  characters={characters}
                  unselectedCharacters={unselectedCharacters}
                  setUnselectedCharacters={setUnselectedCharacters}
                />
              </TabPanel>
            </Tabs>
          )}
        </div>
        <div className="py-12">
          <a
            href="https://github.com/tractorcow/genshin-teamspin"
            className="underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contribute to this app on Github!
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
