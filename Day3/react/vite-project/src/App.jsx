import React from 'react'
import CharacterCount from './Components/CharacterCount'
import BackGroundColor from './Components/BackGroundColor'
import FormValid from './Components/FormValid'
import Digital from './Components/Digital'
import FetchUser from './Components/FetchUser'
import DarkMode from './Components/DarkMode'

const App = () => {
  return (
    <div>
      <CharacterCount/>
      <BackGroundColor/>
      <FormValid/>
      <Digital/>
      <FetchUser/>
      <DarkMode/>


    </div>
  )
}

export default App