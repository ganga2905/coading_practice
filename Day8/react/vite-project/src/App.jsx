import React from 'react'
import LocalStore from './Components/LocalStore'
import Joke from './Components/Joke'
import DogApi from './Components/DogApi'

const App = () => {
  return (
    <div>
      <LocalStore/>
      <Joke/>
      <DogApi/>
    </div>
  )
}

export default App